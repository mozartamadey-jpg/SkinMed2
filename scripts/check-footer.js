const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<Footer') && !content.includes('<div className="relative z-20 w-full mt-auto">')) {
        console.log('Needs fixing:', fullPath);
      }
    }
  }
}

processDir('e:/SkinMed2/src/app/services');
