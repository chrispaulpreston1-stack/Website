import fs from 'fs';
import path from 'path';

const imagesDir = 'c:\\Users\\chris\\pf-&-co-construction  - web\\public\\images';
const files = fs.readdirSync(imagesDir);
let totalSize = 0;
const largeFiles = [];

for (const file of files) {
  const filePath = path.join(imagesDir, file);
  const stats = fs.statSync(filePath);
  if (stats.isFile()) {
    const sizeMB = stats.size / (1024 * 1024);
    totalSize += sizeMB;
    if (sizeMB > 0.3) { // larger than 300KB
      largeFiles.push({ name: file, sizeMB: sizeMB.toFixed(2) });
    }
  }
}

largeFiles.sort((a, b) => b.sizeMB - a.sizeMB);

console.log(`\n--- Directory Scan ---`);
console.log(`Total Image Assets: ${files.length}`);
console.log(`Total Directory Size: ${totalSize.toFixed(2)} MB`);
console.log(`\n--- Images > 300KB (${largeFiles.length}) ---`);
largeFiles.forEach(f => console.log(`${f.sizeMB} MB\t- ${f.name}`));
