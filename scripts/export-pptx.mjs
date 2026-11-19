import PptxGenJS from 'pptxgenjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Read pure slide content from src/slidesContent.json
const rawSlides = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'src', 'slidesContent.json'), 'utf8')
);

// ─── Design constants ───────────────────────────────────────────────────────
const C = {
  navy:    '0B1F4B',
  royal:   '1D4ED8',
  brand:   'EF144E', // Exact extracted dominant logo color
  grey:    '64748B',
  lightGrey: '94A3B8',
  border:  'E2E8F0',
  cardFill:'F8FAFC',
  white:   'FFFFFF',
  glassBg: 'F1F5F9',
  chipBg:  'EFF6FF',
};

const W = 13.33;  // inches (16:9 widescreen)
const H = 7.5;
const ML = 0.9;   // margin left (~96px equivalent)
const MT = 0.7;   // margin top (~110px equivalent)
const CW = W - ML * 2; // 11.53 inches content width

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE'; // 13.33" × 7.5"

// ─── Header Helper ──────────────────────────────────────────────────────────
function addSlideHeader(slide, eyebrowText, titleNavy, titleBrand, titleNavyAfter, intro) {
  // Eyebrow
  slide.addText(eyebrowText.toUpperCase(), {
    x: ML, y: MT, w: CW, h: 0.22,
    fontSize: 9.5, bold: true, color: C.brand, fontFace: 'Calibri',
  });

  // 56px (~0.6 inch) line under eyebrow
  slide.addShape(pptx.ShapeType.rect, {
    x: ML, y: MT + 0.24, w: 0.6, h: 0.025,
    fill: { color: C.brand }, line: { type: 'none' },
  });

  // Title: 24pt bold navy + brand highlight
  const titleParts = [];
  if (titleNavy) {
    titleParts.push({ text: titleNavy + ' ', options: { color: C.navy, bold: true } });
  }
  if (titleBrand) {
    titleParts.push({ text: titleBrand + (titleNavyAfter ? ' ' : ''), options: { color: C.brand, bold: true } });
  }
  if (titleNavyAfter) {
    titleParts.push({ text: titleNavyAfter, options: { color: C.navy, bold: true } });
  }

  slide.addText(titleParts, {
    x: ML, y: MT + 0.32, w: CW, h: 0.52,
    fontSize: 24, fontFace: 'Calibri',
  });

  if (intro) {
    slide.addText(intro, {
      x: ML, y: MT + 0.86, w: CW, h: 0.26,
      fontSize: 12, color: C.grey, fontFace: 'Calibri',
    });
  }
}

// ─── Slide 1: Title Slide ───────────────────────────────────────────────────
function buildSlide1(slideData) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Top 3px brand line
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: W * 0.05, h: 0.04,
    fill: { color: C.brand }, line: { type: 'none' },
  });

  // Eyebrow
  slide.addText('HR MANAGEMENT SYSTEM', {
    x: ML, y: 1.5, w: 6.5, h: 0.24,
    fontSize: 10, bold: true, color: C.brand, fontFace: 'Calibri',
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: ML, y: 1.76, w: 0.6, h: 0.025,
    fill: { color: C.brand }, line: { type: 'none' },
  });

  // Main Title: "One place for people, time and pay."
  slide.addText([
    { text: 'One place for\n', options: { color: C.navy, bold: true, fontSize: 38 } },
    { text: 'people, time\n', options: { color: C.brand, bold: true, fontSize: 38 } },
    { text: 'and pay.', options: { color: C.navy, bold: true, fontSize: 38 } },
  ], {
    x: ML, y: 2.0, w: 6.8, h: 2.3,
    fontFace: 'Calibri', lineSpacing: 42,
  });

  // Subtitle
  slide.addText(slideData.intro, {
    x: ML, y: 4.5, w: 6.5, h: 0.35,
    fontSize: 14, color: C.grey, fontFace: 'Calibri',
  });

  // "Start →" button shape
  slide.addShape(pptx.ShapeType.roundRect, {
    x: ML, y: 5.1, w: 1.8, h: 0.5, rectRadius: 0.25,
    fill: { color: C.white },
    line: { color: C.border, pt: 1 },
    shadow: { type: 'outer', blur: 6, offset: 3, angle: 90, color: '0B1F4B', opacity: 0.06 },
  });
  slide.addText('Start  →', {
    x: ML, y: 5.1, w: 1.8, h: 0.5,
    fontSize: 13, bold: true, color: C.navy, fontFace: 'Calibri', align: 'center',
  });

  // Right Side: Floating Cluster of 5 Icon Tiles
  const rightBoxX = 7.8;
  const tiles = [
    { x: rightBoxX + 0.4, y: 1.8, w: 1.5, h: 1.5, label: 'People', color: C.brand },
    { x: rightBoxX + 2.5, y: 1.5, w: 1.4, h: 1.4, label: 'Leave', color: C.royal },
    { x: rightBoxX + 1.6, y: 3.1, w: 1.6, h: 1.6, label: 'Time', color: C.royal },
    { x: rightBoxX + 0.3, y: 4.4, w: 1.5, h: 1.5, label: 'Money', color: C.brand },
    { x: rightBoxX + 2.4, y: 4.3, w: 1.4, h: 1.4, label: 'Records', color: C.royal },
  ];

  tiles.forEach((t) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: t.x, y: t.y, w: t.w, h: t.h, rectRadius: 0.2,
      fill: { color: C.white },
      line: { color: C.border, pt: 1 },
      shadow: { type: 'outer', blur: 8, offset: 4, angle: 90, color: '0B1F4B', opacity: 0.07 },
    });
    slide.addText(t.label, {
      x: t.x, y: t.y + 0.45, w: t.w, h: 0.5,
      fontSize: 13, bold: true, color: t.color, fontFace: 'Calibri', align: 'center',
    });
  });

  // Bottom Ticker / Marquee row representation (17 section chips)
  slide.addShape(pptx.ShapeType.line, {
    x: ML, y: 6.35, w: CW, h: 0,
    line: { color: C.border, pt: 0.75 },
  });
  const modules = rawSlides.filter((s) => s.type === 'module');
  const chipW = 1.35;
  const chipH = 0.32;
  const maxDisplay = 8;
  for (let i = 0; i < maxDisplay; i++) {
    const mod = modules[i];
    const cx = ML + i * (chipW + 0.1);
    slide.addShape(pptx.ShapeType.roundRect, {
      x: cx, y: 6.5, w: chipW, h: chipH, rectRadius: 0.16,
      fill: { color: C.white }, line: { color: C.border, pt: 0.5 },
    });
    slide.addText(`${String(mod.slideNumber).padStart(2, '0')} ${mod.sectionName}`, {
      x: cx, y: 6.5, w: chipW, h: chipH,
      fontSize: 8.5, bold: true, color: C.navy, fontFace: 'Calibri', align: 'center',
    });
  }

  // Speaker notes
  if (slideData.speakerNotes) {
    slide.addNotes(slideData.speakerNotes);
  }
}

// ─── Slide 2: What is inside ────────────────────────────────────────────────
function buildSlide2(slideData) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  addSlideHeader(slide, slideData.eyebrow, slideData.titleNavy, slideData.titleBrand, slideData.titleNavyAfter, slideData.intro);

  const cardW = 2.65;
  const cardH = 4.8;
  const gap = 0.31;
  const startY = 1.95;

  slideData.categories.forEach((cat, idx) => {
    const cx = ML + idx * (cardW + gap);

    // Group Card
    slide.addShape(pptx.ShapeType.roundRect, {
      x: cx, y: startY, w: cardW, h: cardH, rectRadius: 0.18,
      fill: { color: C.white },
      line: { color: C.border, pt: 1 },
      shadow: { type: 'outer', blur: 8, offset: 4, angle: 90, color: '0B1F4B', opacity: 0.05 },
    });

    // Category Header
    slide.addText(cat.title, {
      x: cx + 0.2, y: startY + 0.22, w: cardW - 0.4, h: 0.35,
      fontSize: 14, bold: true, color: C.navy, fontFace: 'Calibri',
    });
    slide.addShape(pptx.ShapeType.line, {
      x: cx + 0.2, y: startY + 0.62, w: cardW - 0.4, h: 0,
      line: { color: C.border, pt: 0.75 },
    });

    // Section Chips
    cat.sections.forEach((sec, sIdx) => {
      const sy = startY + 0.8 + sIdx * 0.72;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: cx + 0.16, y: sy, w: cardW - 0.32, h: 0.58, rectRadius: 0.12,
        fill: { color: C.cardFill },
        line: { color: C.border, pt: 0.5 },
      });

      slide.addText(sec.name, {
        x: cx + 0.26, y: sy + 0.12, w: cardW - 1.0, h: 0.34,
        fontSize: 10.5, bold: true, color: C.navy, fontFace: 'Calibri',
      });

      slide.addText(String(sec.slide).padStart(2, '0'), {
        x: cx + cardW - 0.75, y: sy + 0.12, w: 0.45, h: 0.34,
        fontSize: 10, bold: true, color: C.brand, fontFace: 'Calibri', align: 'right',
      });
    });
  });

  if (slideData.speakerNotes) {
    slide.addNotes(slideData.speakerNotes);
  }
}

// ─── Slides 3 to 19: Module Slides ──────────────────────────────────────────
function buildModuleSlide(slideData) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Header
  addSlideHeader(slide, slideData.eyebrow, slideData.titleNavy, slideData.titleBrand, slideData.titleNavyAfter, slideData.intro);

  const contentY = 2.0;
  const leftW = 5.2;
  const rightW = 5.9;
  const gap = 0.43;
  const rightX = ML + leftW + gap;

  // Left Column: 3 Feature Cards
  const cardH = 1.35;
  const cardGap = 0.22;

  slideData.cards.forEach((card, idx) => {
    const cy = contentY + idx * (cardH + cardGap);

    // Card background
    slide.addShape(pptx.ShapeType.roundRect, {
      x: ML, y: cy, w: leftW, h: cardH, rectRadius: 0.15,
      fill: { color: C.white },
      line: { color: C.border, pt: 0.75 },
      shadow: { type: 'outer', blur: 6, offset: 3, angle: 90, color: '0B1F4B', opacity: 0.04 },
    });

    // Left 3px brand line
    slide.addShape(pptx.ShapeType.rect, {
      x: ML, y: cy, w: 0.04, h: cardH,
      fill: { color: C.brand }, line: { type: 'none' },
    });

    // Card number top-right
    slide.addText(card.number, {
      x: ML + leftW - 0.7, y: cy + 0.14, w: 0.5, h: 0.25,
      fontSize: 10, bold: true, color: C.lightGrey, fontFace: 'Calibri', align: 'right',
    });

    // Card Title (Max 3 words, bold navy)
    slide.addText(card.title, {
      x: ML + 0.25, y: cy + 0.14, w: leftW - 1.1, h: 0.32,
      fontSize: 13, bold: true, color: C.navy, fontFace: 'Calibri',
    });

    // Card Text (Max 12 words, grey)
    slide.addText(card.text, {
      x: ML + 0.25, y: cy + 0.52, w: leftW - 0.5, h: 0.68,
      fontSize: 11, color: C.grey, fontFace: 'Calibri', lineSpacing: 16,
    });
  });

  // Right Column: "How it works" Panel
  const panelH = cardH * 3 + cardGap * 2; // 4.49 inches

  slide.addShape(pptx.ShapeType.roundRect, {
    x: rightX, y: contentY, w: rightW, h: panelH, rectRadius: 0.18,
    fill: { color: C.white },
    line: { color: C.border, pt: 1 },
    shadow: { type: 'outer', blur: 10, offset: 4, angle: 90, color: '0B1F4B', opacity: 0.06 },
  });

  // Panel Header
  slide.addText('STEP-BY-STEP', {
    x: rightX + 0.35, y: contentY + 0.22, w: 3.5, h: 0.22,
    fontSize: 9, bold: true, color: C.brand, fontFace: 'Calibri',
  });
  slide.addText('How it works', {
    x: rightX + 0.35, y: contentY + 0.44, w: 3.5, h: 0.38,
    fontSize: 16, bold: true, color: C.navy, fontFace: 'Calibri',
  });

  // Connecting vertical line
  const stepCount = slideData.steps.length;
  const stepStartY = contentY + 1.1;
  const stepTotalHeight = panelH - 1.4;
  const stepGap = stepTotalHeight / Math.max(1, stepCount - 1);

  slide.addShape(pptx.ShapeType.rect, {
    x: rightX + 0.58, y: stepStartY + 0.15, w: 0.025, h: (stepCount - 1) * stepGap,
    fill: { color: C.border }, line: { type: 'none' },
  });

  // Step Items
  slideData.steps.forEach((step, idx) => {
    const sy = stepStartY + idx * stepGap;

    // Number circle badge
    slide.addShape(pptx.ShapeType.ellipse, {
      x: rightX + 0.42, y: sy, w: 0.34, h: 0.34,
      fill: { color: idx === 0 ? C.brand : C.white },
      line: { color: idx === 0 ? C.brand : C.border, pt: 1.5 },
    });
    slide.addText(String(idx + 1), {
      x: rightX + 0.42, y: sy, w: 0.34, h: 0.34,
      fontSize: 10.5, bold: true, color: idx === 0 ? C.white : C.navy,
      fontFace: 'Calibri', align: 'center', valign: 'middle',
    });

    // Step text
    slide.addText(step, {
      x: rightX + 0.92, y: sy - 0.02, w: rightW - 1.2, h: 0.38,
      fontSize: 12, bold: true, color: C.navy, fontFace: 'Calibri', valign: 'middle',
    });
  });

  // Bottom: "Why it helps" One-Line Strip (Max 14 words)
  const stripY = contentY + panelH + 0.22;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: ML, y: stripY, w: CW, h: 0.44, rectRadius: 0.12,
    fill: { color: C.cardFill },
    line: { color: C.border, pt: 0.75 },
  });

  slide.addText([
    { text: 'WHY IT HELPS:  ', options: { color: C.brand, bold: true, fontSize: 9.5 } },
    { text: slideData.whyItHelps, options: { color: C.navy, bold: false, fontSize: 11.5 } },
  ], {
    x: ML + 0.2, y: stripY, w: CW - 0.4, h: 0.44,
    fontFace: 'Calibri', valign: 'middle',
  });

  // Speaker notes
  if (slideData.speakerNotes) {
    slide.addNotes(slideData.speakerNotes);
  }
}

// ─── Slide 20: Closing Slide ────────────────────────────────────────────────
function buildSlide20(slideData) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Center Glow effect
  slide.addShape(pptx.ShapeType.ellipse, {
    x: W / 2 - 2.5, y: H / 2 - 2.5, w: 5.0, h: 5.0,
    fill: { color: 'FEE2E2' }, line: { type: 'none' },
  });

  // Eyebrow
  slide.addText('BUILTRAA HR MANAGEMENT', {
    x: ML, y: 2.2, w: CW, h: 0.3,
    fontSize: 11, bold: true, color: C.brand, fontFace: 'Calibri', align: 'center',
  });

  // Title: "Thank you."
  slide.addText([
    { text: 'Thank ', options: { color: C.navy, bold: true, fontSize: 48 } },
    { text: 'you.', options: { color: C.brand, bold: true, fontSize: 48 } },
  ], {
    x: ML, y: 2.7, w: CW, h: 1.0,
    fontFace: 'Calibri', align: 'center',
  });

  // Subtitle: "Questions?"
  slide.addText('Questions?', {
    x: ML, y: 3.8, w: CW, h: 0.6,
    fontSize: 22, color: C.grey, fontFace: 'Calibri', align: 'center',
  });

  if (slideData.speakerNotes) {
    slide.addNotes(slideData.speakerNotes);
  }
}

// ─── Build All 20 Slides ────────────────────────────────────────────────────
console.log(`Generating ${rawSlides.length}-slide PPTX deck with pure plain text, zero screenshots/images, and presenter notes...`);

for (const slideData of rawSlides) {
  if (slideData.type === 'title' || slideData.type === 'welcome') {
    buildSlide1(slideData);
  } else if (slideData.type === 'overview' || slideData.type === 'mm-overview') {
    buildSlide2(slideData);
  } else if (slideData.type === 'module') {
    buildModuleSlide(slideData);
  } else if (slideData.type === 'closing' || slideData.type === 'thankyou') {
    buildSlide20(slideData);
  }
}

// Ensure exports directory exists
const exportDir = path.join(ROOT, 'exports');
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

const outputPath = path.join(exportDir, 'Builtraa_HR_Management_v3.pptx');
await pptx.writeFile({ fileName: outputPath });

console.log(`PPTX exported successfully to: ${outputPath}`);
