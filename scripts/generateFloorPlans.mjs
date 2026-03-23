import fs from 'fs';
import puppeteer from 'puppeteer';

const commonStyles = `
  <style>
    svg { background: white; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    .ext-wall { stroke: #2563eb; stroke-width: 6; fill: none; stroke-linecap: square; }
    .int-wall { stroke: #1e293b; stroke-width: 3; fill: none; stroke-linecap: square; }
    .party-wall { stroke: #dc2626; stroke-width: 6; fill: none; stroke-linecap: square; }
    .fence { stroke: #eab308; stroke-width: 5; fill: none; stroke-linecap: square; stroke-linejoin: miter; }
    .hatch { stroke: #dc2626; stroke-width: 1.5; }
    .door { stroke: #1e293b; stroke-width: 2; fill: none; }
    .door-arc { stroke: #94a3b8; stroke-width: 1; fill: none; stroke-dasharray: 4 4; }
    .text { fill: #334155; font-size: 16px; font-weight: 500; font-family: sans-serif; }
    .title { fill: #0f172a; font-size: 24px; font-weight: bold; }
    .subtitle { fill: #64748b; font-size: 16px; }
    .window { stroke: #38bdf8; stroke-width: 8; fill: none; }
    .stairs { stroke: #64748b; stroke-width: 1.5; fill: none; }
    .stair-arrow { stroke: #f97316; stroke-width: 2; fill: none; }
    .dashed-box { stroke: #64748b; stroke-width: 2; stroke-dasharray: 6 6; fill: none; }
    .cross-hatch { stroke: #2563eb; stroke-width: 1; opacity: 0.5; }
  </style>
`;

const partyHatch1 = Array.from({length: 80}).map((_, i) => `<line class="hatch" x1="603" y1="${50 + i*10}" x2="615" y2="${55 + i*10}" />`).join('');
const partyHatch2 = Array.from({length: 65}).map((_, i) => `<line class="hatch" x1="603" y1="${200 + i*10}" x2="615" y2="${205 + i*10}" />`).join('');
const partyHatch3 = Array.from({length: 45}).map((_, i) => `<line class="hatch" x1="603" y1="${400 + i*10}" x2="615" y2="${405 + i*10}" />`).join('');

const svgGround = `
<svg width="800" height="950" xmlns="http://www.w3.org/2000/svg">
  ${commonStyles}
  <!-- Fence -->
  <path class="fence" d="M 200 300 L 200 50 L 600 50 L 600 200" />
  <text x="180" y="180" class="text" transform="rotate(-90 180 180)" fill="#ca8a04">FENCE LINE</text>
  <text x="620" y="80" class="text" transform="rotate(90 620 80)" fill="#ca8a04">FENCE LINE</text>
  
  <!-- Garden -->
  <text x="350" y="120" class="text" fill="#16a34a">GARDEN</text>

  <!-- Hard Standing -->
  <rect x="350" y="170" width="250" height="30" class="int-wall" fill="#eff6ff" />
  ${Array.from({length: 25}).map((_, i) => `<line class="cross-hatch" x1="${350+i*10}" y1="170" x2="${360+i*10}" y2="200" />`).join('')}
  <text x="400" y="160" class="text" font-size="12px" fill="#2563eb">SMALL HARD STANDING</text>
  <line class="int-wall" x1="450" y1="167" x2="450" y2="173" />

  <!-- Party Wall -->
  <line class="party-wall" x1="600" y1="800" x2="600" y2="50" />
  ${partyHatch1}
  <text x="630" y="500" class="text" transform="rotate(90 630 500)" fill="#dc2626">PARTY WALL</text>

  <!-- External Walls -->
  <path class="ext-wall" d="M 600 800 L 550 800 M 480 800 L 400 800 L 340 800 L 310 850 L 260 850 L 230 800 L 200 800 L 200 400 L 300 400 L 300 300 L 400 300 L 400 200 L 600 200" />
  
  <line class="window" x1="200" y1="400" x2="260" y2="400" />
  
  <!-- Windows -->
  <line class="window" x1="260" y1="850" x2="310" y2="850" />
  <line class="window" x1="230" y1="800" x2="260" y2="850" />
  <line class="window" x1="310" y1="850" x2="340" y2="800" />
  <line class="window" x1="450" y1="200" x2="550" y2="200" />

  <!-- Internal Walls -->
  <path class="int-wall" d="M 200 600 L 400 600" />
  <path class="int-wall" d="M 300 400 L 600 400" />
  <path class="int-wall" d="M 400 600 L 400 800 M 400 600 L 400 500 M 400 420 L 400 300" />
  <path class="int-wall" d="M 300 350 L 400 350" />

  <!-- Doors Removed per user request -->

  <!-- Stairs -->
  <rect class="stairs" x="400" y="450" width="60" height="130" />
  ${Array.from({length: 12}).map((_, i) => `<line class="stairs" x1="400" y1="${450+i*10}" x2="460" y2="${450+i*10}" />`).join('')}
  <path class="stair-arrow" d="M 430 550 L 430 470 M 420 485 L 430 470 L 440 485" />

  <!-- Labels -->
  <text x="250" y="680" class="text" font-size="20px">BED 1</text>
  <text x="250" y="480" class="text" font-size="20px">BED 2</text>
  <text x="480" y="280" class="text" font-size="20px">KITCHEN /</text>
  <text x="480" y="305" class="text" font-size="20px">DINER</text>
  <text x="350" y="325" class="text" font-size="16px" text-anchor="middle">W/C</text>
  <line x1="310" y1="335" x2="390" y2="335" stroke="#cbd5e1" stroke-width="1" />
  <text x="350" y="355" class="text" font-size="12px" text-anchor="middle">SHOWER</text>
  <text x="240" y="830" class="text" font-size="12px">BAY WINDOW</text>
  <text x="600" y="830" class="text" font-size="14px" text-anchor="end">FRONT DOOR</text>
  <text x="600" y="850" class="text" font-size="14px" text-anchor="end">&amp; PORCH</text>

  <!-- Title -->
  <text x="400" y="900" class="title" text-anchor="middle">GROUND FLOOR</text>
  <text x="400" y="930" class="subtitle" text-anchor="middle">SCHEDULE OF CONDITION - NOT TO SCALE</text>
</svg>`;

const svgFirst = `
<svg width="800" height="950" xmlns="http://www.w3.org/2000/svg">
  ${commonStyles}

  <!-- Party Wall -->
  <line class="party-wall" x1="600" y1="800" x2="600" y2="200" />
  ${partyHatch2}
  <text x="630" y="500" class="text" transform="rotate(90 630 500)" fill="#dc2626">PARTY WALL</text>

  <!-- External Walls -->
  <path class="ext-wall" d="M 600 800 L 400 800 L 340 800 L 310 850 L 260 850 L 230 800 L 200 800 L 200 400 L 300 400 L 300 200 L 600 200" />
  
  <!-- Windows -->
  <line class="window" x1="260" y1="850" x2="310" y2="850" />
  <line class="window" x1="230" y1="800" x2="260" y2="850" />
  <line class="window" x1="310" y1="850" x2="340" y2="800" />
  <line class="window" x1="450" y1="800" x2="550" y2="800" />
  <line class="window" x1="220" y1="400" x2="280" y2="400" />
  <line class="window" x1="430" y1="200" x2="530" y2="200" />

  <!-- Internal Walls -->
  <path class="int-wall" d="M 200 600 L 400 600" />
  <path class="int-wall" d="M 400 800 L 400 600 L 600 600" />
  <path class="int-wall" d="M 400 600 L 400 400 L 400 320" />
  <path class="int-wall" d="M 300 320 L 600 320" />
  <path class="int-wall" d="M 300 370 L 400 370" />

  <!-- Doors Removed per user request -->

  <!-- Stairs -->
  <rect class="stairs" x="400" y="450" width="60" height="130" />
  ${Array.from({length: 12}).map((_, i) => `<line class="stairs" x1="400" y1="${450+i*10}" x2="460" y2="${450+i*10}" />`).join('')}
  <path class="stair-arrow" d="M 430 550 L 430 470 M 420 485 L 430 470 L 440 485" />

  <!-- Sky Light -->
  <rect class="dashed-box" x="450" y="340" width="80" height="40" />
  <text x="490" y="365" class="text" font-size="12px" text-anchor="middle" fill="#64748b">SKY LIGHT</text>

  <!-- Labels -->
  <text x="250" y="700" class="text" font-size="20px">BED 4</text>
  <text x="500" y="700" class="text" font-size="20px">BED 3</text>
  <text x="250" y="500" class="text" font-size="20px">BED 5</text>
  <text x="450" y="260" class="text" font-size="20px">BED 6</text>
  <text x="350" y="350" class="text" font-size="16px" text-anchor="middle">BATH</text>
  <text x="350" y="390" class="text" font-size="16px" text-anchor="middle">W/C</text>
  <text x="240" y="830" class="text" font-size="12px">BAY WINDOW</text>

  <!-- Title -->
  <text x="400" y="900" class="title" text-anchor="middle">FIRST FLOOR</text>
  <text x="400" y="930" class="subtitle" text-anchor="middle">SCHEDULE OF CONDITION - NOT TO SCALE</text>
</svg>`;

const svgSecond = `
<svg width="800" height="950" xmlns="http://www.w3.org/2000/svg">
  ${commonStyles}

  <!-- Party Wall -->
  <line class="party-wall" x1="600" y1="800" x2="600" y2="400" />
  ${partyHatch3}
  <text x="630" y="600" class="text" transform="rotate(90 630 600)" fill="#dc2626">PARTY WALL</text>

  <!-- External/Eaves Walls -->
  <path class="ext-wall" d="M 600 400 L 200 400 L 200 800 L 600 800" />
  
  <!-- Windows -->
  <line class="window" x1="250" y1="400" x2="350" y2="400" />

  <!-- Internal Walls -->
  <path class="int-wall" d="M 200 600 L 600 600" />
  <path class="int-wall" d="M 400 400 L 400 600" />
  <path class="int-wall" d="M 460 400 L 460 600" />
  <path class="int-wall" d="M 460 450 L 600 450" />

  <!-- Doors Removed per user request -->

  <!-- Stairs -->
  <rect class="stairs" x="400" y="450" width="60" height="150" />
  ${Array.from({length: 15}).map((_, i) => `<line class="stairs" x1="400" y1="${450+i*10}" x2="460" y2="${450+i*10}" />`).join('')}
  <path class="stair-arrow" d="M 430 570 L 430 480 M 420 495 L 430 480 L 440 495" />

  <!-- Labels -->
  <text x="280" y="520" class="text" font-size="20px" transform="rotate(-90 280 520)">BED 7</text>
  <text x="400" y="700" class="text" font-size="20px" text-anchor="middle" fill="#64748b">LOFT NO ACCESS</text>
  <text x="530" y="435" class="text" font-size="14px" text-anchor="middle" fill="#64748b" transform="rotate(-90 530 435)">STORAGE</text>
  <text x="560" y="435" class="text" font-size="10px" text-anchor="middle" fill="#64748b" transform="rotate(-90 560 435)">NO ACCESS</text>
  <text x="530" y="550" class="text" font-size="16px" text-anchor="middle" fill="#2563eb" transform="rotate(-90 530 550)">VAULTED CEILING</text>

  <!-- Title -->
  <text x="400" y="900" class="title" text-anchor="middle">SECOND FLOOR</text>
  <text x="400" y="930" class="subtitle" text-anchor="middle">SCHEDULE OF CONDITION - NOT TO SCALE</text>
</svg>`;

const renderSvg = async (svgString, filename) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 950, deviceScaleFactor: 2 });
  
  const html = `
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; padding: 0; background: white; display: flex; align-items: center; justify-content: center; height: 100vh;">
        ${svgString}
      </body>
    </html>
  `;
  
  await page.setContent(html);
  const element = await page.$('svg');
  if (element) {
    await element.screenshot({ path: `public/images/${filename}`, omitBackground: false });
    console.log(`Successfully generated public/images/${filename}`);
  }
  await browser.close();
};

const run = async () => {
  try {
    console.log('Generating floor plans...');
    await renderSvg(svgGround, 'soc-ground-floor.png');
    await renderSvg(svgFirst, 'soc-first-floor.png');
    await renderSvg(svgSecond, 'soc-second-floor.png');
    console.log('All floor plans generated successfully.');
  } catch (error) {
    console.error('Error rendering SVGs:', error);
  }
};

run();
