const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const newContent = content
        .replace(/22\+ /g, '27+ ')
        .replace(/22\+ constraint/g, '27+ constraint')
        .replace(/22 constraint/g, '27 constraint')
        .replace(/22\+/g, '27+')
        .replace(/60 authoritative data sources/gi, '60+ authoritative data sources')
        .replace(/60 data sources/gi, '60+ data sources')
        .replace(/15\+ data sources/gi, '60+ data sources')
        .replace(/\{TOTAL_DATA_SOURCES\} authoritative/gi, '{TOTAL_DATA_SOURCES}+ authoritative')
        .replace(/\{TOTAL_DATA_SOURCES\} Data Sources/gi, '{TOTAL_DATA_SOURCES}+ Data Sources')
        .replace(/\{TOTAL_DATA_SOURCES\} data sources/gi, '{TOTAL_DATA_SOURCES}+ data sources')
        .replace(/num:\s*["']60["']/g, 'num: "60+"')
        .replace(/value:\s*["']60["']/g, "value: '60+'")
        .replace(/24 report types\. 60\+ data sources/gi, '25+ report types. 60+ data sources')
        .replace(/24 report types/gi, '25+ report types')
        .replace(/25 report types/gi, '25+ report types');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir(path.join(__dirname, 'src'));
console.log('Done replacement.');
