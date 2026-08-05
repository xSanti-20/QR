const fs = require('fs');
const path = 'node_modules/instagram-url-direct/dist/instagram.cjs';
const s = fs.readFileSync(path, 'utf8');
const needle = 'Only posts/reels supported, check if your link is valid.';
const idx = s.indexOf(needle);
console.log('idx', idx);
console.log(s.slice(idx-400, idx+400));
