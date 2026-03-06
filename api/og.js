/**
 * Dynamic OG Image Generator (Vercel Edge Function)
 *
 * Generates branded social preview images for each page.
 * Uses SVG-to-PNG conversion via the ImageResponse API.
 *
 * Usage: /api/og?title=Your+Title&subtitle=Your+Subtitle
 */

export const config = { runtime: 'edge' };

const BRAND_PRIMARY = '#0a0a0a';
const BRAND_ACCENT = '#f59e0b';

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'PF & Co Construction';
  const subtitle = searchParams.get('subtitle') || 'AI-Powered Structural Engineering & Site Intelligence';

  // Use SVG rendered as HTML — Vercel Edge can convert to PNG via ImageResponse
  // But since @vercel/og may not be installed, we serve an SVG directly
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND_PRIMARY}"/>
      <stop offset="100%" stop-color="#1a1a2e"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${BRAND_ACCENT}"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)"/>
  <rect x="80" y="520" width="120" height="4" rx="2" fill="${BRAND_ACCENT}"/>
  <text x="80" y="280" fill="white" font-family="system-ui,-apple-system,sans-serif" font-size="52" font-weight="bold">
    ${escapeXml(truncate(title, 45))}
  </text>
  ${title.length > 45 ? `<text x="80" y="340" fill="white" font-family="system-ui,-apple-system,sans-serif" font-size="52" font-weight="bold">${escapeXml(title.slice(45, 90))}</text>` : ''}
  <text x="80" y="${title.length > 45 ? 400 : 340}" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif" font-size="26">
    ${escapeXml(truncate(subtitle, 70))}
  </text>
  <text x="80" y="560" fill="${BRAND_ACCENT}" font-family="system-ui,-apple-system,sans-serif" font-size="22" font-weight="bold">
    PF &amp; Co Construction
  </text>
  <text x="80" y="590" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif" font-size="18">
    pfcoconstruction.co.uk
  </text>
  <text x="1120" y="590" fill="#4b5563" font-family="system-ui,-apple-system,sans-serif" font-size="16" text-anchor="end">
    44 Data Sources | 84 AI Agents | 48hr Delivery
  </text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) : str;
}
