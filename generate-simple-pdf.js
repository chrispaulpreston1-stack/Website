// Quick script to generate a readable contract PDF from the markdown using pdf-lib
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { readFileSync, writeFileSync } from 'fs';

const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN = 60;
const TEXT_W = PAGE_W - MARGIN * 2;
const BOTTOM = 70;

async function main() {
  const md = readFileSync('C:\\Users\\chris\\Documents\\PF Co Holdings\\Legal\\PFCO-Site-Intelligence-Subscription-Agreement.md', 'utf-8');

  const doc = await PDFDocument.create();
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const italic = await doc.embedFont(StandardFonts.HelveticaOblique);

  let page = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;
  let pageCount = 1;

  function newPage() {
    page = doc.addPage([PAGE_W, PAGE_H]);
    y = PAGE_H - MARGIN;
    pageCount++;
  }

  function ensureSpace(needed) {
    if (y - needed < BOTTOM) newPage();
  }

  function wrapText(text, font, size) {
    const words = text.split(' ');
    const lines = [];
    let current = '';
    for (const word of words) {
      const test = current ? current + ' ' + word : word;
      if (font.widthOfTextAtSize(test, size) > TEXT_W) {
        if (current) lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  function wrapTextIndented(text, font, size, indent) {
    const availW = TEXT_W - indent;
    const words = text.split(' ');
    const lines = [];
    let current = '';
    for (const word of words) {
      const test = current ? current + ' ' + word : word;
      if (font.widthOfTextAtSize(test, size) > availW) {
        if (current) lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  function drawWrapped(text, font, size, spacing, xOffset = 0) {
    const lines = xOffset > 0 ? wrapTextIndented(text, font, size, xOffset) : wrapText(text, font, size);
    for (const line of lines) {
      ensureSpace(size + spacing);
      page.drawText(line, { x: MARGIN + xOffset, y, size, font, color: rgb(0.1, 0.1, 0.12) });
      y -= size + spacing;
    }
  }

  // Parse the markdown and render
  const lines = md.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines (add small spacing)
    if (!trimmed) {
      y -= 6;
      continue;
    }

    // Skip horizontal rules
    if (trimmed === '---') {
      y -= 8;
      continue;
    }

    // Main title: # SUBSCRIPTION AGREEMENT
    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
      const text = trimmed.replace(/^# /, '').replace(/\*\*/g, '');
      ensureSpace(30);
      y -= 10;
      const tw = bold.widthOfTextAtSize(text, 18);
      page.drawText(text, { x: (PAGE_W - tw) / 2, y, size: 18, font: bold, color: rgb(0.1, 0.1, 0.12) });
      y -= 28;
      continue;
    }

    // Section headings: ##
    if (trimmed.startsWith('## ')) {
      const text = trimmed.replace(/^## /, '').replace(/\*\*/g, '');
      ensureSpace(30);
      y -= 12;
      page.drawText(text, { x: MARGIN, y, size: 13, font: bold, color: rgb(0.1, 0.1, 0.12) });
      y -= 20;
      continue;
    }

    // Clause headings: ###
    if (trimmed.startsWith('### ')) {
      const text = trimmed.replace(/^### /, '').replace(/\*\*/g, '');
      ensureSpace(26);
      y -= 10;
      page.drawText(text, { x: MARGIN, y, size: 11, font: bold, color: rgb(0.1, 0.1, 0.12) });
      y -= 18;
      continue;
    }

    // Table rows
    if (trimmed.startsWith('|')) {
      // Skip table separator rows
      if (trimmed.match(/^\|[\s\-|]+\|$/)) continue;

      const cleaned = trimmed.replace(/\*\*/g, '').replace(/\[.*?\]/g, (m) => m.replace(/[\[\]]/g, ''));
      ensureSpace(14);

      // Simple: render table rows as regular text, compact
      const cells = cleaned.split('|').filter(c => c.trim()).map(c => c.trim());
      const cellText = cells.join('  |  ');

      if (regular.widthOfTextAtSize(cellText, 8) > TEXT_W) {
        // Too wide - render first two columns only or wrap
        const shortText = cells.slice(0, 2).join(':  ');
        drawWrapped(shortText, regular, 8.5, 3);
      } else {
        page.drawText(cellText, { x: MARGIN, y, size: 8.5, font: regular, color: rgb(0.15, 0.15, 0.2) });
        y -= 12;
      }
      continue;
    }

    // Bold paragraphs (clause numbers like **3.1**)
    if (trimmed.startsWith('**') && trimmed.includes('**')) {
      const cleanText = trimmed.replace(/\*\*/g, '');

      // Check if it starts with a clause number
      const clauseMatch = cleanText.match(/^(\d+\.\d+[a-z]?\s)/);
      if (clauseMatch) {
        ensureSpace(16);
        // Draw clause number in bold, rest in regular
        const clauseNum = clauseMatch[1];
        const rest = cleanText.slice(clauseNum.length);
        const numW = bold.widthOfTextAtSize(clauseNum, 10);
        page.drawText(clauseNum, { x: MARGIN, y, size: 10, font: bold, color: rgb(0.1, 0.1, 0.12) });

        if (rest) {
          // Handle bold sections within the rest
          const plainRest = rest.replace(/\*\*/g, '');
          const restLines = wrapTextIndented(plainRest, regular, 10, numW);
          let first = true;
          for (const rl of restLines) {
            if (!first) ensureSpace(14);
            page.drawText(rl, { x: MARGIN + (first ? numW : 15), y, size: 10, font: regular, color: rgb(0.1, 0.1, 0.12) });
            y -= 14;
            first = false;
          }
        } else {
          y -= 14;
        }
        continue;
      }

      // Other bold text - render as bold paragraph
      drawWrapped(cleanText, bold, 10, 4);
      continue;
    }

    // Lettered sub-clauses: (a), (b), etc.
    if (trimmed.match(/^\([a-z]\)/)) {
      const cleanText = trimmed.replace(/\*\*/g, '');
      ensureSpace(14);
      drawWrapped(cleanText, regular, 9.5, 3.5, 15);
      y -= 2;
      continue;
    }

    // Roman numeral sub-sub-clauses: (i), (ii), etc.
    if (trimmed.match(/^\([ivx]+\)/)) {
      const cleanText = trimmed.replace(/\*\*/g, '');
      ensureSpace(14);
      drawWrapped(cleanText, regular, 9.5, 3.5, 30);
      continue;
    }

    // Regular paragraph
    const cleanText = trimmed.replace(/\*\*/g, '').replace(/\*/g, '');
    if (cleanText.startsWith('(') && cleanText.match(/^\([A-C]\)/)) {
      // Background recitals
      drawWrapped(cleanText, italic, 10, 4);
    } else {
      drawWrapped(cleanText, regular, 10, 4);
    }
  }

  // Add footers to all pages
  const pages = doc.getPages();
  const total = pages.length;
  for (let i = 0; i < total; i++) {
    const p = pages[i];
    const footerLeft = 'PFCO Site Intelligence — Subscription Agreement — Confidential';
    const footerRight = `Page ${i + 1} of ${total}`;
    p.drawText(footerLeft, { x: MARGIN, y: 30, size: 7, font: italic, color: rgb(0.5, 0.5, 0.5) });
    const rw = regular.widthOfTextAtSize(footerRight, 7);
    p.drawText(footerRight, { x: PAGE_W - MARGIN - rw, y: 30, size: 7, font: regular, color: rgb(0.5, 0.5, 0.5) });
    // Separator line
    p.drawLine({ start: { x: MARGIN, y: 42 }, end: { x: PAGE_W - MARGIN, y: 42 }, thickness: 0.5, color: rgb(0.8, 0.8, 0.8) });
  }

  const bytes = await doc.save();

  // Save to both locations
  writeFileSync('C:\\Users\\chris\\Documents\\PF Co Holdings\\Legal\\PFCO-Subscription-Agreement.pdf', bytes);
  writeFileSync('public/legal/PFCO-Subscription-Agreement.pdf', bytes);

  console.log(`PDF generated: ${total} pages, ${(bytes.length / 1024).toFixed(0)} KB`);
  console.log('Saved to:');
  console.log('  - C:\\Users\\chris\\Documents\\PF Co Holdings\\Legal\\PFCO-Subscription-Agreement.pdf');
  console.log('  - public/legal/PFCO-Subscription-Agreement.pdf');
}

main().catch(console.error);
