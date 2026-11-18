import React from 'react';
import { motion } from 'framer-motion';

// ─── Design Tokens ────────────────────────────────────────────────────────────
export const BRAND = '#EF144E'; // Extracted logo dominant color
export const NAVY = '#0B1F4B';
export const ROYAL = '#1D4ED8';
export const GREY = '#64748B';
export const BORDER = '#E2E8F0';

export const easeCurve = [0.22, 1, 0.36, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: custom * 0.08, ease: easeCurve },
  }),
};

// ─── SlideLayout (Strict Safe Zones: Top 110px, Bottom 110px, Content 840px) ───
export function SlideLayout({
  children,
  slideNumber = 1,
  totalSlides = 20,
  speakerNotes = '',
}) {
  const progressPct = ((slideNumber - 1) / Math.max(1, totalSlides - 1)) * 100;

  return (
    <div
      className="slide-stage"
      style={{
        width: 1920,
        height: 1080,
        position: 'relative',
        overflow: 'hidden',
        background: '#FFFFFF',
      }}
    >
      {/* 3px Top Brand Progress Line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'rgba(11, 31, 75, 0.06)', zIndex: 300,
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.5, ease: easeCurve }}
          style={{ height: '100%', background: BRAND }}
        />
      </div>

      {/* 2–3 Soft Ambient Background Glows (Calm, subtle, 6–10% opacity, ~400px blur) */}
      <div style={{
        position: 'absolute', top: '8%', right: '6%',
        width: 520, height: 520, borderRadius: '50%',
        background: 'rgba(29, 78, 216, 0.06)',
        filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '8%',
        width: 480, height: 480, borderRadius: '50%',
        background: 'rgba(239, 20, 78, 0.05)',
        filter: 'blur(130px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: '35%', left: '42%',
        width: 440, height: 440, borderRadius: '50%',
        background: 'rgba(219, 234, 254, 0.35)',
        filter: 'blur(140px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Main Content Area (Strict Safe Zone: y = 130px to y = 970px, Height = 840px, Margins = 96px) */}
      <div style={{
        position: 'absolute',
        top: 130,
        left: 96,
        right: 96,
        height: 840,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {children}
      </div>
    </div>
  );
}

// ─── SlideTitle Component (Eyebrow + Line + Word-by-Word Title + Sweep) ───────
export function SlideTitle({
  eyebrow,
  titleNavy,
  titleBrand = '',
  titleNavyAfter = '',
  intro,
  slideIndex = 3,
}) {
  const eyebrowText = eyebrow || `${String(slideIndex).padStart(2, '0')} / SECTION`;

  const navyWords = titleNavy ? titleNavy.split(' ') : [];
  const brandWords = titleBrand ? titleBrand.split(' ') : [];
  const navyAfterWords = titleNavyAfter ? titleNavyAfter.split(' ') : [];

  return (
    <div style={{ marginBottom: 16 }}>
      {/* Eyebrow: NN / MODULE NAME */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeCurve }}
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: BRAND,
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {eyebrowText}
        </motion.div>
        {/* 56px × 2px brand-colour line drawing left to right */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 56 }}
          transition={{ duration: 0.45, delay: 0.1, ease: easeCurve }}
          style={{ height: 2, background: BRAND, borderRadius: 1 }}
        />
      </div>

      {/* Title: 64px, weight 800, tight */}
      <h1
        style={{
          fontSize: 58,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          color: NAVY,
          margin: 0,
          fontFamily: "'Inter', sans-serif",
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          columnGap: 14,
          rowGap: 4,
        }}
      >
        {navyWords.map((word, i) => (
          <motion.span
            key={`n1-${i}`}
            className="shine"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.06, ease: easeCurve }}
          >
            {word}
          </motion.span>
        ))}

        {brandWords.length > 0 && brandWords.map((word, i) => (
          <motion.span
            key={`b-${i}`}
            className="shine-brand"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 + (navyWords.length + i) * 0.06, ease: easeCurve }}
            style={{ color: BRAND }}
          >
            {word}
          </motion.span>
        ))}

        {navyAfterWords.map((word, i) => (
          <motion.span
            key={`n2-${i}`}
            className="shine"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 + (navyWords.length + brandWords.length + i) * 0.06, ease: easeCurve }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Intro: 22px, weight 400, grey, one line */}
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: easeCurve }}
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: GREY,
            margin: '8px 0 0',
            lineHeight: 1.4,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}

// ─── Client Feature Card (3 Cards on Left) ────────────────────────────────────
// Rule: Card title max 3 words. Card text max 12 words. Max height 170px.
export function ClientFeatureCard({
  icon: Icon,
  number = '01',
  title,
  text,
  delay = 0,
}) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="glass card-interactive"
      style={{
        position: 'relative',
        borderRadius: 24,
        padding: '22px 24px',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        background: 'rgba(255, 255, 255, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxHeight: 170,
        boxShadow: '0 6px 24px rgba(11, 31, 75, 0.05)',
        overflow: 'hidden',
      }}
    >
      {/* 3px brand-colour line on the left edge that grows top to bottom */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.45, delay: delay * 0.08 + 0.12, ease: easeCurve }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 3.5,
          background: BRAND,
          transformOrigin: 'top',
        }}
      />

      {/* Card Header: Icon chip (left) + Number (right) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        {Icon && (
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: 'linear-gradient(135deg, rgba(239, 20, 78, 0.08) 0%, rgba(29, 78, 216, 0.08) 100%)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Icon size={20} color={ROYAL} strokeWidth={1.75} />
          </div>
        )}

        <span style={{
          fontSize: 13,
          fontWeight: 700,
          color: '#94A3B8',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '0.05em',
        }}>
          {number}
        </span>
      </div>

      {/* Card Title (Max 3 words, 20px bold navy) */}
      <div style={{
        fontSize: 20,
        fontWeight: 700,
        color: NAVY,
        lineHeight: 1.25,
        marginBottom: 4,
        fontFamily: "'Inter', sans-serif",
      }}>
        {title}
      </div>

      {/* Card Text (Max 12 words, 16px grey) */}
      <div style={{
        fontSize: 16,
        fontWeight: 400,
        color: GREY,
        lineHeight: 1.45,
        fontFamily: "'Inter', sans-serif",
      }}>
        {text}
      </div>
    </motion.div>
  );
}

// ─── "How it works" Panel (Right Side: Vertical 3–4 Step List with Connecting Line) ───
// Rule: Vertical step list with numbered circles and connecting line. Soft large line icon at top.
export function HowItWorksPanel({
  icon: ModuleIcon,
  steps = [],
  delay = 0.4,
}) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="glass"
      style={{
        borderRadius: 24,
        padding: '32px 36px',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        background: 'rgba(255, 255, 255, 0.82)',
        boxShadow: '0 12px 32px rgba(11, 31, 75, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Header: Soft Module Icon + "How it works" title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <div style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: BRAND,
            textTransform: 'uppercase',
            marginBottom: 4,
            fontFamily: "'Inter', sans-serif",
          }}>
            STEP-BY-STEP
          </div>
          <div style={{
            fontSize: 24,
            fontWeight: 800,
            color: NAVY,
            fontFamily: "'Inter', sans-serif",
          }}>
            How it works
          </div>
        </div>

        {ModuleIcon && (
          <div style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: 'linear-gradient(135deg, rgba(239, 20, 78, 0.08) 0%, rgba(29, 78, 216, 0.08) 100%)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ModuleIcon size={28} color={BRAND} strokeWidth={1.75} />
          </div>
        )}
      </div>

      {/* Vertical Steps with Connecting Line */}
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', flex: 1, justifyContent: 'space-around' }}>
        {/* Connecting vertical line */}
        <div style={{
          position: 'absolute',
          top: 24,
          bottom: 24,
          left: 19,
          width: 2,
          background: 'rgba(226, 232, 240, 0.9)',
          zIndex: 1,
        }}>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.8, delay: delay + 0.2, ease: easeCurve }}
            style={{ width: '100%', background: `linear-gradient(to bottom, ${BRAND}, ${ROYAL})` }}
          />
        </div>

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: delay + 0.15 + idx * 0.1, ease: easeCurve }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Numbered circle badge */}
            <div style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: idx === 0 ? BRAND : '#FFFFFF',
              color: idx === 0 ? '#FFFFFF' : NAVY,
              border: idx === 0 ? `2px solid ${BRAND}` : '2px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(11, 31, 75, 0.06)',
            }}>
              {idx + 1}
            </div>

            {/* Step text (Plain language) */}
            <div style={{
              fontSize: 18,
              fontWeight: 600,
              color: NAVY,
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.35,
            }}>
              {step}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── "Why it helps" One-Line Bottom Strip (Max 14 words) ──────────────────────
export function WhyItHelpsStrip({ text, nextSlide, onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6, ease: easeCurve }}
      className="glass"
      style={{
        padding: '12px 24px',
        borderRadius: 16,
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 18,
        boxShadow: '0 2px 10px rgba(11, 31, 75, 0.03)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{
          fontSize: 13,
          fontWeight: 700,
          color: BRAND,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontFamily: "'Inter', sans-serif",
          whiteSpace: 'nowrap',
        }}>
          Why it helps:
        </span>
        <span style={{
          fontSize: 17,
          fontWeight: 500,
          color: NAVY,
          fontFamily: "'Inter', sans-serif",
        }}>
          {text}
        </span>
      </div>

      {nextSlide && (
        <motion.span
          whileHover={{ scale: 1.04, x: 2 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onNavigate && onNavigate(nextSlide.index !== undefined ? nextSlide.index : (nextSlide.number - 1), 1)}
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: BRAND,
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(239, 20, 78, 0.08)',
            padding: '4px 14px',
            borderRadius: 999,
            border: '1px solid rgba(239, 20, 78, 0.15)',
            whiteSpace: 'nowrap',
          }}
        >
          Next: {nextSlide.title} (Slide {String(nextSlide.number).padStart(2, '0')}) →
        </motion.span>
      )}
    </motion.div>
  );
}
