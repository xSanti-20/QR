const https = require('https');
const url = 'https://www.instagram.com/reel/DXfdno7jx4n/?__a=1&__d=dis';
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
    console.log(data.slice(0, 2000));
  });
}).on('error', e => console.error('error', e));
