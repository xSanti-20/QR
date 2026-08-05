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
    const keys = ['og:image', 'og:video:thumbnail_url', 'window._sharedData', 'window.__additionalData', 'display_url', 'display_resources', 'thumbnail_src', 'thumbnail_url', 'profile_pic_url', 'dash_manifest', 'og:description'];
    for (const key of keys) {
      const idx = data.indexOf(key);
      console.log(`--- ${key} --- ${idx}`);
      if (idx !== -1) {
        console.log(data.slice(Math.max(0, idx - 120), idx + 260));
      }
    }
  });
}).on('error', e => console.error('error', e));
