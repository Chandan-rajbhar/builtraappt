import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout, BRAND, NAVY, GREY, easeCurve } from '../components/shared';
import { SLIDES_DATA } from '../slidesData';
import { Sparkles, HelpCircle } from 'lucide-react';

export default function Slide20({ slideIndex = 20, totalSlides = 20, onNavigate }) {
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === 20);

  return (
    <SlideLayout
      slideNumber={slideIndex}
      totalSlides={totalSlides}
      speakerNotes={slideData.speakerNotes}
    >
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
      }}>
        {/* Large Central Brand Glow */}
        <div style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 20, 78, 0.12) 0%, rgba(29, 78, 216, 0.08) 50%, transparent 75%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }} />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeCurve }}
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: BRAND,
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif",
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Sparkles size={16} color={BRAND} />
          BUILTRAA HR MANAGEMENT
        </motion.div>

        {/* Title: "Thank you" with shine */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: easeCurve }}
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: NAVY,
            fontFamily: "'Inter', sans-serif",
            margin: '0 0 20px',
          }}
        >
          <span>Thank </span>
          <span style={{ color: BRAND }} className="shine-brand">you.</span>
        </motion.h1>

        {/* Subtitle / Line: "Questions?" */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeCurve }}
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: GREY,
            fontFamily: "'Inter', sans-serif",
            margin: '0 0 40px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <HelpCircle size={28} color={BRAND} strokeWidth={2} />
          Questions?
        </motion.p>

        {/* Glass Button to Return to Overview */}
        <motion.button
          onClick={() => onNavigate && onNavigate(1, 1)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.5, delay: 0.45, ease: easeCurve }}
          className="glass"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 28px',
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 600,
            color: NAVY,
            background: 'rgba(255, 255, 255, 0.92)',
            border: '1.5px solid rgba(226, 232, 240, 0.9)',
            boxShadow: '0 6px 20px rgba(11, 31, 75, 0.06)',
            cursor: 'pointer',
            outline: 'none',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span>← Back to Overview</span>
        </motion.button>
      </div>
    </SlideLayout>
  );
}
