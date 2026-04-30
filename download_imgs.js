const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = {
    "kachyurina.jpg": "https://static.tildacdn.com/tild3365-6637-4933-b764-356338343634/-.jpg",
    "emelina.jpg": "https://static.tildacdn.com/tild3631-6265-4433-a538-633138653535/1.jpg",
    "glubokaya.jpg": "https://static.tildacdn.com/tild3739-3061-4133-a664-306666663762/photo.jpg",
    "muhametzanova.jpg": "https://static.tildacdn.com/tild3464-3535-4664-a333-633661643164/2pg.jpg",
    "shitov.jpg": "https://static.tildacdn.com/tild6638-3139-4161-b730-326432666133/-.jpg",
    "vorobyova.jpg": "https://static.tildacdn.com/tild3631-3435-4565-a438-333735653936/-.jpg",
    "nikiforova.jpg": "https://static.tildacdn.com/tild6465-3064-4532-a331-626262376234/15.jpg",
    "safyanova.jpg": "https://static.tildacdn.com/tild6165-3663-4064-a533-326464303034/--3.jpg"
};

const outputDir = "e:/SkinMed2/public/images/doctors";

async function download(name, urlStr) {
  return new Promise((resolve, reject) => {
    https.get(urlStr, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
         return reject(new Error('Status: ' + res.statusCode));
      }
      const p = path.join(outputDir, name);
      const str = fs.createWriteStream(p);
      res.pipe(str);
      str.on('finish', () => resolve(name));
      str.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
   for (let [name, url] of Object.entries(urls)) {
      try {
         console.log("Downloading", name);
         await download(name, url);
         console.log("OK", name);
      } catch(e) {
         console.error("FAIL", name, e.message);
      }
   }
})();
