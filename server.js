const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');
const { instagramGetUrl } = require('instagram-url-direct');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(path.join(__dirname)));

const INSTAGRAM_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9,es;q=0.8',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Referer': 'https://www.instagram.com/'
};

function normalizeInstagramUrl(instagramUrl) {
  if (!instagramUrl.match(/^https?:\/\//i)) {
    instagramUrl = `https://${instagramUrl}`;
  }

  const normalized = new URL(instagramUrl);
  if (normalized.hostname === 'instagram.com') {
    normalized.hostname = 'www.instagram.com';
  }

  normalized.search = '';
  normalized.hash = '';
  return normalized.toString().replace(/\/?$/, '/');
}

async function getInstagramScraperData(instagramUrl) {
  try {
    const previewUrl = normalizeInstagramUrl(instagramUrl);
    const data = await instagramGetUrl(previewUrl, { retries: 3, delay: 1000 });
    if (!data || !data.thumbnail) {
      throw new Error('instagram-url-direct no devolvió una miniatura');
    }

    return {
      url: data.url || previewUrl,
      thumbnail: data.thumbnail,
      caption: data.caption || '',
      source: 'instagram-url-direct',
    };
  } catch (error) {
    console.warn('instagram-url-direct falló:', error.message || error);
    return null;
  }
}

function extractMeta(html, property) {
  const patterns = [
    new RegExp(`<meta[^>]*(?:property|name)=[\"']${property}[\"'][^>]*content=[\"']([^\"']+)[\"'][^>]*>`, 'i'),
    new RegExp(`<meta[^>]*content=[\"']([^\"']+)[\"'][^>]*(?:property|name)=[\"']${property}[\"'][^>]*>`, 'i')
  ];

  for (const regex of patterns) {
    const match = html.match(regex);
    if (match) {
      return match[1];
    }
  }

  return null;
}

async function fetchInstagramHtml(instagramUrl) {
  const response = await axios.get(instagramUrl, {
    headers: INSTAGRAM_HEADERS,
    maxRedirects: 5,
    validateStatus: null,
    timeout: 15000,
  });

  if (response.status !== 200) {
    throw new Error(`Instagram respondió con ${response.status}`);
  }

  return response.data;
}

async function fetchInstagramOEmbed(instagramUrl) {
  try {
    const response = await axios.get('https://api.instagram.com/oembed/', {
      params: { url: instagramUrl },
      headers: {
        'User-Agent': INSTAGRAM_HEADERS['User-Agent'],
        'Accept': 'application/json',
      },
      timeout: 15000,
      validateStatus: null,
    });

    if (response.status !== 200) {
      return null;
    }

    return response.data;
  } catch (err) {
    return null;
  }
}

async function getInstagramPreview(instagramUrl) {
  const previewUrl = normalizeInstagramUrl(instagramUrl);
  const html = await fetchInstagramHtml(previewUrl);

  let thumbnail = extractMeta(html, 'og:video:thumbnail_url') || extractMeta(html, 'og:image') || extractMeta(html, 'og:image:secure_url');
  const caption = extractMeta(html, 'og:description') || extractMeta(html, 'twitter:description');
  const title = extractMeta(html, 'og:title') || extractMeta(html, 'twitter:title');
  const pageUrl = extractMeta(html, 'og:url') || previewUrl;

  if (!thumbnail) {
    const oembed = await fetchInstagramOEmbed(previewUrl);
    if (oembed && oembed.thumbnail_url) {
      thumbnail = oembed.thumbnail_url;
    }
  }

  if (!thumbnail) {
    throw new Error('No se encontró la miniatura de Instagram');
  }

  return {
    url: pageUrl,
    thumbnail,
    caption: caption || title || '',
    source: 'meta',
  };
}

async function fetchInstagramData(instagramUrl) {
  const directData = await getInstagramScraperData(instagramUrl);
  if (directData) {
    return directData;
  }

  return await getInstagramPreview(instagramUrl);
}

app.get(['/reels', '/api/reels'], async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: 'Falta el parámetro url' });
  }

  try {
    const data = await fetchInstagramData(url);
    return res.json({ thumbnail: data.thumbnail, url: data.url, caption: data.caption, source: data.source });
  } catch (error) {
    console.error('Error scraping Instagram:', error.message || error);
    return res.status(500).json({ error: 'No se pudo obtener los datos de Instagram', details: error.message || String(error) });
  }
});

app.get(['/thumbnail', '/api/thumbnail'], async (req, res) => {
  const instagramUrl = req.query.url;

  if (!instagramUrl) {
    return res.status(400).json({ error: 'Falta el parámetro url' });
  }

  try {
    const data = await fetchInstagramData(instagramUrl);
    return res.json({ image: data.thumbnail, url: data.url, caption: data.caption, source: data.source });
  } catch (error) {
    console.error('Error scraping Instagram thumbnail:', error.message || error);
    const encodedUrl = encodeURIComponent(instagramUrl);
    const screenshotUrl = `https://screenshot.rocks/?url=${encodedUrl}&width=300&height=400`;
    return res.json({ image: screenshotUrl, fallback: true, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
  console.log('Ruta de miniatura: /thumbnail?url=https://www.instagram.com/reel/...');
  console.log('Ruta de preview: /reels?url=https://www.instagram.com/reel/...');
  console.log('Alias RESTful disponibles: /api/reels?url=... y /api/thumbnail?url=...');
});
