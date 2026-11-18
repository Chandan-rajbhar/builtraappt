import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = 'C:/Users/user/.gemini/antigravity/brain/be91f563-78a4-4dfd-8cbd-571f6ade3939/.user_uploaded/media_1794983072430_3965ffa4.jpg';
const outputPath = path.resolve(__dirname, '../public/assets/payroll-settings.png');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1920, height: 1080 });

await page.setContent(`
  <html>
    <body style="margin:0; background:#fff;">
      <canvas id="c"></canvas>
      <img id="img" src="file:///${inputPath.replace(/\\/g, '/')}" />
    </body>
  </html>
`);

await page.waitForTimeout(500);

await page.evaluate(() => {
  const img = document.getElementById('img');
  const canvas = document.getElementById('c');
  // Original is 1920x1080 (full desktop screen)
  // Crop out top browser tabs/url bar (about 75px)
  // Crop out bottom Windows taskbar (about 45px)
  const topCrop = 78;
  const bottomCrop = 45;
  const cropW = img.naturalWidth;
  const cropH = img.naturalHeight - topCrop - bottomCrop;

  canvas.width = cropW;
  canvas.height = cropH;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, topCrop, cropW, cropH, 0, 0, cropW, cropH);
});

const canvasHandle = await page.$('#c');
await canvasHandle.screenshot({ path: outputPath });
console.log('✅ Cropped payroll-settings.png written cleanly to', outputPath);
await browser.close();
