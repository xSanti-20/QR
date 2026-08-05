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
      /<meta[^>]+>/gi,
      /window\.[A-Za-z0-9_]+\s*=\s*\{/gi,
      /"display_url":"[^"]+"/gi,
      /"thumbnail_src":"[^"]+"/gi,
      /"thumbnail_url":"[^"]+"/gi,
      /"media_url":"[^"]+"/gi,
      /"profile_pic_url":"[^"]+"/gi,
      /"display_resources":\[[^\]]+\]/gi,
      /https:\/\/[^"'\s>]+\.(jpg|jpeg|png|webp)/gi
    ];
    for (const regex of patterns) {
      const matches = Array.from(data.matchAll(regex));
      console.log('PATTERN', regex, 'COUNT', matches.length);
      matches.slice(0, 10).forEach(m => console.log(m[0]));
      console.log('---');
    }
  });
}).on('error', e => console.error('error', e));
