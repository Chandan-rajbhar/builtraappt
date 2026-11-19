import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout, BRAND, NAVY, GREY, easeCurve } from '../components/shared';
import { SLIDES_DATA } from '../slidesData';
import { Sparkles } from 'lucide-react';

export default function Slide20({ slideIndex = 20, totalSlides = 20, onNavigate }) {
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === 20) || {
    eyebrow: 'BUILTRAA - ENTERPRISE MANAGEMENT SYSTEM',
    titleNavy: 'THANK',
    titleBrand: 'YOU.',
    description: 'Building smarter workflows. Connecting people, materials and projects.',
    tagline: 'Simplify. Manage. Deliver.',
    speakerNotes: 'Thank you for exploring Builtraa’s three enterprise ecosystems. We are ready to answer your questions.'
  };

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
          width: 540,
          height: 540,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 20, 78, 0.12) 0%, rgba(29, 78, 216, 0.08) 50%, transparent 75%)',
          filter: 'blur(60px)',
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
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Sparkles size={16} color={BRAND} />
          {slideData.eyebrow || 'BUILTRAA - ENTERPRISE MANAGEMENT SYSTEM'}
        </motion.div>

        {/* Title: "THANK YOU." with two-tone shine */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: easeCurve }}
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: NAVY,
            fontFamily: "'Inter', sans-serif",
            margin: '0 0 20px',
          }}
        >
          <span>{slideData.titleNavy || 'THANK'} </span>
          <span style={{ color: BRAND }} className="shine-brand">
            {slideData.titleBrand || 'YOU.'}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeCurve }}
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: NAVY,
            fontFamily: "'Inter', sans-serif",
            margin: '0 0 12px',
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          {slideData.description || 'Building smarter workflows. Connecting people, materials and projects.'}
        </motion.p>

        {/* Tagline: Simplify. Manage. Deliver. */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: easeCurve }}
          style={{
            fontSize: 19,
            fontWeight: 600,
            color: GREY,
            fontFamily: "'Inter', sans-serif",
            margin: '0 0 44px',
            letterSpacing: '0.04em',
          }}
        >
          {slideData.tagline || 'Simplify. Manage. Deliver.'}
        </motion.p>

        {/* Glass Button "← Back to Welcome" */}
        <motion.button
          onClick={() => onNavigate && onNavigate(0, -1)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.5, delay: 0.5, ease: easeCurve }}
          className="glass"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '14px 34px',
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 700,
            color: NAVY,
            background: 'rgba(255, 255, 255, 0.92)',
            border: '1.5px solid rgba(226, 232, 240, 0.9)',
            boxShadow: '0 8px 24px rgba(11, 31, 75, 0.08), inset 0 1px 0 #FFFFFF',
            cursor: 'pointer',
            outline: 'none',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span>← Back to Welcome</span>
        </motion.button>
      </div>
    </SlideLayout>
  );
}
