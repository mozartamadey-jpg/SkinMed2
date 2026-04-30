const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let fixedCount = 0;
walkDir('e:/SkinMed2/src/app', function(filePath) {
  if (filePath.endsWith('.tsx') && !filePath.includes('layout.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if Footer exists and is not already in relative z-20
    if (content.includes('<Footer />') && !content.includes('<div className="relative z-20 w-full mt-auto">')) {
      let originalContent = content;

      // 1. Convert <></> to <div className="min-h-screen flex flex-col relative font-sans text-slate-800"></div>
      content = content.replace(/return\s*\(\s*<>/, 'return (\n    <div className="min-h-screen flex flex-col relative font-sans text-slate-800">');
      
      // Update the final </>
      const lastFragmentClose = content.lastIndexOf('</>');
      if (lastFragmentClose !== -1) {
          content = content.substring(0, lastFragmentClose) + '</div>' + content.substring(lastFragmentClose + 3);
      }
      
      // 2. Add flex-grow to the max-w-[100rem] container
      content = content.replace(/(<div[^>]*className="[^"]*w-full max-w-\[100rem\][^"]*)(")/, '$1 flex-grow"');

      // 3. Move Footer out of the container
      // Typical structure:
      //         <Footer />
      //       </div>
      // 
      //       <AnimationsProvider />
      //     </div>
      
      content = content.replace(/\s*<Footer \/>/, '');
      
      // Re-insert Footer before AnimationsProvider, OR before the final </div>
      if (content.includes('<AnimationsProvider />')) {
         content = content.replace(/(\s*)(<AnimationsProvider \/>)/, '$1</div>$1<div className="relative z-20 w-full mt-auto">\n        <Footer />\n      </div>$1$2');
         // We must remove the </div> that was closing the max-w-[100rem] container, because we just injected one.
         // Let's find the </div> right before <AnimationsProvider />
         content = content.replace(/<\/div>\s*(<\/div>\s*<div className="relative z-20 w-full mt-auto">)/, '$1');
      } else {
         // Just find the last </div> and insert it before
         const lastDivClose = content.lastIndexOf('</div>');
         if (lastDivClose !== -1) {
             content = content.substring(0, lastDivClose) + '</div>\n      <div className="relative z-20 w-full mt-auto">\n        <Footer />\n      </div>\n    </div>';
             // Again, handle the extra div...
         }
      }

      if (content !== originalContent) {
         fs.writeFileSync(filePath, content, 'utf8');
         fixedCount++;
      }
    }
  }
});
console.log('Fixed footers in ' + fixedCount + ' files.');
