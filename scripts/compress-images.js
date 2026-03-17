#!/usr/bin/env node
/**
 * Converts blog PNG images to optimised WebP format.
 * Keeps originals as backup, updates blogPosts.ts references.
 */

import sharp from 'sharp';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');
const BLOG_POSTS = join(__dirname, '..', 'src', 'data', 'blogPosts.ts');
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function compress() {
  const files = readdirSync(IMAGES_DIR).filter(
    (f) => f.startsWith('blog-') && f.endsWith('.png')
  );

  console.log(`Found ${files.length} blog PNG images to convert`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const inputPath = join(IMAGES_DIR, file);
    const outputName = file.replace('.png', '.webp');
    const outputPath = join(IMAGES_DIR, outputName);

    const inputSize = readFileSync(inputPath).length;
    totalBefore += inputSize;

    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const outputSize = readFileSync(outputPath).length;
    totalAfter += outputSize;

    const saving = Math.round((1 - outputSize / inputSize) * 100);
    console.log(
      `  ${file} → ${outputName}  (${Math.round(inputSize / 1024)}KB → ${Math.round(outputSize / 1024)}KB, -${saving}%)`
    );
  }

  console.log(
    `\nTotal: ${Math.round(totalBefore / 1024)}KB → ${Math.round(totalAfter / 1024)}KB (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`
  );

  // Update blogPosts.ts references
  let blogSrc = readFileSync(BLOG_POSTS, 'utf8');
  let replacements = 0;

  for (const file of files) {
    const pngRef = `/images/${file}`;
    const webpRef = `/images/${file.replace('.png', '.webp')}`;
    if (blogSrc.includes(pngRef)) {
      blogSrc = blogSrc.replace(pngRef, webpRef);
      replacements++;
    }
  }

  if (replacements > 0) {
    writeFileSync(BLOG_POSTS, blogSrc, 'utf8');
    console.log(`Updated ${replacements} image references in blogPosts.ts`);
  }
}

compress();
