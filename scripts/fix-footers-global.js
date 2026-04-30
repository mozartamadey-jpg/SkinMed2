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

const appDir = 'e:/SkinMed2/src/app';

walkDir(appDir, function(filePath) {
  if (filePath.endsWith('.tsx') && !filePath.includes('layout.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if Footer is already fixed (we used 'relative z-20 w-full mt-auto' for the fixed footer wrapper)
    if (content.includes('<div className="relative z-20 w-full mt-auto">') && content.includes('<Footer />')) {
      return;
    }
    
    // Check if it has Footer
    if (!content.includes('<Footer />')) {
      return;
    }
    
    let originalContent = content;

    // Pattern for the wrapper `div` that contains Footer and is usually closed before </>, </div> or <AnimationsProvider />
    // This is typical in the codebase:
    //         <Footer />
    //       </div>
    
    content = content.replace(/\s*<Footer \/>/, '');

    // Now we need to append the footer outside the main container.
    // Usually the main container ends right before <AnimationsProvider /> (if it is at the end) or before `</>` / `</div>` at the end of the return statement.
    // Wait, in PricesClient.tsx:
    //       </div>
    //     </>
    //   );
    // }
    // We should replace the `</>` with `<div className="min-h-screen flex flex-col relative">` at the start, and append the footer.
    
    // But PricesClient.tsx has:
    //   return (
    //     <>
    //       <AnimationsProvider />
    
    // It's safer to just find `      </div>\n    </>\n  );\n}` or `      </div>\n    </div>\n  );\n}`
    
    // Let's do a more robust approach just for the target pages:
    // We know the exact files:
    // 1. e:/SkinMed2/src/app/prices/PricesClient.tsx
    // 2. e:/SkinMed2/src/app/doctors/DoctorsClient.tsx
    // 3. e:/SkinMed2/src/app/services/.../xyzClient.tsx ? (Services were already fixed by `fix-footer-final.js` according to context, but maybe some were missed).
    // Let's just fix PricesClient and DoctorsClient using exact replacements.
    
  }
});
