const axios = require('axios');
(async () => {
  const url = 'https://www.instagram.com/reel/DXfdno7jx4n/';
  try {
    const res = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      },
      maxRedirects: 5,
      validateStatus: null
    });
    console.log('status', res.status);
    const html = res.data;
    const ogMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
    console.log('og', ogMatch ? ogMatch[1] : 'no og');
    const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    console.log('ld', ldMatch ? ldMatch[1].slice(0,500) : 'no ld');
  } catch (err) {
    console.error('error', err.message);
    if (err.response) {
      console.error('status', err.response.status);
      console.error('headers', err.response.headers['set-cookie']);
      console.error(err.response.data && String(err.response.data).slice(0,500));
    }
  }
})();
