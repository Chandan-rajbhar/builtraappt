import { chromium } from 'playwright';
import path from 'path';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Take screenshot of Slide 1
  await page.screenshot({ path: 'public/assets/slide1-preview.png', clip: { x: 0, y: 0, width: 1920, height: 1080 } });
  console.log('Saved slide1-preview.png');
  await browser.close();
}

main().catch(console.error);
