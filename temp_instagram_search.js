const https = require('https');
const url = 'https://www.instagram.com/reel/DXfdno7jx4n/';
https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
  }
}, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const patterns = [
      /["']thumbnail_src["']\s*:\s*["']([^"']+)["']/gi,
      /["']display_url["']\s*:\s*["']([^"']+)["']/gi,
      /["']display_resources["']\s*:\s*\[([^\]]+)\]/gi,
      /["']video_url["']\s*:\s*["']([^"']+)["']/gi,
      /["']og:image["']\s*:\s*["']([^"']+)["']/gi,
      /og:image[^>]*content=["']([^"']+)["']/gi,
      /window\.__additionalDataLoaded\('extra',\s*(\{.+?\})\)/gi,
      /window\.__initialData\s*=\s*(\{.+?\});/gi,
      /window\.__additionalData\s*=\s*(\{.+?\});/gi,
      /<script[^>]*>[^<]*?window\.__additionalData[^<]*<\/script>/gi,
      /<script[^>]*>[^<]*?window\.__initialData[^<]*<\/script>/gi
    ];
    for (const pattern of patterns) {
      let m;
      console.log('PATTERN:', pattern);
      while ((m = pattern.exec(data)) !== null) {
        console.log('MATCH:', m[1].slice(0, 300));
      }
      console.log('---');
    }
  });
}).on('error', e => console.error('error', e));
