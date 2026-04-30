const fs = require('fs');
const lines = fs.readFileSync('e:/SkinMed2/all_tilda_links.txt', 'utf8');
const links = new Set();
const regex = /https:\/\/static\.tildacdn\.com\/[^"'\s\)]+\.(jpg|png|jpeg)/g;
let m;
while ((m = regex.exec(lines)) !== null) {
  links.add(m[0]);
}
console.log([...links].join('\n'));
