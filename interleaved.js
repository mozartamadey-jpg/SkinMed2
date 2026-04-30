const fs = require('fs');

const html = fs.readFileSync('e:/SkinMed2/doctor_page.html', 'utf8');

// Tilda stores the data for zero blocks in window.t396_data instances or similar, but 
// usually, the text text is just in the HTML.
// Let's grab all text that looks like a name and all urls that look like static.tildacdn.com

let namesRegex = /class="tn-atom"[^>]*>([^<—=0-9]+?)<\/div>/g;
let bgRegex = /background-image:\s*url\(['"]?(https:\/\/static\.tildacdn\.com[^\'"\)]+\.jpg)['"]?\)/g;

let matches = [];
let m;
while ((m = namesRegex.exec(html)) !== null) {
  let name = m[1].replace(/&nbsp;/g, ' ').replace(/<br\s*\/?>/gi, ' ').replace(/\n/g, ' ').trim();
  if (name.split(' ').length >= 2 && name.length > 5 && /[А-Я]/.test(name)) {
     matches.push({ type: 'name', val: name, index: m.index });
  }
}

while ((m = bgRegex.exec(html)) !== null) {
  matches.push({ type: 'img', val: m[1], index: m.index });
}

// Sort by index in the HTML file
matches.sort((a, b) => a.index - b.index);

let results = [];
let currentName = null;

for (let i = 0; i < matches.length; i++) {
  if (matches[i].type === 'name') {
    currentName = matches[i].val;
  } else if (matches[i].type === 'img' && currentName) {
    results.push(`${currentName}  =>  ${matches[i].val}`);
    currentName = null; // reset to bind only closest
  }
}

// Alternatively, maybe img comes BEFORE name:
// Let's print the interleaved sequence over the last part of file.

console.log("------- INTERLEAVED SEQUENCE -------");
let filtered = matches.filter(x => 
  (x.type==='name' && (x.val.includes('Качурина') || x.val.includes('Емелина') || x.val.includes('Глубокая') || x.val.includes('Шитов') || x.val.includes('Никифорова'))) 
  || x.type==='img');

let recentImg = null;
for(let x of filtered) {
   if(x.type === 'img') recentImg = x.val;
   if(x.type === 'name') {
      console.log(`[NAME] ${x.val} -> nearest preceding IMG: ${recentImg}`);
   }
}
