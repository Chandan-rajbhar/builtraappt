import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout, SlideTitle, BRAND, NAVY, ROYAL, GREY, easeCurve } from '../components/shared';
import { SLIDES_DATA } from '../slidesData';

export default function Slide2({ slideIndex = 2, totalSlides = 27, onNavigate }) {
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === 2);

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

      {/* 5 Equal-Sized Glass Group Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 16,
        flex: 1,
        alignItems: 'stretch',
        minHeight: 0,
        margin: '8px 0',
      }}>
        {slideData.categories.map((category, catIdx) => {
          const CatIcon = category.icon;
          const isDense = category.sections.length > 6;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + catIdx * 0.06, ease: easeCurve }}
              className="glass"
              style={{
                borderRadius: 22,
                padding: isDense ? '16px 14px' : '20px 16px',
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
                gap: 10,
                marginBottom: isDense ? 10 : 16,
                paddingBottom: isDense ? 8 : 12,
                borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
              }}>
                <div style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: catIdx === 0 || catIdx === 1 || catIdx === 4
                    ? 'linear-gradient(135deg, rgba(239, 20, 78, 0.1) 0%, rgba(29, 78, 216, 0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(29, 78, 216, 0.1) 0%, rgba(239, 20, 78, 0.08) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {CatIcon && (
                    <CatIcon
                      size={18}
                      color={catIdx === 0 || catIdx === 1 || catIdx === 4 ? BRAND : ROYAL}
                      strokeWidth={2}
                    />
                  )}
                </div>
                <div style={{
                  fontSize: isDense ? 15 : 17,
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
                gap: isDense ? 5 : 8,
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
                        padding: isDense ? '6px 10px' : '9px 12px',
                        borderRadius: isDense ? 10 : 12,
                        border: '1px solid rgba(226, 232, 240, 0.85)',
                        background: 'rgba(255, 255, 255, 0.92)',
                        cursor: 'pointer',
                        boxShadow: '0 1px 4px rgba(11, 31, 75, 0.02)',
                        transition: 'border-color 0.2s ease, background 0.2s ease',
                      }}
                    >
                      <span style={{
                        fontSize: isDense ? 12 : 14,
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
                        fontSize: isDense ? 11 : 12,
                        fontWeight: 700,
                        color: BRAND,
                        fontFamily: "'Inter', sans-serif",
                        padding: isDense ? '1px 6px' : '2px 7px',
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
        paddingTop: 6,
        fontSize: 14,
        color: GREY,
        fontFamily: "'Inter', sans-serif",
      }}>
        <span>Click any section above to jump directly to its slide.</span>
        <span
          onClick={() => onNavigate && onNavigate(2, 1)}
          style={{ color: BRAND, fontWeight: 600, cursor: 'pointer' }}
        >
          Next: HR Dashboard (Slide 03) →
        </span>
      </div>
    </SlideLayout>
  );
}
