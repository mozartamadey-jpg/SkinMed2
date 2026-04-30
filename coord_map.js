const fs = require('fs');

const html = fs.readFileSync('e:/SkinMed2/doctor_page.html', 'utf8');

// Find all t396_data JSON blobs
const regex = /valign(.*?)opacity/g; // Tilda JSON properties usually have specific shapes, but let's just parse the script tags
const scriptRegex = /<script[^>]*>(.*?)<\/script>/gs;

let m;
let arts = [];
while ((m = scriptRegex.exec(html)) !== null) {
    let scriptContent = m[1];
    if (scriptContent.includes('t396_data') || scriptContent.includes('window.t396_data')) {
        // extract the JSON object
        let startMatch = scriptContent.indexOf('{');
        if (startMatch !== -1) {
            try {
                // Tilda often uses window.tblocks or t396_data = {...};
                // It's sometimes not valid JSON, but valid JS.
                // We don't have eval in this safe environment? Let's use regex to grab texts and bgimgs.
            } catch (e) {}
        }
    }
}

// Since JS evaluation is messy, let's just use simple coordinate extraction via regex on the raw HTML
// Elements in zero block look like:
// <div class="t396__elem tn-elem" data-elem-id="123" data-elem-type="text" data-field-top-value="100" data-field-left-value="200" ...><div class="tn-atom">NAME</div></div>
// <div class="t396__elem tn-elem" data-elem-id="456" data-elem-type="image" data-field-top-value="10" data-field-left-value="100" ...><div class="tn-atom" style="background-image: ..."></div></div>

let elemRegex = /<div class=['"]t396__elem[^>]*data-elem-type=['"]?(text|image)['"]?[^>]*data-field-top-value=['"]?([\d.-]+)['"]?[^>]*data-field-left-value=['"]?([\d.-]+)['"]?[^>]*>([\s\S]*?)<\/div><\/div>/g;

let elements = [];
let htmlClean = html.replace(/&quot;/g, '"');

let eMatch;
while ((eMatch = elemRegex.exec(htmlClean)) !== null) {
    let type = eMatch[1];
    let top = parseFloat(eMatch[2]);
    let left = parseFloat(eMatch[3]);
    let inner = eMatch[4];
    
    if (type === 'text') {
        let textM = /<div class="tn-atom"[^>]*>([\s\S]*?)<\/div>/.exec(inner);
        if (textM) {
            let t = textM[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
            if (t.split(' ').length >= 2 && /[А-Я]/.test(t) && t.length > 5 && !t.includes('Подробнее')) {
                elements.push({ type: 'name', val: t, top, left, inner });
            }
        }
    } else if (type === 'image') {
        // can be data-original or style background-image
        let imgM = /data-original=['"]([^'"]+)['"]/.exec(inner);
        if(!imgM) {
            imgM = /background-image:\s*url\(['"]([^'"]+)['"]\)/.exec(inner);
        }
        if (imgM && imgM[1] && imgM[1].includes('.jpg')) {
            elements.push({ type: 'img', val: imgM[1], top, left, inner });
        }
    }
}

// Now match nearest image ONLY if they are in the same Y-range (row)
let results = [];

let names = elements.filter(x => x.type === 'name');
let imgs = elements.filter(x => x.type === 'img');

names.forEach(n => {
    // find image with closest Y (top), within 500px, and closest X (left)
    let possibleImgs = imgs.filter(i => Math.abs(i.top - n.top) < 600); // usually name is below image
    if (possibleImgs.length > 0) {
        // distance calculation
        possibleImgs.sort((a,b) => {
            let distA = Math.sqrt(Math.pow(a.top - n.top, 2) + Math.pow(a.left - n.left, 2));
            let distB = Math.sqrt(Math.pow(b.top - n.top, 2) + Math.pow(b.left - n.left, 2));
            return distA - distB;
        });
        results.push(`${n.val} | ${possibleImgs[0].val} | dist: ${Math.round(Math.abs(possibleImgs[0].top - n.top))}`);
    } else {
        results.push(`${n.val} | NO IMAGE FOUND`);
    }
});

// Write to console
console.log(results.join('\n'));
