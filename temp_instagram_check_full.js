const https = require('https');
const url = 'https://www.instagram.com/reel/DXfdno7jx4n/';
https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
  }
}, res => {
  console.log('status', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const check = (label, regex) => {
      const matches = Array.from(data.matchAll(regex));
      console.log(`--- ${label} --- ${matches.length}`);
      matches.slice(0, 5).forEach((m, i) => {
        console.log(i + 1, m[0]);
      });
    };
    check('og:image', /<meta[^>]+property=["\']og:image["\'][^>]*content=["\']([^"\']+)["\']/gi);
    check('og:video:thumbnail_url', /<meta[^>]+property=["\']og:video:thumbnail_url["\'][^>]*content=["\']([^"\']+)["\']/gi);
    check('apple-touch-icon', /<link[^>]+rel=["\']apple-touch-icon[^>]*>/gi);
    console.log('body length', data.length);
  });
}).on('error', e => console.error('error', e));
