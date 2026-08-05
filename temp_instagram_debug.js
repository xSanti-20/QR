const fs = require('fs');
const axios = require('axios');
const url = 'https://www.instagram.com/reel/DXfdno7jx4n/';

(async () => {
  try {
    const res = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Referer': 'https://www.instagram.com/',
      },
      maxRedirects: 5,
      timeout: 20000,
      validateStatus: null,
    });

    console.log('HTML status:', res.status);
    const data = res.data;
    console.log('HTML length:', data.length);
    const keys = [
      'og:image',
      'og:video:thumbnail_url',
      'og:title',
      'og:description',
      'window._sharedData',
      'window.__additionalDataLoaded',
      'window.__additionalData',
      'thumbnail_url',
      'display_url',
      'display_resources',
      'shortcode_media',
      'graphql',
    ];
    for (const key of keys) {
      const idx = data.indexOf(key);
      console.log(`--- ${key} ---`, idx);
      if (idx >= 0) {
        console.log(data.slice(Math.max(0, idx - 200), idx + 500).replace(/\n/g, '\\n'));
      }
    }

    const oembedUrl = 'https://api.instagram.com/oembed/';
    const oembedRes = await axios.get(oembedUrl, {
      params: { url },
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' },
      timeout: 15000,
      validateStatus: null,
    });
    console.log('oembed status:', oembedRes.status);
    console.log('oembed body:', JSON.stringify(oembedRes.data).slice(0, 1000));
  } catch (err) {
    console.error('Error:', err.message);
    if (err.response) {
      console.error('status', err.response.status);
      console.error('data', typeof err.response.data === 'string' ? err.response.data.slice(0, 1000) : JSON.stringify(err.response.data).slice(0,1000));
    }
  }
})();
