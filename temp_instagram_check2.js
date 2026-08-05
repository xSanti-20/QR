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
    const patterns = [
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/gi,
      /<meta[^>]+name=["']og:image["'][^>]+content=["']([^"']+)["']/gi,
      /<meta[^>]+property=["']og:video:thumbnail_url["'][^>]+content=["']([^"']+)["']/gi,
      /<meta[^>]+property=["']og:video["'][^>]+content=["']([^"']+)["']/gi,
      /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/gi,
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/gi,
    ];
    patterns.forEach((pattern) => {
      let match;
      while ((match = pattern.exec(data)) !== null) {
        console.log(match[0]);
      }
    });
    console.log('search done');
  });
}).on('error', e => console.error('error', e));
