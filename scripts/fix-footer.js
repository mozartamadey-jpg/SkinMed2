const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  let changedCount = 0;
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      changedCount += processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Handle the case where Footer is already moved outside but might need tweaks?
      // No, let's just find the Footer tag, remove it from its current place, and append it at the end if it's inside the max-w container.
      
      // Let's use a regex to find <Footer /> or <div className="mt-20">\s*<Footer />\s*</div> 
      // right before the last two </div>s.
      
      // First, check if it's already fixed (has relative z-20 w-full mt-auto)
      if (content.includes('<div className="relative z-20 w-full mt-auto">')) {
        continue;
      }

      // Find where Footer is.
      // Usually it's:
      //     </main>
      //     [optional wrapper]
      //       <Footer />
      //     [optional close wrapper]
      //   </div>
      // </div>
      
      // Regex to capture everything up to </main>, then the Footer part, then the ending tags.
      const match = content.match(/(<\/main>\s*)(?:<div[^>]*>\s*)?(<Footer \/>)(?:\s*<\/div>\s*)?(\s*<\/div>\s*<\/div>\s*\);\s*})/);
      
      if (match) {
        content = content.replace(/(<\/main>\s*)(?:<div[^>]*>\s*)?(<Footer \/>)(?:\s*<\/div>\s*)?(\s*<\/div>\s*<\/div>\s*\);\s*})/, 
          `$1  </div>\n\n      <div className="relative z-20 w-full mt-auto">\n        $2\n      </div>\n    </div>\n  );\n}`);

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
        changedCount++;
      } else {
        // Some might just have `        <Footer />\n      </div>\n    </div>` without a wrapper
        const fallbackMatch = content.match(/(<\/main>\s*)(<Footer \/>)(\s*<\/div>\s*<\/div>\s*\);\s*})/);
        if (fallbackMatch) {
            content = content.replace(/(<\/main>\s*)(<Footer \/>)(\s*<\/div>\s*<\/div>\s*\);\s*})/, 
            `$1  </div>\n\n      <div className="relative z-20 w-full mt-auto">\n        $2\n      </div>\n    </div>\n  );\n}`);
            
            const rootMatch = content.match(/(<div[^>]*className="[^"]*min-h-screen[^"]*")[^>]*>/);
            if (rootMatch && !rootMatch[0].includes('flex-col')) {
                content = content.replace(/(<div[^>]*className="[^"]*min-h-screen[^"]*)(")/, '$1 flex flex-col$2');
            }
    
            const innerMatch = content.match(/(<div[^>]*className="[^"]*max-w-\[100rem\][^"]*)(")/);
            if (innerMatch && !innerMatch[0].includes('flex-grow') && !innerMatch[0].includes('flex-1')) {
                content = content.replace(/(<div[^>]*className="[^"]*max-w-\[100rem\][^"]*)(")/, '$1 flex-grow$2');
            }
    
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Fixed fallback', fullPath);
            changedCount++;
        } else {
             // Maybe it doesn't end with ); } exactly, or there are other elements.
             // Let's do a more robust string replacement:
             // Find: `<Footer />`
             // Replace with: empty string
             // But wait, it's safer to just look manually at one that didn't match.
        }
      }
    }
  }
  return changedCount;
}

const count = processDir('e:/SkinMed2/src/app/services');
console.log('Total fixed:', count);
