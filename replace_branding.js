import fs from 'fs';
import path from 'path';

const directoryToSearch = process.cwd();
const ignoreList = ['node_modules', '.git', 'dist', 'build', '.vercel', 'replace_branding.js', 'replace_branding.mjs'];

const replacements = [
  { regex: /PF & Co Construction/g, replacement: 'PF & Co Site Intelligence' },
  { regex: /PF&Co Construction/g, replacement: 'PF&Co Site Intelligence' },
  { regex: /PF and Co Construction/g, replacement: 'PF & Co Site Intelligence' },
  { regex: /PFCO Construction/g, replacement: 'PF&CO Site Intelligence' },
  { regex: /PFCOCONSTRUCTION/g, replacement: 'PFCOSITEINTELLIGENCE' },
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

console.log('Starting branding replacement...');
processDirectory(directoryToSearch);
console.log('Finished branding replacement.');
