import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MM_DIR = path.resolve(__dirname, '../public/assets/mm');
if (!fs.existsSync(MM_DIR)) fs.mkdirSync(MM_DIR, { recursive: true });

const compositePath = 'C:/Users/UXDLab/.gemini/antigravity/brain/e31c7c2f-638b-42a6-8937-a2abcddca974/.user_uploaded/media_1795001618038_6f0e655d.jpg';
const dataUrl = 'data:image/jpeg;base64,' + fs.readFileSync(compositePath).toString('base64');

const procQueuePath = 'C:/Users/UXDLab/.gemini/antigravity/brain/e31c7c2f-638b-42a6-8937-a2abcddca974/.user_uploaded/media_1795001612598_9836dff4.jpg';
const procQueueDataUrl = 'data:image/jpeg;base64,' + fs.readFileSync(procQueuePath).toString('base64');

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage();

await page.setContent(`
  <html><body style="margin:0; background:#fff;">
    <img id="composite" src="${dataUrl}" />
    <img id="procqueue" src="${procQueueDataUrl}" />
    <canvas id="c" width="1908" height="493"></canvas>
  </body></html>
`);
await page.waitForTimeout(300);

// Coordinates for the 13 sub-modules inside the composite image (1024x970)
// 3 columns:
// Col 0: x ≈ 12, w ≈ 320
// Col 1: x ≈ 348, w ≈ 320
// Col 2: x ≈ 686, w ≈ 320
// 5 rows:
// Row 0: y ≈ 33, h ≈ 83 (for 1908x493 aspect ratio, w: 320 -> h: 320 * 493 / 1908 = 82.68)
// Row 1: y ≈ 225, h ≈ 83
// Row 2: y ≈ 417, h ≈ 83
// Row 3: y ≈ 609, h ≈ 83
// Row 4: y ≈ 801, h ≈ 83

const items = [
  { name: '01-dashboard.png', col: 0, row: 0 },
  { name: '02-procurement-queue.png', useProcQueue: true },
  { name: '03-rfq-quotations.png', col: 2, row: 0 },
  { name: '04-purchase-orders.png', col: 0, row: 1 },
  { name: '05-deliveries.png', col: 1, row: 1 },
  { name: '06-material-master.png', col: 2, row: 1 },
  { name: '07-receipts-grn.png', col: 0, row: 2 },
  { name: '08-inventory.png', col: 1, row: 2 },
  { name: '09-accounts-bills.png', col: 2, row: 2 },
  { name: '10-vendors.png', col: 0, row: 3 },
  { name: '11-asset-list.png', col: 1, row: 3 },
  { name: '12-operational-assets-request.png', col: 2, row: 3 },
  { name: '13-operational-assets-inventory.png', col: 0, row: 4 },
];

const colX = [12, 348, 686];
const rowY = [33, 225, 417, 609, 801];
const cropW = 320;
const cropH = Math.round(320 * 493 / 1908); // 83px

for (const item of items) {
  await page.evaluate(({ item, colX, rowY, cropW, cropH }) => {
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    if (item.useProcQueue) {
      const img = document.getElementById('procqueue');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } else {
      const img = document.getElementById('composite');
      const sx = colX[item.col];
      const sy = rowY[item.row];
      ctx.drawImage(img, sx, sy, cropW, cropH, 0, 0, canvas.width, canvas.height);
    }
  }, { item, colX, rowY, cropW, cropH });

  const cHandle = await page.$('#c');
  const outPath = path.join(MM_DIR, item.name);
  await cHandle.screenshot({ path: outPath });
  console.log('✅ Generated', item.name, '->', outPath);
}

await browser.close();
console.log('All 13 images generated successfully in', MM_DIR);
