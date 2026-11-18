import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoPath = path.resolve(__dirname, '../public/assets/logo.png');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:5173');

const dominantColor = await page.evaluate(async () => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = '/assets/logo.png';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Sample left red area (x: 10 to width * 0.28, all y)
      const w = Math.floor(img.naturalWidth * 0.28);
      const h = img.naturalHeight;
      const data = ctx.getImageData(0, 0, w, h).data;
      const counts = {};

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
        // Filter for the vibrant red-pink background
        if (a > 200 && r > 180 && g < 50) {
          const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
          counts[hex] = (counts[hex] || 0) + 1;
        }
      }
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      resolve(sorted[0]);
    };
  });
});

console.log('DOMINANT_COLOR:', dominantColor);
await browser.close();
