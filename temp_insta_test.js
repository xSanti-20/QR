const { instagramGetUrl } = require('instagram-url-direct');

(async () => {
  try {
    const result = await instagramGetUrl('https://www.instagram.com/reel/DXfdno7jx4n/');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('ERROR:', error.message || error);
  }
})();
