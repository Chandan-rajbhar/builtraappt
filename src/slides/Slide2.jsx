import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout, SlideTitle, BRAND, NAVY, ROYAL, GREY, easeCurve } from '../components/shared';
import { SLIDES_DATA } from '../slidesData';

export default function Slide2({ slideIndex = 2, totalSlides = 20, onNavigate }) {
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

      {/* 4 Equal-Sized Glass Group Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
        flex: 1,
        alignItems: 'stretch',
        minHeight: 0,
        margin: '12px 0',
      }}>
        {slideData.categories.map((category, catIdx) => {
          const CatIcon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + catIdx * 0.08, ease: easeCurve }}
              className="glass"
              style={{
                borderRadius: 24,
                padding: '24px 20px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                background: 'rgba(255, 255, 255, 0.8)',
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
                marginBottom: 20,
                paddingBottom: 14,
                borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
              }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: catIdx === 0 || catIdx === 1
                    ? 'linear-gradient(135deg, rgba(239, 20, 78, 0.1) 0%, rgba(29, 78, 216, 0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(29, 78, 216, 0.1) 0%, rgba(239, 20, 78, 0.08) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <CatIcon size={20} color={catIdx === 0 || catIdx === 1 ? BRAND : ROYAL} strokeWidth={2} />
                </div>
                <div style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: NAVY,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {category.title}
                </div>
              </div>

              {/* Section Chips */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                flex: 1,
                justifyContent: 'flex-start',
              }}>
                {category.sections.map((sec, secIdx) => {
                  const targetSlideNum = String(sec.slide).padStart(2, '0');
                  return (
                    <motion.div
                      key={sec.name}
                      whileHover={{ scale: 1.03, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onNavigate && onNavigate(sec.slide - 1, 1)}
                      className="glass card-interactive"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        borderRadius: 14,
                        border: '1px solid rgba(226, 232, 240, 0.85)',
                        background: 'rgba(255, 255, 255, 0.9)',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(11, 31, 75, 0.02)',
                        transition: 'border-color 0.2s ease, background 0.2s ease',
                      }}
                    >
                      <span style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: NAVY,
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        {sec.name}
                      </span>
                      <span style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: BRAND,
                        fontFamily: "'Inter', sans-serif",
                        padding: '2px 8px',
                        borderRadius: 999,
                        background: 'rgba(239, 20, 78, 0.08)',
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
        <span style={{ color: BRAND, fontWeight: 600 }}>Next: HR Dashboard (Slide 03) →</span>
      </div>
    </SlideLayout>
  );
}
