/**
 * screenshot.js — Multi-viewport Playwright screenshot helper
 *
 * Usage (CLI):
 *   node screenshot.js <url> [outputDir]
 *
 * Usage (require):
 *   const { captureScreenshots } = require('./screenshot');
 *   const results = await captureScreenshots('http://localhost:8000', './screenshots');
 *
 * The run_playwright_code agent tool can also execute this logic inline.
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const DEFAULT_VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

/**
 * Capture screenshots of a URL at one or more viewport sizes.
 *
 * @param {string} url - Target URL
 * @param {string} [outputDir='./screenshots'] - Directory to write PNG files
 * @param {Array<{name:string, width:number, height:number}>} [viewports] - Viewport list
 * @returns {Promise<Array<{viewport:string, path:string}>>}
 */
async function captureScreenshots(url, outputDir = './screenshots', viewports = DEFAULT_VIEWPORTS) {
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const results = [];

  try {
    for (const viewport of viewports) {
      const page = await browser.newPage();
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      const timestamp = Date.now();
      const filename = `${viewport.name}-${timestamp}.png`;
      const filepath = path.join(outputDir, filename);

      await page.screenshot({ path: filepath, fullPage: true });
      results.push({ viewport: viewport.name, path: filepath });

      await page.close();
    }
  } finally {
    await browser.close();
  }

  return results;
}

/**
 * Capture a single screenshot at a specific viewport.
 *
 * @param {string} url - Target URL
 * @param {string} outputPath - Full file path for the PNG
 * @param {{width:number, height:number}} [viewport] - Defaults to 1280×800
 */
async function captureSingle(url, outputPath, viewport = { width: 1280, height: 800 }) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  try {
    await page.setViewportSize(viewport);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: outputPath, fullPage: true });
  } finally {
    await browser.close();
  }

  return outputPath;
}

// CLI entry point
if (require.main === module) {
  const [, , url, outputDir] = process.argv;
  if (!url) {
    console.error('Usage: node screenshot.js <url> [outputDir]');
    process.exit(1);
  }
  captureScreenshots(url, outputDir || './screenshots')
    .then((results) => {
      console.log('Screenshots captured:');
      results.forEach((r) => console.log(`  [${r.viewport}] ${r.path}`));
    })
    .catch((err) => {
      console.error('Error:', err.message);
      process.exit(1);
    });
}

module.exports = { captureScreenshots, captureSingle, DEFAULT_VIEWPORTS };
