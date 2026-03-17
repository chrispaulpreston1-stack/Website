#!/usr/bin/env node
/**
 * Post-build prerenderer for PF & Co SPA
 *
 * Runs AFTER generate-seo-pages.js in the build pipeline.
 * Visits every route with Puppeteer, captures the fully-rendered React HTML,
 * and injects it into the static files so crawlers see real content.
 *
 * Build order:  vite build → generate-seo-pages.js → prerender.js
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 45678;

// ── Discover routes from dist directory ─────────────────────────────────────
// Finds every index.html created by generate-seo-pages.js

function discoverRoutes(dir, base = '') {
  const routes = [];
  try {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      // Skip build artefact dirs
      if (['assets', 'api', 'node_modules', '.git'].includes(entry.name)) continue;
      if (!entry.isDirectory()) continue;

      const subPath = `${base}/${entry.name}`;
      if (existsSync(join(dir, entry.name, 'index.html'))) {
        routes.push(subPath);
      }
      routes.push(...discoverRoutes(join(dir, entry.name), subPath));
    }
  } catch { /* empty dir */ }
  return routes;
}

// ── Simple static file server ───────────────────────────────────────────────

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
      const filePath = join(DIST, decodeURIComponent(url.pathname));

      // Exact file
      if (existsSync(filePath) && statSync(filePath).isFile()) {
        res.setHeader('Content-Type', MIME[extname(filePath)] || 'application/octet-stream');
        res.end(readFileSync(filePath));
        return;
      }

      // Directory → index.html
      const indexPath = join(filePath, 'index.html');
      if (existsSync(indexPath) && statSync(indexPath).isFile()) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(readFileSync(indexPath));
        return;
      }

      // SPA fallback
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(readFileSync(join(DIST, 'index.html')));
    });

    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

// ── Main ────────────────────────────────────────────────────────────────────

async function prerender() {
  if (!existsSync(join(DIST, 'index.html'))) {
    console.error('Prerender: dist/index.html not found — run "vite build" first');
    process.exit(1);
  }

  // Dynamically import puppeteer so the script fails gracefully if not installed
  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch {
    console.warn('Prerender: puppeteer not available — skipping prerender step');
    return;
  }

  const routes = ['/', ...discoverRoutes(DIST)];
  console.log(`Prerender: Found ${routes.length} routes to process`);

  const server = await startServer();
  console.log(`Prerender: Static server on http://127.0.0.1:${PORT}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
  } catch (err) {
    console.warn(`Prerender: Could not launch browser — skipping (${err.message})`);
    console.warn('Prerender: Site will still work as SPA; pre-rendered HTML not available for this build.');
    server.close();
    return;
  }

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const page = await browser.newPage();

      // Block heavy resources we don't need for HTML capture
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const url = req.url();
        const type = req.resourceType();

        // Block images, fonts, media, and external scripts (analytics, widgets)
        if (['image', 'font', 'media'].includes(type)) {
          req.abort();
          return;
        }
        if (type === 'script' && !url.includes('127.0.0.1')) {
          req.abort();
          return;
        }
        req.continue();
      });

      await page.goto(`http://127.0.0.1:${PORT}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 15000,
      });

      // Wait for React to render content into #root
      await page.waitForFunction(
        () => {
          const root = document.querySelector('#root');
          return root && root.children.length > 0;
        },
        { timeout: 10000 }
      );

      // Small extra wait for any setState flushes
      await page.evaluate(() => new Promise((r) => setTimeout(r, 300)));

      // Capture rendered HTML inside #root
      const rootContent = await page.$eval('#root', (el) => el.innerHTML);

      // Determine file path
      const htmlPath =
        route === '/'
          ? join(DIST, 'index.html')
          : join(DIST, route, 'index.html');

      let html = readFileSync(htmlPath, 'utf8');

      // Inject rendered content — replace empty root OR previously rendered root
      html = html.replace(
        /<div id="root">.*?<\/div>/s,
        `<div id="root">${rootContent}</div>`
      );

      writeFileSync(htmlPath, html, 'utf8');
      success++;
      console.log(`  OK  ${route}`);

      await page.close();
    } catch (err) {
      failed++;
      console.error(`  FAIL  ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(
    `\nPrerender: ${success} succeeded, ${failed} failed (${routes.length} total)`
  );

  if (failed > 0) {
    console.warn('Prerender: Some routes failed but build will continue.');
  }
}

prerender();
