const https = require('https');
const urls = [
  'https://api.instagram.com/oembed/?url=https://www.instagram.com/reel/DXfdno7jx4n/',
  'https://graph.facebook.com/v16.0/instagram_oembed?url=https://www.instagram.com/reel/DXfdno7jx4n/'
];
urls.forEach((url) => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' } }, (res) => {
    console.log('\nURL:', url);
    console.log('STATUS:', res.statusCode);
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log(body.slice(0, 1000));
    });
  }).on('error', (e) => {
    console.error('ERROR', url, e.message);
  });
});
