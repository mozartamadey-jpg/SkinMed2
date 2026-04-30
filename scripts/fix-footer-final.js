const fs = require('fs');
const path = require('path');

const filesToFix = [
  'e:/SkinMed2/src/app/services/injection/InjectionCosmetologyPage.tsx',
  'e:/SkinMed2/src/app/services/lazernaya-kosmetologiya/lazernaya-blefaroplastika/LaserBlepharoClient.tsx',
  'e:/SkinMed2/src/app/services/lazernaya-kosmetologiya/lazernaya-shlifovka/LaserShlifovkaClient.tsx',
  'e:/SkinMed2/src/app/services/lazernaya-kosmetologiya/udalenie-pigmentnyh-pyaten/PigmentRemovalClient.tsx',
  'e:/SkinMed2/src/app/services/lazernaya-kosmetologiya/udalenie-rubcov-shramov-strij/ScarRemovalClient.tsx'
];

for (const fullPath of filesToFix) {
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Remove Footer block
  content = content.replace(/\s*<div className="mt-20">\s*<Footer \/>\s*<\/div>/, '');
  content = content.replace(/\s*<Footer \/>/, '');
  
  // Find where to insert the new Footer wrapper
  // We insert it before the final `</div>` or before `<AnimationsProvider />` if it's at the end
  if (content.includes('<AnimationsProvider />\n    </div>')) {
      content = content.replace(/(\s*)(<AnimationsProvider \/>\s*<\/div>\s*\);\s*})/, 
        `$1<div className="relative z-20 w-full mt-auto">\n        <Footer />\n      </div>\n$1$2`);
  } else {
      content = content.replace(/(\s*)(<\/div>\s*\);\s*})/, 
        `$1<div className="relative z-20 w-full mt-auto">\n        <Footer />\n      </div>\n$1$2`);
  }

  // Ensure flex flex-col is on the root container
  const rootMatch = content.match(/(<div[^>]*className="[^"]*min-h-screen[^"]*")[^>]*>/);
  if (rootMatch && !rootMatch[0].includes('flex-col')) {
      content = content.replace(/(<div[^>]*className="[^"]*min-h-screen[^"]*)(")/, '$1 flex flex-col$2');
  }

  // Ensure the inner container has flex-grow
  const innerMatch = content.match(/(<div[^>]*className="[^"]*max-w-\[100rem\][^"]*)(")/);
  if (innerMatch && !innerMatch[0].includes('flex-grow') && !innerMatch[0].includes('flex-1')) {
      content = content.replace(/(<div[^>]*className="[^"]*max-w-\[100rem\][^"]*)(")/, '$1 flex-grow$2');
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Fixed', fullPath);
}
