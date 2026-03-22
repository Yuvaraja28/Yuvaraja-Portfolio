import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if React is imported
    if (!content.includes('import React') && !content.includes('import * as React')) {
      content = `import React from 'react';\n` + content;
      fs.writeFileSync(fullPath, content);
      console.log(`Added React import to ${file}`);
    }
  }
});
