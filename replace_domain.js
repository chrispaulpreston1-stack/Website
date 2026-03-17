import fs from 'fs';
import path from 'path';

const directoryToSearch = process.cwd();
const ignoreList = ['node_modules', '.git', 'dist', 'build', '.vercel', 'replace_branding.js', 'replace_domain.js'];

const replacements = [
  { regex: /pfcoconstruction\.co\.uk/g, replacement: 'pfandco.co.uk' },
  { regex: /PFCOCONSTRUCTION\.CO\.UK/g, replacement: 'PFANDCO.CO.UK' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    if (ignoreList.includes(file)) continue;
    
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      const textExtensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.html', '.css', '.txt', '.py', '.svg'];
      if (!ext || textExtensions.includes(ext)) {
        processFile(fullPath);
      }
    }
  }
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let madeChanges = false;
    
    for (const {regex, replacement} of replacements) {
      if (regex.test(content)) {
        content = content.replace(regex, replacement);
        madeChanges = true;
      }
    }
    
    if (madeChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}: ${err.message}`);
  }
}

console.log('Starting domain replacement...');
processDirectory(directoryToSearch);
console.log('Finished domain replacement.');
