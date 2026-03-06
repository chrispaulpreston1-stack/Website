#!/usr/bin/env node
/**
 * Generates a branded 1200x630 OG image (og-image.png) for social media previews.
 * Uses sharp to convert an SVG layout to PNG.
 *
 * Run: node scripts/generate-og-image.js
 */

import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, '..', 'public', 'og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#1a1a2e"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <linearGradient id="glow" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Subtle radial glow -->
  <ellipse cx="300" cy="315" rx="500" ry="400" fill="url(#glow)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="${WIDTH}" height="6" fill="url(#accent)"/>

  <!-- Logo mark -->
  <rect x="80" y="70" width="64" height="64" rx="14" fill="#f59e0b"/>
  <text x="112" y="112" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="32" fill="#0a0a0a" text-anchor="middle">PF</text>

  <!-- Company name -->
  <text x="160" y="105" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="28" fill="white" letter-spacing="1">
    PF &amp; Co Construction
  </text>

  <!-- Main headline -->
  <text x="80" y="230" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="56" fill="white">
    AI-Powered Structural
  </text>
  <text x="80" y="295" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="56" fill="white">
    Engineering &amp; Site
  </text>
  <text x="80" y="360" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="56" fill="white">
    Intelligence
  </text>

  <!-- Accent underline -->
  <rect x="80" y="380" width="200" height="5" rx="2.5" fill="url(#accent)"/>

  <!-- Subtitle -->
  <text x="80" y="430" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="24" fill="#9ca3af">
    Planning-ready reports in 48 hours. Nationwide coverage.
  </text>

  <!-- Stats bar -->
  <rect x="80" y="480" width="1" height="40" fill="#374151"/>

  <!-- Stat 1 -->
  <text x="100" y="498" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="28" fill="#f59e0b">44</text>
  <text x="140" y="498" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#6b7280">Data Sources</text>

  <!-- Divider -->
  <rect x="300" y="480" width="1" height="40" fill="#374151"/>

  <!-- Stat 2 -->
  <text x="320" y="498" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="28" fill="#f59e0b">84</text>
  <text x="360" y="498" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#6b7280">AI Agents</text>

  <!-- Divider -->
  <rect x="500" y="480" width="1" height="40" fill="#374151"/>

  <!-- Stat 3 -->
  <text x="520" y="498" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="28" fill="#f59e0b">48hr</text>
  <text x="600" y="498" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#6b7280">Delivery</text>

  <!-- Divider -->
  <rect x="730" y="480" width="1" height="40" fill="#374151"/>

  <!-- Stat 4 -->
  <text x="750" y="498" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="28" fill="#f59e0b">18</text>
  <text x="790" y="498" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#6b7280">Report Types</text>

  <!-- Bottom bar -->
  <rect x="0" y="570" width="${WIDTH}" height="60" fill="rgba(0,0,0,0.3)"/>
  <text x="80" y="607" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="18" fill="#9ca3af">
    pfcoconstruction.co.uk
  </text>
  <text x="1120" y="607" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="16" fill="#6b7280" text-anchor="end">
    PI Insured | Nationwide England &amp; Wales
  </text>

  <!-- Grid pattern (subtle) -->
  <line x1="900" y1="70" x2="900" y2="460" stroke="#1f2937" stroke-width="0.5" opacity="0.3"/>
  <line x1="1000" y1="70" x2="1000" y2="460" stroke="#1f2937" stroke-width="0.5" opacity="0.3"/>
  <line x1="1100" y1="70" x2="1100" y2="460" stroke="#1f2937" stroke-width="0.5" opacity="0.3"/>
  <line x1="900" y1="170" x2="1170" y2="170" stroke="#1f2937" stroke-width="0.5" opacity="0.3"/>
  <line x1="900" y1="270" x2="1170" y2="270" stroke="#1f2937" stroke-width="0.5" opacity="0.3"/>
  <line x1="900" y1="370" x2="1170" y2="370" stroke="#1f2937" stroke-width="0.5" opacity="0.3"/>

  <!-- Decorative dots on grid -->
  <circle cx="900" cy="170" r="3" fill="#f59e0b" opacity="0.6"/>
  <circle cx="1000" cy="270" r="3" fill="#f59e0b" opacity="0.4"/>
  <circle cx="1100" cy="170" r="3" fill="#f59e0b" opacity="0.3"/>
  <circle cx="1000" cy="370" r="3" fill="#f59e0b" opacity="0.5"/>
  <circle cx="1100" cy="270" r="3" fill="#f59e0b" opacity="0.4"/>
  <circle cx="900" cy="370" r="3" fill="#f59e0b" opacity="0.3"/>
</svg>`;

async function generate() {
  await sharp(Buffer.from(svg))
    .png()
    .toFile(OUTPUT);

  console.log(`OG image generated: ${OUTPUT}`);
}

generate().catch(console.error);
