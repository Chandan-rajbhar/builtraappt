import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout, SlideTitle, BRAND, NAVY, ROYAL, GREY, easeCurve } from '../components/shared';
import { SLIDES_DATA } from '../slidesData';

export default function Slide20({ slideIndex = 20, totalSlides = 34, onNavigate }) {
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === 20);

  if (!slideData) {
    return <div>Slide 20 not found</div>;
  }

  return (
    <SlideLayout slideNumber={slideIndex} totalSlides={totalSlides} speakerNotes={slideData.speakerNotes}>
      {/* Title */}
      <SlideTitle
        eyebrow={slideData.eyebrow}
        titleNavy={slideData.titleNavy}
        titleBrand={slideData.titleBrand}
        intro={slideData.intro}
        slideIndex={slideIndex}
      />

      {/* 4 Equal-Sized Glass Group Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${slideData.categories.length}, 1fr)`,
        gap: 18,
        flex: 1,
        alignItems: 'stretch',
        minHeight: 0,
        margin: '12px 0',
      }}>
        {slideData.categories.map((category, catIdx) => {
          const CatIcon = category.icon;
          const isDense = category.sections.length > 5;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + catIdx * 0.06, ease: easeCurve }}
              className="glass"
              style={{
                borderRadius: 22,
                padding: isDense ? '18px 16px' : '22px 18px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                background: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 8px 24px rgba(11, 31, 75, 0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: isDense ? 12 : 16,
                paddingBottom: isDense ? 10 : 14,
                borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: catIdx % 2 === 0
                    ? 'linear-gradient(135deg, rgba(239, 20, 78, 0.1) 0%, rgba(29, 78, 216, 0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(29, 78, 216, 0.1) 0%, rgba(239, 20, 78, 0.08) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {CatIcon && (
                    <CatIcon
                      size={20}
                      color={catIdx % 2 === 0 ? BRAND : ROYAL}
                      strokeWidth={2}
                    />
                  )}
                </div>
                <div style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: NAVY,
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.2,
                }}>
                  {category.title}
                </div>
              </div>

              {/* Section Chips */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isDense ? 8 : 10,
                flex: 1,
                justifyContent: 'flex-start',
              }}>
                {category.sections.map((sec) => {
                  const targetSlideNum = String(sec.slide).padStart(2, '0');
                  return (
                    <motion.div
                      key={sec.name}
                      whileHover={{ scale: 1.02, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onNavigate && onNavigate(sec.slide - 1, 1)}
                      className="glass card-interactive"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: isDense ? '8px 12px' : '10px 14px',
                        borderRadius: 12,
                        border: '1px solid rgba(226, 232, 240, 0.85)',
                        background: 'rgba(255, 255, 255, 0.92)',
                        cursor: 'pointer',
                        boxShadow: '0 1px 4px rgba(11, 31, 75, 0.02)',
                        transition: 'border-color 0.2s ease, background 0.2s ease',
                      }}
                    >
                      <span style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: NAVY,
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: 1.25,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        marginRight: 6,
                      }}>
                        {sec.name}
                      </span>
                      <span style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: BRAND,
                        fontFamily: "'Inter', sans-serif",
                        padding: '2px 8px',
                        borderRadius: 999,
                        background: 'rgba(239, 20, 78, 0.08)',
                        flexShrink: 0,
                      }}>
                        {targetSlideNum}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Hint */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        fontSize: 14,
        color: GREY,
        fontFamily: "'Inter', sans-serif",
      }}>
        <span>Click any section above to jump directly to its slide.</span>
        <span
          onClick={() => onNavigate && onNavigate(20, 1)}
          style={{ color: BRAND, fontWeight: 600, cursor: 'pointer' }}
        >
          Next: Material Request Dashboard (Slide 21) →
        </span>
      </div>
    </SlideLayout>
  );
}
