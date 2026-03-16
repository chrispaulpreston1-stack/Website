import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

// ── colour palette (as RGB 0-1 values) ───────────────────────────────────────

const BRAND_DARK   = rgb(0.10, 0.10, 0.18);   // #1a1a2e
const BRAND_ACCENT = rgb(0.18, 0.42, 0.31);   // #2d6a4f
const GREY_LIGHT   = rgb(0.96, 0.96, 0.96);   // #f5f5f5
const GREY_MED     = rgb(0.88, 0.88, 0.88);   // #e0e0e0
const GREY_HEADER  = rgb(0.82, 0.82, 0.82);   // #d0d0d0
const WHITE        = rgb(1, 1, 1);
const HIGHLIGHT_BG = rgb(0.91, 0.96, 0.91);   // #e8f5e9
const GREY_TEXT    = rgb(0.60, 0.60, 0.60);   // #999999

// ── page constants ───────────────────────────────────────────────────────────

const PAGE_W  = 595;
const PAGE_H  = 842;
const MARGIN  = 60;
const TEXT_W   = PAGE_W - MARGIN * 2;  // 475
const TOP_Y    = PAGE_H - MARGIN;      // 782
const BOTTOM_Y = MARGIN + 20;          // 80 — leave room for footer

// ── helpers ──────────────────────────────────────────────────────────────────

function fmtCurrency(n) {
  return '\u00A3' + Number(n).toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function agreementRef(clientName, commencementDate) {
  const d = new Date(commencementDate);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const datePart = `${yyyy}${mm}${dd}`;
  const namePart = clientName.replace(/[^A-Za-z]/g, '').substring(0, 4).toUpperCase();
  return `PFCO-SUB-${datePart}-${namePart}`;
}

// ── tier metadata ────────────────────────────────────────────────────────────

const TIER_DATA = {
  Scout: {
    targetMarket: 'Land Buyers & Deal Packagers',
    monthlyFee: 399,
    annualFee: 4069.80,
    credits: 2,
    maxBank: 4,
    turnaround: '72 hours',
    maxDelivery: '7 days',
    whiteLabel: 'No',
    support: 'Email',
    pipelineReview: 'No',
    overageRate: 275,
    rollover: '2 months',
    minTerm: '3 months'
  },
  Professional: {
    targetMarket: 'Architects & Consultants',
    monthlyFee: 995,
    annualFee: 10149,
    credits: 6,
    maxBank: 18,
    turnaround: '48 hours',
    maxDelivery: '7 days',
    whiteLabel: 'Yes',
    support: 'Email & Tel, Account Manager',
    pipelineReview: 'No',
    overageRate: 240,
    rollover: '3 months',
    minTerm: '6 months'
  },
  Developer: {
    targetMarket: 'Developers & Housing Associations',
    monthlyFee: 1995,
    annualFee: 20349,
    credits: 12,
    maxBank: 48,
    turnaround: '48 hours',
    maxDelivery: '7 days',
    whiteLabel: 'Yes',
    support: 'Email & Tel, Account Manager',
    pipelineReview: 'Quarterly',
    overageRate: 225,
    rollover: '4 months',
    minTerm: '12 months'
  },
  Enterprise: {
    targetMarket: 'Volume Housebuilders & Institutional',
    monthlyFee: 3995,
    annualFee: 40749,
    credits: 30,
    maxBank: 180,
    turnaround: '48 hours',
    maxDelivery: '7 days',
    whiteLabel: 'Yes',
    support: 'Email & Tel, Account Manager',
    pipelineReview: 'Quarterly',
    overageRate: 195,
    rollover: '6 months',
    minTerm: '12 months'
  }
};

// ── report types ─────────────────────────────────────────────────────────────

const REPORT_TYPES = [
  ['1',  'Site Acquisition Report',            'Development',    '\u00A3995'],
  ['2',  'Pre-Construction Design Review',     'Technical',      '\u00A3895'],
  ['3',  'Development Finance Summary',        'Development',    '\u00A3795'],
  ['4',  'Feasibility Study',                  'Development',    '\u00A3795'],
  ['5',  'Phase 1 Desk Study',                 'Environmental',  '\u00A3595'],
  ['6',  'Site Feasibility Report',            'Development',    '\u00A3595'],
  ['7',  'Construction Management Plan',       'Technical',      '\u00A3595'],
  ['8',  'Daylight & Sunlight Screening',      'Technical',      '\u00A3595'],
  ['9',  'Arboricultural Constraints Appraisal','Environmental', '\u00A3575'],
  ['10', 'Heritage Impact Assessment',         'Environmental',  '\u00A3545'],
  ['11', 'Planning Statement',                 'Planning',       '\u00A3495'],
  ['12', 'Geotechnical Desk Study',            'Technical',      '\u00A3495'],
  ['13', 'Biodiversity Net Gain Screening',    'Environmental',  '\u00A3495'],
  ['14', 'Transport Statement',                'Technical',      '\u00A3495'],
  ['15', 'Energy Statement',                   'Environmental',  '\u00A3445'],
  ['16', 'Noise Screening Report',             'Environmental',  '\u00A3445'],
  ['17', 'Design & Access Statement',          'Planning',       '\u00A3395'],
  ['18', 'Air Quality Screening Assessment',   'Environmental',  '\u00A3395'],
  ['19', 'Flood Risk Assessment',              'Environmental',  '\u00A3375'],
  ['20', 'Parking Survey',                     'Technical',      '\u00A3345'],
  ['21', 'CIL Liability Assessment',           'Planning',       '\u00A3295'],
  ['22', 'Pre-Application Advice',             'Planning',       '\u00A3245']
];

// ── main export ──────────────────────────────────────────────────────────────

export default async function generateContractPdf(clientDetails) {
  const {
    clientName,
    clientCompany,
    clientEmail,
    clientPhone,
    tierKey,
    tierName,
    billingCycle,
    monthlyFee,
    annualFee,
    creditsPerMonth,
    maxCreditBank,
    turnaround,
    rollover,
    minTerm,
    overageRate,
    whiteLabel,
    commencementDate
  } = clientDetails;

  const ref = agreementRef(clientName, commencementDate);
  const clientPartyName = clientCompany
    ? `${clientCompany} (contact: ${clientName})`
    : clientName;

  // Work out which column to highlight in Schedule 1
  const tierOrder = ['Scout', 'Professional', 'Developer', 'Enterprise'];
  const highlightCol = tierOrder.indexOf(tierName) + 1; // +1 because col 0 is label

  // ── create doc and embed fonts ─────────────────────────────────────────────

  const doc = await PDFDocument.create();
  const font       = await doc.embedFont(StandardFonts.Helvetica);
  const boldFont   = await doc.embedFont(StandardFonts.HelveticaBold);
  const italicFont = await doc.embedFont(StandardFonts.HelveticaOblique);

  // ── rendering state ────────────────────────────────────────────────────────

  let page;
  let y;

  function addNewPage() {
    page = doc.addPage([PAGE_W, PAGE_H]);
    y = TOP_Y;
    return page;
  }

  function ensureSpace(needed) {
    if (y - needed < BOTTOM_Y) {
      addNewPage();
    }
  }

  // ── text helpers ───────────────────────────────────────────────────────────

  function wrapText(text, f, fontSize, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let current = '';

    for (const word of words) {
      const test = current ? current + ' ' + word : word;
      const w = f.widthOfTextAtSize(test, fontSize);
      if (w > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  function drawTextLine(text, x, opts = {}) {
    const {
      fontSize = 10,
      f = font,
      color = BRAND_DARK,
    } = opts;
    page.drawText(text, { x, y, size: fontSize, font: f, color });
  }

  function drawTitle(text) {
    ensureSpace(30);
    const titleFont = boldFont;
    const size = 18;
    const w = titleFont.widthOfTextAtSize(text, size);
    const x = MARGIN + (TEXT_W - w) / 2;
    page.drawText(text, { x, y, size, font: titleFont, color: BRAND_DARK });
    y -= 24;
  }

  function drawSubtitle(text) {
    ensureSpace(20);
    const size = 13;
    const w = boldFont.widthOfTextAtSize(text, size);
    const x = MARGIN + (TEXT_W - w) / 2;
    page.drawText(text, { x, y, size, font: boldFont, color: BRAND_ACCENT });
    y -= 26;
  }

  function drawHeading(text) {
    ensureSpace(28);
    y -= 10;
    page.drawText(text, { x: MARGIN, y, size: 12, font: boldFont, color: BRAND_DARK });
    y -= 18;
  }

  function drawSubHeading(text) {
    ensureSpace(22);
    y -= 4;
    page.drawText(text, { x: MARGIN, y, size: 10, font: boldFont, color: BRAND_DARK });
    y -= 16;
  }

  function drawParagraph(text, opts = {}) {
    const {
      fontSize = 10,
      f = font,
      color = BRAND_DARK,
      indent = 0,
      spacingAfter = 8
    } = opts;
    const maxW = TEXT_W - indent;
    const lines = wrapText(text, f, fontSize, maxW);
    const lineH = fontSize * 1.4;

    for (const line of lines) {
      ensureSpace(lineH);
      page.drawText(line, {
        x: MARGIN + indent,
        y,
        size: fontSize,
        font: f,
        color
      });
      y -= lineH;
    }
    y -= spacingAfter;
  }

  /** Draw a paragraph with a bold prefix (e.g. "3.1 " bold, rest normal) */
  function drawClause(prefix, body, opts = {}) {
    const { fontSize = 10, indent = 0, spacingAfter = 8 } = opts;
    const maxW = TEXT_W - indent;
    const lineH = fontSize * 1.4;

    // Measure the prefix in bold
    const prefixW = boldFont.widthOfTextAtSize(prefix, fontSize);

    // Wrap the full text (prefix + body) to get flow — but we'll draw prefix bold
    const fullText = prefix + body;
    const words = fullText.split(' ');
    const lines = [];
    let current = '';

    for (const word of words) {
      const test = current ? current + ' ' + word : word;
      const w = font.widthOfTextAtSize(test, fontSize);
      if (w > maxW && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);

    // Draw first line with bold prefix, rest normal
    for (let i = 0; i < lines.length; i++) {
      ensureSpace(lineH);
      const lineText = lines[i];

      if (i === 0) {
        // Bold prefix
        page.drawText(prefix, {
          x: MARGIN + indent,
          y,
          size: fontSize,
          font: boldFont,
          color: BRAND_DARK
        });
        // Normal remainder
        const remainder = lineText.substring(prefix.length);
        if (remainder) {
          page.drawText(remainder, {
            x: MARGIN + indent + prefixW,
            y,
            size: fontSize,
            font,
            color: BRAND_DARK
          });
        }
      } else {
        page.drawText(lineText, {
          x: MARGIN + indent,
          y,
          size: fontSize,
          font,
          color: BRAND_DARK
        });
      }
      y -= lineH;
    }
    y -= spacingAfter;
  }

  function drawBullet(text, opts = {}) {
    const { indent = 20, spacingAfter = 6 } = opts;
    drawParagraph(text, { indent, spacingAfter });
  }

  function drawHorizontalLine() {
    ensureSpace(6);
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: MARGIN + TEXT_W, y },
      thickness: 1,
      color: BRAND_DARK
    });
    y -= 20;
  }

  // ── table helper ───────────────────────────────────────────────────────────

  function drawTable(headers, rows, opts = {}) {
    const {
      colWidths,
      highlightColIdx = -1,
      fontSize = 8,
      headerFontSize = 8
    } = opts;

    const numCols = headers.length;
    // Calculate column widths
    let widths;
    if (colWidths) {
      widths = colWidths;
    } else {
      const w = TEXT_W / numCols;
      widths = Array(numCols).fill(w);
    }

    const cellPadX = 4;
    const cellPadY = 4;
    const lineH = fontSize * 1.3;
    const borderColor = GREY_MED;
    const borderW = 0.5;

    // Compute wrapped cell contents and row heights
    function wrapCell(text, colIdx, f, fs) {
      const maxW = widths[colIdx] - cellPadX * 2;
      return wrapText(String(text), f, fs, Math.max(maxW, 20));
    }

    function calcRowHeight(cells, f, fs) {
      let maxLines = 1;
      cells.forEach((cell, ci) => {
        const lines = wrapCell(cell, ci, f, fs);
        if (lines.length > maxLines) maxLines = lines.length;
      });
      return maxLines * (fs * 1.3) + cellPadY * 2;
    }

    function drawRow(cells, rowH, bg, isHeader, highlightIdx) {
      const f = isHeader ? boldFont : font;
      const fs = isHeader ? headerFontSize : fontSize;
      let x = MARGIN;

      for (let ci = 0; ci < numCols; ci++) {
        const cellBg = (ci === highlightIdx && !isHeader) ? HIGHLIGHT_BG
          : isHeader ? GREY_HEADER
          : bg;

        // Background fill
        page.drawRectangle({
          x,
          y: y - rowH,
          width: widths[ci],
          height: rowH,
          color: cellBg
        });

        // Borders
        // Top
        page.drawLine({ start: { x, y }, end: { x: x + widths[ci], y }, thickness: borderW, color: borderColor });
        // Bottom
        page.drawLine({ start: { x, y: y - rowH }, end: { x: x + widths[ci], y: y - rowH }, thickness: borderW, color: borderColor });
        // Left
        page.drawLine({ start: { x, y }, end: { x, y: y - rowH }, thickness: borderW, color: borderColor });
        // Right
        page.drawLine({ start: { x: x + widths[ci], y }, end: { x: x + widths[ci], y: y - rowH }, thickness: borderW, color: borderColor });

        // Text
        const cellFont = (ci === highlightIdx && !isHeader) ? boldFont : f;
        const lines = wrapCell(cells[ci], ci, cellFont, fs);
        let textY = y - cellPadY - fs;
        for (const line of lines) {
          page.drawText(line, {
            x: x + cellPadX,
            y: textY,
            size: fs,
            font: cellFont,
            color: BRAND_DARK
          });
          textY -= fs * 1.3;
        }

        x += widths[ci];
      }

      y -= rowH;
    }

    // Header row
    const headerH = calcRowHeight(headers, boldFont, headerFontSize);
    ensureSpace(headerH + 10);
    drawRow(headers, headerH, GREY_HEADER, true, -1);

    // Data rows
    rows.forEach((row, ri) => {
      const bg = ri % 2 === 0 ? WHITE : GREY_LIGHT;
      const rowH = calcRowHeight(row, font, fontSize);
      ensureSpace(rowH);
      drawRow(row, rowH, bg, false, highlightColIdx);
    });

    y -= 10;
  }

  // ── signature row helper ───────────────────────────────────────────────────

  function drawSignatureBlock(title, nameValue, dateValue) {
    ensureSpace(120);
    drawParagraph(title, { f: boldFont, spacingAfter: 12 });

    const labelW = 100;
    const lineSpacing = 22;
    const labels = ['Signature:', 'Name:', 'Position:', 'Date:'];
    const values = ['_______________________________', nameValue || '_______________________________', '_______________________________', dateValue || '_______________________________'];

    for (let i = 0; i < labels.length; i++) {
      ensureSpace(lineSpacing);
      page.drawText(labels[i], {
        x: MARGIN,
        y,
        size: 10,
        font: boldFont,
        color: BRAND_DARK
      });
      page.drawText(values[i], {
        x: MARGIN + labelW,
        y,
        size: 10,
        font,
        color: BRAND_DARK
      });
      y -= lineSpacing;
    }
    y -= 10;
  }

  // ── footer helper (called AFTER all pages are created) ─────────────────────

  function addFooters() {
    const pages = doc.getPages();
    const totalPages = pages.length;
    const footerY = 30;
    const footerSize = 7;

    for (let i = 0; i < totalPages; i++) {
      const p = pages[i];

      // Left: confidentiality label
      p.drawText('PFCO Site Intelligence \u2014 Subscription Agreement \u2014 Confidential', {
        x: MARGIN,
        y: footerY,
        size: footerSize,
        font,
        color: GREY_TEXT
      });

      // Right: page number
      const pageStr = `Page ${i + 1} of ${totalPages}`;
      const pageStrW = font.widthOfTextAtSize(pageStr, footerSize);
      p.drawText(pageStr, {
        x: PAGE_W - MARGIN - pageStrW,
        y: footerY,
        size: footerSize,
        font,
        color: GREY_TEXT
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  //  BUILD THE CONTRACT
  // ═══════════════════════════════════════════════════════════════════════════

  addNewPage();

  // ── TITLE PAGE AREA ────────────────────────────────────────────────────────

  y -= 40;
  drawTitle('SUBSCRIPTION AGREEMENT');
  drawSubtitle('PFCO SITE INTELLIGENCE SERVICE');
  y -= 10;

  // Date and Ref centred side-by-side
  {
    const leftText = 'Date: ';
    const rightText = 'Agreement Reference: ';
    const leftValW = font.widthOfTextAtSize(commencementDate, 10);
    const rightValW = font.widthOfTextAtSize(ref, 10);
    const leftPrefW = boldFont.widthOfTextAtSize(leftText, 10);
    const rightPrefW = boldFont.widthOfTextAtSize(rightText, 10);

    const halfW = TEXT_W / 2;
    const leftTotalW = leftPrefW + leftValW;
    const rightTotalW = rightPrefW + rightValW;

    const lx = MARGIN + (halfW - leftTotalW) / 2;
    const rx = MARGIN + halfW + (halfW - rightTotalW) / 2;

    ensureSpace(20);
    page.drawText(leftText, { x: lx, y, size: 10, font: boldFont, color: BRAND_DARK });
    page.drawText(commencementDate, { x: lx + leftPrefW, y, size: 10, font, color: BRAND_DARK });
    page.drawText(rightText, { x: rx, y, size: 10, font: boldFont, color: BRAND_DARK });
    page.drawText(ref, { x: rx + rightPrefW, y, size: 10, font, color: BRAND_DARK });
    y -= 30;
  }

  drawHorizontalLine();

  // ── PARTIES ────────────────────────────────────────────────────────────────

  drawHeading('PARTIES');
  drawClause('(1) ', 'PF & Co Holdings Ltd (company number 16649319), whose registered office is at 2 Queens Drive, Guildford, England, GU2 9PP ("the Provider")');
  drawClause('(2) ', `${clientPartyName} ("the Client")`);
  y -= 6;

  // ── BACKGROUND ─────────────────────────────────────────────────────────────

  drawHeading('BACKGROUND');
  drawClause('(A) ', 'The Provider operates the PFCO Site Intelligence service, an AI-assisted planning and development intelligence platform that produces desktop-based analytical reports covering planning, environmental, technical, and development matters.');
  drawClause('(B) ', 'The Client wishes to subscribe to the Service on the terms set out in this Agreement.');
  drawClause('(C) ', 'The Parties have agreed to enter into this Agreement on the terms and conditions set out below.');
  y -= 6;

  // ── CLAUSE 1: DEFINITIONS AND INTERPRETATION ──────────────────────────────

  drawHeading('1. DEFINITIONS AND INTERPRETATION');
  drawParagraph('1.1 In this Agreement, the following terms shall have the following meanings:');

  // Definitions table
  drawTable(
    ['Term', 'Definition'],
    [
      ['Additional Credit', 'A Report Credit purchased outside the Client\'s monthly credit allocation, charged at the applicable Overage Rate.'],
      ['Annual Discount Rate', 'A discount of 15% on the aggregate monthly Subscription Fee for 12 months.'],
      ['Billing Period', 'Each calendar month during the Subscription Term.'],
      ['Business Day', 'A day other than a Saturday, Sunday, or public holiday in England and Wales.'],
      ['Clawback Amount', 'The aggregate Individual Report Prices of all Reports delivered to the Client from the Commencement Date to the date of early termination.'],
      ['Confidential Information', 'All information disclosed by one Party to the other that is marked as confidential or would reasonably be understood to be confidential.'],
      ['Consumer Client', 'A Client who is an individual entering into this Agreement for purposes wholly or mainly outside their trade or profession.'],
      ['Cooling-Off Period', '14 calendar days from the Commencement Date, applicable to Consumer Clients only.'],
      ['Credit Rollover Period', 'The number of months used to calculate the Maximum Credit Bank.'],
      ['Individual Report Price', 'The standard list price for each report type as published by the Provider.'],
      ['Maximum Credit Bank', 'The maximum number of Report Credits the Client may hold at any time.'],
      ['Minimum Term', 'The minimum duration of the subscription.'],
      ['Overage Rate', 'The flat rate charged per Additional Credit (Scout \u00A3275, Professional \u00A3240, Developer \u00A3225, Enterprise \u00A3195).'],
      ['Report', 'A desktop-based intelligence report produced by the Provider using the Service.'],
      ['Report Credit', 'A unit of entitlement where one Report Credit equals one Report of any type, regardless of price.'],
      ['Service', 'The PFCO Site Intelligence service.'],
      ['Subscription Fee', 'The monthly fee payable by the Client.'],
      ['Subscription Term', 'The period from the Commencement Date through the Minimum Term and any renewal.'],
      ['Subscription Tier', 'Scout, Professional, Developer, or Enterprise.'],
      ['Turnaround Time', 'The target period for delivery of a completed Report.'],
      ['White-Label Report', 'A Report produced under the Client\'s branding.']
    ],
    { colWidths: [140, TEXT_W - 140], fontSize: 9 }
  );

  drawSubHeading('1.2 Interpretation');
  drawParagraph('In this Agreement, unless the context otherwise requires: (a) references to clauses and Schedules are to the clauses and Schedules of this Agreement; (b) references to any statute or statutory provision include any subordinate legislation made under it and any modification, amendment, re-enactment or replacement thereof; (c) words in the singular include the plural and vice versa; (d) headings do not affect the interpretation of this Agreement; and (e) the Schedules form part of this Agreement and shall have effect as if set out in full in the body of this Agreement.');
  y -= 6;

  // ── CLAUSE 2: SUBSCRIPTION DETAILS ────────────────────────────────────────

  drawHeading('2. SUBSCRIPTION DETAILS');
  drawParagraph('The following details apply to this subscription:');

  drawTable(
    ['Field', 'Details'],
    [
      ['Client Name', clientName],
      ['Client Company', clientCompany || 'Individual'],
      ['Client Email', clientEmail],
      ['Client Phone', clientPhone || 'Not provided'],
      ['Subscription Tier', tierName],
      ['Billing Preference', billingCycle === 'annual' ? 'Annual (15% discount)' : 'Monthly'],
      ['Monthly Fee', fmtCurrency(monthlyFee)],
      ['Annual Fee', fmtCurrency(annualFee)],
      ['Credits per Month', String(creditsPerMonth)],
      ['Maximum Credit Bank', String(maxCreditBank)],
      ['Target Turnaround', turnaround],
      ['Credit Rollover Period', rollover],
      ['Minimum Term', minTerm],
      ['Overage Rate', fmtCurrency(overageRate) + ' per Additional Credit'],
      ['White-Label Reports', whiteLabel ? 'Yes' : 'No'],
      ['Commencement Date', commencementDate]
    ],
    { colWidths: [160, TEXT_W - 160] }
  );

  // ── CLAUSE 3: THE SERVICE ─────────────────────────────────────────────────

  drawHeading('3. THE SERVICE');
  drawClause('3.1 ', 'The Provider shall provide the Service to the Client from the Commencement Date for the duration of the Subscription Term, subject to the terms and conditions of this Agreement.');
  drawClause('3.2 ', 'The Service comprises desktop-based intelligence Reports produced using an AI-assisted workflow with professional oversight. A total of 24 report types are available as set out in Schedule 2.');
  drawClause('3.3 ', 'To request a Report, the Client shall provide to the Provider: (a) the report type required; (b) the site address or location; and (c) any other information reasonably required by the Provider to produce the Report.');
  drawClause('3.4 ', 'The Provider shall acknowledge receipt of a Report request within one Business Day.');
  drawClause('3.5 ', 'A Report Credit is deducted from the Client\'s balance when production of a Report commences. If the Provider is unable to produce the Report for reasons within its control, the Report Credit shall be reinstated to the Client\'s balance.');
  y -= 6;

  // ── CLAUSE 4: SUBSCRIPTION TIERS ──────────────────────────────────────────

  drawHeading('4. SUBSCRIPTION TIERS');
  drawClause('4.1 ', 'Four Subscription Tiers are available as set out in Schedule 1. The Client\'s selected tier is detailed in clause 2.');
  drawClause('4.2 ', `The Client has selected the ${tierName} tier, which includes the following features:`);

  // Client's tier features table
  {
    const t = TIER_DATA[tierName] || TIER_DATA.Scout;
    drawTable(
      ['Feature', 'Detail'],
      [
        ['Monthly Fee', fmtCurrency(t.monthlyFee)],
        ['Annual Fee (15% discount)', fmtCurrency(t.annualFee)],
        ['Credits per Month', String(t.credits)],
        ['Maximum Credit Bank', String(t.maxBank)],
        ['Target Turnaround', t.turnaround],
        ['Maximum Delivery Period', t.maxDelivery],
        ['White-Label Reports', t.whiteLabel],
        ['Support', t.support],
        ['Quarterly Pipeline Review', t.pipelineReview],
        ['Overage Rate', fmtCurrency(t.overageRate)],
        ['Credit Rollover Period', t.rollover],
        ['Minimum Term', t.minTerm]
      ],
      { colWidths: [180, TEXT_W - 180] }
    );
  }

  drawClause('4.3 ', 'The Client may upgrade to a higher Subscription Tier at any time during the Subscription Term. On upgrade, any unused Report Credits shall carry forward, subject to the Maximum Credit Bank of the new Subscription Tier.');
  drawClause('4.4 ', 'The Client may only downgrade to a lower Subscription Tier at the expiry of the current Minimum Term.');
  y -= 6;

  // ── CLAUSE 5: REPORT CREDITS ──────────────────────────────────────────────

  drawHeading('5. REPORT CREDITS');
  drawClause('5.1 ', 'Each Report Credit entitles the Client to one Report of any type listed in Schedule 2, regardless of the Individual Report Price of the report type selected. One Report Credit equals one Report.');
  drawClause('5.2 ', 'Report Credits are personal to the Client and may not be transferred, assigned, or made available to any third party.');
  drawClause('5.3 ', 'Credit Rollover and Maximum Credit Bank: Unused Report Credits at the end of a Billing Period shall roll over to the next Billing Period, subject to the Maximum Credit Bank. The Maximum Credit Bank for each Subscription Tier is:');

  drawTable(
    ['Tier', 'Credits/Month', 'Rollover Period', 'Maximum Credit Bank'],
    [
      ['Scout', '2', '2 months', '4 (2 x 2)'],
      ['Professional', '6', '3 months', '18 (6 x 3)'],
      ['Developer', '12', '4 months', '48 (12 x 4)'],
      ['Enterprise', '30', '6 months', '180 (30 x 6)']
    ],
    { colWidths: [TEXT_W * 0.25, 80, 80, TEXT_W - TEXT_W * 0.25 - 160] }
  );

  drawClause('5.4 ', 'At the start of each Billing Period, new monthly Report Credits are added to the Client\'s balance. The total balance (existing plus new credits) shall not exceed the Maximum Credit Bank. If the balance would exceed the Maximum Credit Bank, the oldest credits shall expire first on a first-in, first-out (FIFO) basis.');
  drawClause('5.5 ', 'Worked example for the Scout tier: if the Client uses zero credits for two consecutive months, the balance reaches 4 (the Maximum Credit Bank). At the start of the third month, the 2 oldest credits expire and 2 new credits are added, maintaining the balance at 4.');
  drawClause('5.6 ', 'On termination of this Agreement for any reason, all unused Report Credits shall lapse immediately and no refund shall be payable in respect of lapsed credits.');
  y -= 6;

  // ── CLAUSE 6: ADDITIONAL CREDITS AND OVERAGE ──────────────────────────────

  drawHeading('6. ADDITIONAL CREDITS AND OVERAGE');
  drawClause('6.1 ', 'The Client may purchase Additional Credits at any time during the Subscription Term.');
  drawClause('6.2 ', 'Additional Credits are charged at a flat rate per Subscription Tier, regardless of the report type requested:');

  drawTable(
    ['Tier', 'Overage Rate per Additional Credit'],
    [
      ['Scout', '\u00A3275'],
      ['Professional', '\u00A3240'],
      ['Developer', '\u00A3225'],
      ['Enterprise', '\u00A3195']
    ],
    { colWidths: [TEXT_W / 2, TEXT_W / 2] }
  );

  drawClause('6.3 ', 'The same Overage Rate applies regardless of which report type is requested by the Client.');
  drawClause('6.4 ', 'Additional Credits shall be invoiced separately from the Subscription Fee and are payable within 14 days of the invoice date.');
  drawClause('6.5 ', 'Reports produced using Additional Credits are subject to the same Turnaround Time as Reports produced using monthly Report Credits.');
  drawClause('6.6 ', 'Additional Credits do not roll over and are not subject to the Credit Rollover or Maximum Credit Bank provisions.');
  y -= 6;

  // ── CLAUSE 7: WHITE-LABEL REPORTS ─────────────────────────────────────────

  drawHeading('7. WHITE-LABEL REPORTS');
  drawClause('7.1 ', 'White-Label Reports are available to Clients on the Professional, Developer, and Enterprise Subscription Tiers.');
  drawClause('7.2 ', 'To enable White-Label Reports, the Client shall provide to the Provider: (a) the Client\'s logo in a minimum resolution of 300 dpi in PNG or SVG format; (b) the Client\'s preferred colour scheme; and (c) the Client\'s company details and contact information.');
  drawClause('7.3 ', 'The Provider shall produce White-Label Reports under the Client\'s branding in accordance with the materials provided under clause 7.2.');
  drawClause('7.4 ', 'White-Label Reports shall not bear the Provider\'s name, logo, or branding unless required by law or regulation.');
  drawClause('7.5 ', 'All underlying intellectual property in White-Label Reports remains with the Provider in accordance with clause 13. The Client is solely responsible for the onward distribution of White-Label Reports to its own clients and third parties.');
  drawClause('7.6 ', 'The Provider shall have no liability to any third party receiving a White-Label Report from the Client. The Client shall indemnify the Provider against any claims, losses, damages, costs, and expenses arising from the distribution of White-Label Reports by the Client to third parties.');
  y -= 6;

  // ── CLAUSE 8: PAYMENT TERMS ───────────────────────────────────────────────

  drawHeading('8. PAYMENT TERMS');
  drawClause('8.1 ', 'The Subscription Fee is payable monthly in advance by direct debit, standing order, or credit/debit card, unless the Client has opted for annual billing under clause 8.3.');
  drawClause('8.2 ', 'All fees stated in this Agreement are exclusive of value added tax (VAT), which shall be charged at the prevailing rate where applicable.');
  drawClause('8.3 ', 'Annual Billing: The Client may elect to pay the Subscription Fee annually in advance, in which case a discount of 15% (the Annual Discount Rate) shall apply. The annual fees for each Subscription Tier are: Scout \u00A34,069.80; Professional \u00A310,149; Developer \u00A320,349; Enterprise \u00A340,749. Annual fees are payable in full in advance at the start of each annual period.');
  drawClause('8.4 ', 'Failed Payments: If any payment fails or is not received by the due date, the Provider shall notify the Client and allow a cure period of 7 Business Days. If payment is not received within the cure period, the Provider may suspend the Service until payment is received.');
  drawClause('8.5 ', 'Late payment interest shall accrue on overdue amounts at the rate of 4% per annum above the Bank of England base rate from time to time, calculated on a daily basis from the due date until the date of actual payment.');
  y -= 6;

  // ── CLAUSE 9: MINIMUM TERM AND RENEWAL ────────────────────────────────────

  drawHeading('9. MINIMUM TERM AND RENEWAL');
  drawClause('9.1 ', 'This Agreement shall continue for the Minimum Term specified in clause 2, commencing on the Commencement Date.');
  drawClause('9.2 ', 'On expiry of the Minimum Term, this Agreement shall automatically renew on a rolling monthly basis on the same terms and conditions, unless either Party gives to the other not less than 30 days\' written notice of termination.');
  drawClause('9.3 ', 'Where the Client has elected annual billing, the Agreement shall renew for successive 12-month periods unless either Party gives not less than 30 days\' written notice before the end of the current annual period.');
  drawClause('9.4 ', 'The Provider shall give the Client not less than 30 days\' notice before the expiry of the Minimum Term, reminding the Client of the renewal provisions and the Client\'s right to terminate.');
  y -= 6;

  // ── CLAUSE 10: ANNUAL BILLING REFUNDS ─────────────────────────────────────

  drawHeading('10. ANNUAL BILLING REFUNDS');
  drawClause('10.1 ', 'Cooling-Off Period: If the Client is a Consumer Client and cancels during the Cooling-Off Period under clause 11, the Provider shall refund the annual fee less the aggregate Individual Report Prices of any Reports delivered during the Cooling-Off Period.');
  drawClause('10.2 ', 'After Cooling-Off Period: If the Client terminates during the Minimum Term after the Cooling-Off Period has expired, the Clawback Amount provisions set out in clause 12.2 shall apply.');
  drawClause('10.3 ', 'Provider Termination for Cause: If the Provider terminates this Agreement for cause under clause 12.4, no refund of the annual fee shall be payable.');
  drawClause('10.4 ', 'Provider Termination without Cause: If the Provider terminates this Agreement without cause under clause 12.3, a pro-rata refund of the annual fee shall be payable for the unexpired portion of the annual period.');
  y -= 6;

  // ── CLAUSE 11: COOLING-OFF PERIOD ─────────────────────────────────────────

  drawHeading('11. COOLING-OFF PERIOD');
  drawClause('11.1 ', 'This clause 11 applies to Consumer Clients only.');
  drawClause('11.2 ', 'A Consumer Client has the right to cancel this Agreement within 14 calendar days of the Commencement Date (the Cooling-Off Period), in accordance with the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.');
  drawClause('11.3 ', 'To exercise the right to cancel, the Consumer Client must provide a clear written statement to the Provider, which may be sent by email or post to the addresses set out in clause 22.');
  drawClause('11.4 ', 'If the Service has been commenced during the Cooling-Off Period at the Consumer Client\'s request, the Consumer Client shall pay the Individual Report Price for each Report delivered, and the Provider shall refund the balance of any fees paid.');
  drawClause('11.5 ', 'If all Report Credits allocated for the first Billing Period have been used before cancellation during the Cooling-Off Period, the right to cancel in respect of that Billing Period shall be lost.');
  drawClause('11.6 ', 'This clause 11 does not apply to business clients. A Client entering into this Agreement for purposes related to their trade, business, craft, or profession is not a Consumer Client and does not have the right to cancel under this clause.');
  y -= 6;

  // ── CLAUSE 12: CANCELLATION AND TERMINATION ───────────────────────────────

  drawHeading('12. CANCELLATION AND TERMINATION');
  drawClause('12.1 ', 'Termination after Minimum Term: After the expiry of the Minimum Term, either Party may terminate this Agreement by giving not less than 30 days\' written notice to the other Party.');
  drawClause('12.2 ', 'Termination during Minimum Term (Clawback): If the Client terminates this Agreement during the Minimum Term (other than under clause 11 or clause 12.5), the following provisions shall apply:');

  drawBullet('(a) The Provider shall calculate the Clawback Amount, being the aggregate Individual Report Prices (as set out in Schedule 2) of all Reports delivered to the Client from the Commencement Date to the date of early termination.');
  drawBullet('(b) If the total Subscription Fees paid by the Client exceed the Clawback Amount, the Provider shall refund the difference to the Client within 30 days.');
  drawBullet('(c) If the Clawback Amount exceeds the total Subscription Fees paid by the Client, the Client shall pay the shortfall to the Provider within 30 days.');
  drawBullet('(d) The effect of the Clawback provisions is that the Client loses the benefit of the subscription discount and pays the full standalone Individual Report Price for each Report received during the subscription.');

  drawClause('12.3 ', 'Provider Termination after Minimum Term: The Provider may terminate this Agreement after the expiry of the Minimum Term by giving not less than 60 days\' written notice to the Client.');
  drawClause('12.4 ', 'Provider Termination for Cause: The Provider may terminate this Agreement immediately or on such notice as it considers appropriate if:');

  drawBullet('(a) the Client commits a material breach of this Agreement and fails to remedy such breach within 14 days of written notice requiring it to do so;');
  drawBullet('(b) the Client fails to pay any amount due under this Agreement within 21 days of the due date;');
  drawBullet('(c) the Client becomes insolvent, enters administration, makes an arrangement with creditors, or has a receiver appointed;');
  drawBullet('(d) the Client ceases or threatens to cease carrying on business; or');
  drawBullet('(e) the Client uses the Service for any unlawful or fraudulent purpose.');

  drawClause('12.5 ', 'Client Termination for Cause: The Client may terminate this Agreement immediately or on such notice as it considers appropriate if:');

  drawBullet('(a) the Provider commits a material breach of this Agreement and fails to remedy such breach within 14 days of written notice requiring it to do so; or');
  drawBullet('(b) the Provider becomes insolvent, enters administration, makes an arrangement with creditors, or has a receiver appointed.');

  drawClause('12.6 ', 'Consequences of Termination: On termination or expiry of this Agreement:');

  drawBullet('(a) all unused Report Credits shall lapse immediately;');
  drawBullet('(b) the Provider shall deliver any completed Reports to the Client within 10 Business Days;');
  drawBullet('(c) any Reports in progress at the date of termination shall either be completed and delivered (at the Provider\'s discretion) or abandoned, in which case any credit used shall be reinstated and lapse immediately;');
  drawBullet('(d) each Party shall return or destroy all Confidential Information of the other Party;');
  drawBullet('(e) the Client\'s licence to use completed Reports under clause 13.3 shall continue in full force and effect; and');
  drawBullet('(f) clauses which by their nature are intended to survive termination (including clauses 13, 14, 15, 16, and 20) shall continue in full force and effect.');
  y -= 6;

  // ── CLAUSE 13: INTELLECTUAL PROPERTY ──────────────────────────────────────

  drawHeading('13. INTELLECTUAL PROPERTY');
  drawClause('13.1 ', 'The Provider retains all intellectual property rights in and to the Service, including but not limited to all AI systems, methodologies, templates, frameworks, algorithms, software, and databases used in the production of Reports.');
  drawClause('13.2 ', 'Nothing in this Agreement shall operate to transfer any intellectual property rights from the Provider to the Client.');
  drawClause('13.3 ', 'Client Licence: Subject to the terms of this Agreement, the Provider grants to the Client a non-exclusive, non-transferable, perpetual licence to:');

  drawBullet('(a) use the Reports for the Client\'s own internal business purposes;');
  drawBullet('(b) share the Reports with the Client\'s professional advisers, lenders, and planning authorities; and');
  drawBullet('(c) where the Client\'s Subscription Tier includes White-Label Reports, distribute White-Label Reports to the Client\'s own clients.');

  drawClause('13.4 ', 'Restrictions: The Client shall not:');

  drawBullet('(a) resell, sublicense, or commercially distribute Reports (other than White-Label Reports in accordance with clause 7);');
  drawBullet('(b) reverse-engineer, decompile, or attempt to derive the source code or algorithms of the Service;');
  drawBullet('(c) remove, alter, or obscure any proprietary notices on Reports; or');
  drawBullet('(d) use Reports, data, or any output of the Service to train, develop, or improve any competing AI system or intelligence service.');

  drawClause('13.5 ', 'The Client retains all intellectual property rights in its own branding, logos, and materials provided under clause 7.2. The Client grants the Provider a non-exclusive licence to use such branding materials solely for the purpose of producing White-Label Reports under this Agreement.');
  y -= 6;

  // ── CLAUSE 14: LIMITATION OF LIABILITY ────────────────────────────────────

  drawHeading('14. LIMITATION OF LIABILITY');
  drawClause('14.1 ', 'The Client acknowledges that Reports are desktop-based intelligence products and are not intended to constitute or replace:');

  drawBullet('(a) formal certifications or statutory assessments;');
  drawBullet('(b) site-specific surveys or investigations;');
  drawBullet('(c) formal planning advice from a chartered town planner;');
  drawBullet('(d) legal advice from a qualified solicitor or barrister;');
  drawBullet('(e) engineering advice based on physical testing or site investigation; or');
  drawBullet('(f) environmental assessments based on physical sampling or monitoring.');

  drawClause('14.2 ', 'Subject to clause 14.3, the Provider\'s total aggregate liability under or in connection with this Agreement shall not exceed an amount equal to 12 months\' Subscription Fees. The Provider shall have no liability for: (a) loss of profits; (b) loss of goodwill; (c) loss of opportunity (including development opportunity); (d) indirect or consequential loss; or (e) special or punitive damages.');
  drawClause('14.3 ', 'Nothing in this Agreement shall exclude or limit liability for: (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability which cannot be excluded or limited by applicable law.');
  drawClause('14.4 ', 'Any claim under this Agreement must be brought within 12 months of the date on which the claiming Party became aware (or ought reasonably to have become aware) of the circumstances giving rise to the claim, and in any event no later than 24 months after delivery of the relevant Report.');
  y -= 6;

  // ── CLAUSE 15: DATA PROTECTION ────────────────────────────────────────────

  drawHeading('15. DATA PROTECTION');
  drawClause('15.1 ', 'Each Party shall comply with its obligations under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.');
  drawClause('15.2 ', 'For the purposes of the data protection legislation, the Client is the data controller and the Provider is the data processor in respect of any personal data processed in the performance of this Agreement.');
  drawClause('15.3 ', 'Personal data processed under this Agreement is limited to: (a) the Client\'s contact and billing information; and (b) site information provided by the Client in connection with Report requests.');
  drawClause('15.4 ', 'The Provider shall:');

  drawBullet('(a) process personal data only on the documented instructions of the Client;');
  drawBullet('(b) implement appropriate technical and organisational security measures;');
  drawBullet('(c) not transfer personal data outside the United Kingdom without the Client\'s prior written consent;');
  drawBullet('(d) notify the Client without undue delay upon becoming aware of a personal data breach;');
  drawBullet('(e) assist the Client in responding to data subject access requests; and');
  drawBullet('(f) delete or return all personal data on termination of this Agreement, at the Client\'s election.');

  drawClause('15.5 ', 'The Provider may retain anonymised, aggregated data derived from the Service for the purpose of service improvement, research, and development, provided that such data does not identify the Client or any individual.');
  y -= 6;

  // ── CLAUSE 16: CONFIDENTIALITY ────────────────────────────────────────────

  drawHeading('16. CONFIDENTIALITY');
  drawClause('16.1 ', 'Neither Party shall disclose the other Party\'s Confidential Information to any third party, or use the other Party\'s Confidential Information for any purpose other than the performance of this Agreement.');
  drawClause('16.2 ', 'The obligations in clause 16.1 shall not apply to Confidential Information which: (a) is disclosed to the receiving Party\'s employees, agents, or professional advisers who need to know it for the purposes of this Agreement, provided they are bound by equivalent confidentiality obligations; (b) is required to be disclosed by law, court order, or any governmental or regulatory authority; or (c) is or becomes publicly available other than through a breach of this Agreement.');
  drawClause('16.3 ', 'The obligations under this clause 16 shall continue for a period of 3 years after the termination or expiry of this Agreement.');
  y -= 6;

  // ── CLAUSE 17: VARIATION ──────────────────────────────────────────────────

  drawHeading('17. VARIATION');
  drawClause('17.1 ', 'The Provider may vary the terms of this Agreement (including Subscription Fees) by giving the Client not less than 30 days\' written notice of the proposed variation.');
  drawClause('17.2 ', 'If the Client does not agree to the proposed variation, the Client may terminate this Agreement without penalty by giving written notice to the Provider before the variation takes effect.');
  drawClause('17.3 ', 'If the Client does not give notice of termination before the variation takes effect, the Client shall be deemed to have accepted the variation.');
  drawClause('17.4 ', 'No other variation of this Agreement shall be effective unless it is in writing and signed by or on behalf of both Parties.');
  y -= 6;

  // ── CLAUSE 18: FORCE MAJEURE ──────────────────────────────────────────────

  drawHeading('18. FORCE MAJEURE');
  drawClause('18.1 ', 'Neither Party shall be liable for any delay in performing, or failure to perform, its obligations under this Agreement if such delay or failure results from events, circumstances, or causes beyond its reasonable control, including but not limited to: (a) acts of God, flood, drought, earthquake, or other natural disaster; (b) epidemic or pandemic; (c) terrorist attack, civil war, civil commotion, or riots; (d) war, threat of or preparation for war; (e) imposition of sanctions, embargo, or breaking off of diplomatic relations; (f) any law or any action taken by a government or public authority; (g) fire, explosion, or accidental damage; (h) failure of utility services including electricity, gas, water, or telecommunications; and (i) failure of third-party AI services, data providers, or cloud computing services.');
  drawClause('18.2 ', 'The affected Party shall: (a) promptly notify the other Party in writing of the force majeure event and its expected duration; (b) use all reasonable endeavours to mitigate the effect of the force majeure event; and (c) resume performance of its obligations as soon as reasonably practicable after the force majeure event ceases.');
  drawClause('18.3 ', 'If a force majeure event continues for a period of 60 or more consecutive days, either Party may terminate this Agreement by giving 14 days\' written notice to the other Party. In such event, the Provider shall make a pro-rata refund of any prepaid Subscription Fees for the unexpired portion of the Billing Period or annual period.');
  y -= 6;

  // ── CLAUSE 19: GOVERNING LAW ──────────────────────────────────────────────

  drawHeading('19. GOVERNING LAW');
  drawClause('19.1 ', 'This Agreement and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.');
  y -= 6;

  // ── CLAUSE 20: DISPUTE RESOLUTION ─────────────────────────────────────────

  drawHeading('20. DISPUTE RESOLUTION');
  drawClause('20.1 ', 'If a dispute arises out of or in connection with this Agreement, the Parties shall first attempt to resolve the dispute by negotiation. The initiating Party shall give written notice to the other Party setting out the nature of the dispute, and the Parties shall use their best endeavours to resolve the dispute within 14 days of such notice.');
  drawClause('20.2 ', 'If the dispute is not resolved by negotiation within 14 days, the Parties agree to submit the dispute to mediation administered by the Centre for Effective Dispute Resolution (CEDR) in London, in accordance with CEDR\'s model mediation procedure.');
  drawClause('20.3 ', 'If the dispute is not resolved by mediation within 56 days of the initial dispute notice, either Party may commence proceedings in the courts of England and Wales, which shall have exclusive jurisdiction.');
  drawClause('20.4 ', 'Nothing in this clause 20 shall prevent either Party from seeking urgent interim or injunctive relief from any court of competent jurisdiction.');
  y -= 6;

  // ── CLAUSE 21: ENTIRE AGREEMENT ───────────────────────────────────────────

  drawHeading('21. ENTIRE AGREEMENT');
  drawClause('21.1 ', 'This Agreement constitutes the entire agreement between the Parties and supersedes and extinguishes all previous agreements, promises, assurances, warranties, representations, and understandings between them, whether written or oral, relating to its subject matter. Each Party acknowledges that in entering into this Agreement it does not rely on any statement, representation, assurance, or warranty (whether made innocently or negligently) that is not set out in this Agreement. Nothing in this clause shall exclude liability for fraud.');
  y -= 6;

  // ── CLAUSE 22: NOTICES ────────────────────────────────────────────────────

  drawHeading('22. NOTICES');
  drawClause('22.1 ', 'Any notice or other communication given to a Party under or in connection with this Agreement shall be in writing and shall be delivered by hand, sent by pre-paid first-class post, or sent by email.');
  drawClause('22.2 ', 'A notice shall be deemed to have been received: (a) if delivered by hand, at the time the notice is left at the proper address; (b) if sent by pre-paid first-class post, at 9.00 am on the second Business Day after posting; and (c) if sent by email, at the time of transmission.');
  drawClause('22.3 ', 'Notices to the Provider shall be sent to: PF & Co Holdings Ltd, 2 Queens Drive, Guildford, England, GU2 9PP. Email: info@pfandco.co.uk.');
  drawClause('22.4 ', `Notices to the Client shall be sent to the contact details specified in clause 2: ${clientName}${clientCompany ? ', ' + clientCompany : ''}. Email: ${clientEmail}.`);
  y -= 6;

  // ── CLAUSE 23: GENERAL ────────────────────────────────────────────────────

  drawHeading('23. GENERAL');
  drawClause('23.1 ', 'Assignment: The Client shall not assign, transfer, charge, sub-contract, or deal in any other manner with all or any of its rights or obligations under this Agreement without the prior written consent of the Provider. The Provider may assign or transfer its rights and obligations under this Agreement to any third party on written notice to the Client.');
  drawClause('23.2 ', 'Waiver: A waiver of any right or remedy under this Agreement or by law is only effective if given in writing and shall not be deemed a waiver of any subsequent right or remedy.');
  drawClause('23.3 ', 'Severance: If any provision of this Agreement is or becomes invalid, illegal, or unenforceable, it shall be deemed deleted, but that shall not affect the validity and enforceability of the rest of this Agreement. If any provision is deemed deleted, the Parties shall negotiate in good faith to agree a replacement provision that, to the greatest extent possible, achieves the intended commercial result of the original provision.');
  drawClause('23.4 ', 'Third Party Rights: No person other than a Party to this Agreement shall have any rights to enforce any term of this Agreement pursuant to the Contracts (Rights of Third Parties) Act 1999.');
  drawClause('23.5 ', 'No Partnership or Agency: Nothing in this Agreement is intended to, or shall be deemed to, establish any partnership or joint venture between the Parties, constitute either Party the agent of the other, or authorise either Party to make or enter into any commitments for or on behalf of the other Party.');
  drawClause('23.6 ', 'Counterparts: This Agreement may be executed in any number of counterparts, each of which shall constitute a duplicate original, but all the counterparts shall together constitute one agreement.');
  y -= 6;

  // ── TURNAROUND TIME GUIDANCE ──────────────────────────────────────────────

  drawHeading('TURNAROUND TIME GUIDANCE');
  drawClause('(a) ', 'Scout tier: target turnaround of 72 hours. Professional, Developer, and Enterprise tiers: target turnaround of 48 hours. Turnaround periods are stated in calendar hours and include weekends.');
  drawClause('(b) ', 'Maximum Delivery Period: 7 calendar days for standard Report requests within the Client\'s monthly credit allocation.');
  drawClause('(c) ', 'Banked Credit Requests: Where the Client submits requests exceeding the monthly credit allocation using banked credits, the Maximum Delivery Period shall be extended to 14 calendar days. Reports shall be delivered sequentially.');
  drawClause('(d) ', 'Turnaround commences when the Provider confirms receipt of all required information from the Client.');
  drawClause('(e) ', 'System disruptions, including AI service outages and third-party data provider delays, may cause delivery times to exceed the Maximum Delivery Period. Such delays shall not constitute a breach of this Agreement provided the Provider keeps the Client reasonably informed.');
  drawClause('(f) ', 'The Provider shall notify the Client as soon as reasonably practicable of any anticipated delay in delivery.');
  drawClause('(g) ', 'Persistent Delays: A failure to meet Turnaround Times shall only constitute a breach of this Agreement if the Provider misses 3 or more deadlines in a rolling 6-month period, after the Client has given written notice and the Provider has had 30 days to remedy the situation.');
  y -= 6;

  // ── SCHEDULE 1: SUBSCRIPTION TIERS AND PRICING ────────────────────────────

  addNewPage();
  drawHeading('SCHEDULE 1: SUBSCRIPTION TIERS AND PRICING');

  {
    const labels = [
      'Target Market',
      'Monthly Fee',
      'Annual Fee (15% discount)',
      'Credits/Month',
      'Max Credit Bank',
      'Target Turnaround',
      'Max Delivery',
      'White-Label',
      'Support',
      'Pipeline Review',
      'Overage Rate',
      'Rollover Period',
      'Min Term'
    ];
    const tiers = ['Scout', 'Professional', 'Developer', 'Enterprise'];
    const data = tiers.map(t => {
      const d = TIER_DATA[t];
      return [
        d.targetMarket,
        fmtCurrency(d.monthlyFee),
        fmtCurrency(d.annualFee),
        String(d.credits),
        String(d.maxBank),
        d.turnaround,
        d.maxDelivery,
        d.whiteLabel,
        d.support,
        d.pipelineReview,
        fmtCurrency(d.overageRate),
        d.rollover,
        d.minTerm
      ];
    });

    const rows = labels.map((label, li) => {
      return [label, ...tiers.map((_, ti) => data[ti][li])];
    });

    drawTable(
      ['', 'Scout', 'Professional', 'Developer', 'Enterprise'],
      rows,
      {
        colWidths: [90, (TEXT_W - 90) / 4, (TEXT_W - 90) / 4, (TEXT_W - 90) / 4, (TEXT_W - 90) / 4],
        highlightColIdx: highlightCol
      }
    );
  }

  // ── SCHEDULE 2: REPORT TYPES AND INDIVIDUAL REPORT PRICES ─────────────────

  addNewPage();
  drawHeading('SCHEDULE 2: REPORT TYPES AND INDIVIDUAL REPORT PRICES');

  drawTable(
    ['No.', 'Report Type', 'Category', 'Individual Report Price'],
    REPORT_TYPES,
    { colWidths: [25, TEXT_W - 25 - 75 - 105, 75, 105] }
  );

  drawParagraph(
    'Notes: Prices are subject to change with 30 days\' written notice. The Provider may add new report types from time to time. All prices are exclusive of VAT. One Report Credit equals one Report of any type, regardless of the Individual Report Price.',
    { fontSize: 8, f: italicFont, spacingAfter: 20 }
  );

  // ── EXECUTION BLOCK ───────────────────────────────────────────────────────

  addNewPage();
  drawHorizontalLine();
  drawHeading('EXECUTION');
  drawParagraph('This Agreement has been entered into on the date stated at the beginning of it.', { spacingAfter: 20 });

  // Provider signature
  drawSignatureBlock(
    'Signed for and on behalf of PF & CO HOLDINGS LTD:',
    null,
    null
  );

  y -= 10;

  // Client signature
  drawSignatureBlock(
    'Signed for and on behalf of THE CLIENT:',
    clientName,
    commencementDate
  );

  // ── add footers to all pages ───────────────────────────────────────────────

  addFooters();

  // ── save and return Buffer ─────────────────────────────────────────────────

  const pdfBytes = await doc.save();
  return Buffer.from(pdfBytes);
}
