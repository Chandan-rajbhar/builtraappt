import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SlideLayout,
  SlideTitle,
  WhyItHelpsStrip,
  BRAND,
  NAVY,
  ROYAL,
  GREY,
  fadeInUp,
  easeCurve,
} from './shared';
import { SLIDES_DATA } from '../slidesData';
import { X, ZoomIn } from 'lucide-react';

const DOT_COLORS = {
  green: '#10B981',
  blue: '#3B5BDB',
  amber: '#F59E0B',
  crimson: '#EF144E',
  purple: '#8B5CF6',
  slate: '#64748B',
};

// ─── Lightbox Modal ──────────────────────────────────────────────────────────
function LightboxModal({ isOpen, onClose, submodule }) {
  if (!isOpen || !submodule) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(11, 31, 75, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: easeCurve }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: 1600,
            width: '94%',
            background: '#FFFFFF',
            borderRadius: 24,
            padding: '24px 28px',
            boxShadow: '0 25px 60px rgba(11, 31, 75, 0.35)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Lightbox Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 800,
                color: BRAND,
                background: 'rgba(239, 20, 78, 0.08)',
                padding: '3px 10px',
                borderRadius: 999,
                border: '1px solid rgba(239, 20, 78, 0.15)',
              }}>
                {submodule.number}
              </span>
              <h3 style={{
                fontSize: 22,
                fontWeight: 800,
                color: NAVY,
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                {submodule.name}
              </h3>
              <span style={{ fontSize: 14, color: GREY }}>
                — {submodule.desc}
              </span>
            </div>

            <button
              onClick={onClose}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: NAVY,
                outline: 'none',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Full Screenshot Preview */}
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px rgba(11, 31, 75, 0.08)',
            background: '#F8FAFC',
          }}>
            <img
              src={submodule.image}
              alt={`${submodule.name} screen`}
              style={{
                width: '100%',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Regular 2-Column Sub-Module Card ─────────────────────────────────────────
function SubModuleCard({ submodule, delay = 0, onOpenLightbox }) {
  const Icon = submodule.icon;
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="glass card-interactive"
      style={{
        borderRadius: 22,
        padding: '20px 24px 16px 24px',
        border: '1px solid rgba(226, 232, 240, 0.95)',
        borderLeft: '4px solid #EF144E',
        background: 'rgba(255, 255, 255, 0.94)',
        boxShadow: '0 8px 24px rgba(11, 31, 75, 0.05), inset 0 1px 0 #FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div>
        {/* 1. Icon Tile + Sub-Module Name + Number Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 6,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: '#EEF0FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {Icon && <Icon size={20} color="#1D4ED8" strokeWidth={2} />}
            </div>
            <div style={{
              fontSize: 21,
              fontWeight: 800,
              color: NAVY,
              letterSpacing: '-0.02em',
              fontFamily: "'Inter', sans-serif",
            }}>
              {submodule.name}
            </div>
          </div>

          <span style={{
            fontSize: 12,
            fontWeight: 800,
            color: BRAND,
            background: 'rgba(239, 20, 78, 0.08)',
            padding: '2px 10px',
            borderRadius: 999,
            border: '1px solid rgba(239, 20, 78, 0.15)',
            letterSpacing: '0.04em',
            fontFamily: "'Inter', sans-serif",
          }}>
            {submodule.number}
          </span>
        </div>

        {/* 2. One-Line Grey Description */}
        <p style={{
          fontSize: 13.5,
          color: GREY,
          lineHeight: 1.35,
          margin: '0 0 10px 0',
          fontFamily: "'Inter', sans-serif",
        }}>
          {submodule.desc}
        </p>

        {/* 3. Browser Preview Image Block (NEW) */}
        {submodule.image && (
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(submodule)}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1908 / 493',
              borderRadius: 14,
              border: imgHovered ? '1px solid #EF144E' : '1px solid #E2E8F0',
              boxShadow: imgHovered
                ? '0 6px 18px rgba(239, 20, 78, 0.12)'
                : '0 4px 14px rgba(11, 31, 75, 0.06)',
              overflow: 'hidden',
              cursor: 'zoom-in',
              marginBottom: 12,
              background: '#F8FAFC',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
              transform: imgHovered ? 'scale(1.01)' : 'scale(1)',
            }}
          >
            <img
              src={submodule.image}
              alt={`${submodule.name} screen`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                aspectRatio: '1908 / 493',
                objectFit: 'cover',
                objectPosition: 'top left',
                display: 'block',
              }}
            />
            {imgHovered && (
              <div style={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                background: 'rgba(11, 31, 75, 0.8)',
                color: '#FFFFFF',
                borderRadius: 999,
                padding: '3px 10px',
                fontSize: 11,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                backdropFilter: 'blur(4px)',
              }}>
                <ZoomIn size={12} />
                Click to expand
              </div>
            )}
          </div>
        )}

        {/* 4. Small Status / Stat Chips */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          flexWrap: 'wrap',
          marginBottom: 10,
        }}>
          {submodule.chips && submodule.chips.map((chip, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                padding: '3px 10px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                color: NAVY,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span
                style={{
                  width: 6.5,
                  height: 6.5,
                  borderRadius: '50%',
                  background: DOT_COLORS[chip.dot] || '#64748B',
                }}
              />
              {chip.label}
            </span>
          ))}
        </div>

        {/* 5. 3 Short Bullet Highlights (Tightened) */}
        <div style={{ marginBottom: 10 }}>
          <div style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: BRAND,
            textTransform: 'uppercase',
            marginBottom: 6,
            fontFamily: "'Inter', sans-serif",
          }}>
            KEY CAPABILITIES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {submodule.bullets && submodule.bullets.map((b, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: 'rgba(239, 20, 78, 0.08)',
                  color: BRAND,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10.5,
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  ✓
                </span>
                <span style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#1E293B',
                  lineHeight: 1.3,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Compact Horizontal 4-Step Mini Flow (Single Compact Row) */}
      <div style={{
        background: '#F8FAFC',
        border: '1px solid #E2E8F0',
        borderRadius: 14,
        padding: '8px 14px 6px 14px',
        marginTop: 'auto',
      }}>
        <div style={{ position: 'relative' }}>
          {/* Connecting gradient line */}
          <div style={{
            position: 'absolute',
            top: 10,
            left: 28,
            right: 28,
            height: 2,
            background: 'linear-gradient(to right, #EF144E 0%, #8B5CF6 50%, #1D4ED8 100%)',
            zIndex: 1,
          }} />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
          }}>
            {submodule.flow && submodule.flow.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: 90,
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: idx === 0 ? BRAND : '#FFFFFF',
                  color: idx === 0 ? '#FFFFFF' : NAVY,
                  border: idx === 0 ? `2px solid ${BRAND}` : '2px solid #CBD5E1',
                  boxShadow: idx === 0 ? '0 2px 6px rgba(239, 20, 78, 0.3)' : '0 1px 3px rgba(11, 31, 75, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  fontWeight: 800,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {idx + 1}
                </div>
                <span style={{
                  fontSize: 10.5,
                  fontWeight: 600,
                  color: '#475569',
                  lineHeight: 1.2,
                  marginTop: 4,
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: 90,
                }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Single Wide Sub-Module Card (for Slide 26 / Slide G) ─────────────────────
function SubModuleWideCard({ submodule, delay = 0, onOpenLightbox }) {
  const Icon = submodule.icon;
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="glass card-interactive"
      style={{
        width: '100%',
        maxWidth: 1140,
        margin: '0 auto',
        borderRadius: 24,
        padding: '24px 32px 18px 32px',
        border: '1px solid rgba(226, 232, 240, 0.95)',
        borderLeft: '4px solid #EF144E',
        background: 'rgba(255, 255, 255, 0.94)',
        boxShadow: '0 10px 32px rgba(11, 31, 75, 0.06), inset 0 1px 0 #FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div>
        {/* Top Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: '#EEF0FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {Icon && <Icon size={24} color="#1D4ED8" strokeWidth={2} />}
            </div>
            <div>
              <div style={{
                fontSize: 25,
                fontWeight: 800,
                color: NAVY,
                letterSpacing: '-0.02em',
                fontFamily: "'Inter', sans-serif",
              }}>
                {submodule.name}
              </div>
              <p style={{
                fontSize: 14.5,
                color: GREY,
                lineHeight: 1.35,
                margin: '2px 0 0 0',
                fontFamily: "'Inter', sans-serif",
              }}>
                {submodule.desc}
              </p>
            </div>
          </div>

          <span style={{
            fontSize: 13,
            fontWeight: 800,
            color: BRAND,
            background: 'rgba(239, 20, 78, 0.08)',
            padding: '3px 14px',
            borderRadius: 999,
            border: '1px solid rgba(239, 20, 78, 0.15)',
            letterSpacing: '0.04em',
            fontFamily: "'Inter', sans-serif",
          }}>
            {submodule.number}
          </span>
        </div>

        {/* Browser Preview Image Block (Full width of wide card, identical 1908/493 ratio) */}
        {submodule.image && (
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(submodule)}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1908 / 493',
              borderRadius: 14,
              border: imgHovered ? '1px solid #EF144E' : '1px solid #E2E8F0',
              boxShadow: imgHovered
                ? '0 6px 18px rgba(239, 20, 78, 0.12)'
                : '0 4px 14px rgba(11, 31, 75, 0.06)',
              overflow: 'hidden',
              cursor: 'zoom-in',
              margin: '10px 0 12px 0',
              background: '#F8FAFC',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
              transform: imgHovered ? 'scale(1.008)' : 'scale(1)',
            }}
          >
            <img
              src={submodule.image}
              alt={`${submodule.name} screen`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                aspectRatio: '1908 / 493',
                objectFit: 'cover',
                objectPosition: 'top left',
                display: 'block',
              }}
            />
            {imgHovered && (
              <div style={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                background: 'rgba(11, 31, 75, 0.8)',
                color: '#FFFFFF',
                borderRadius: 999,
                padding: '3px 10px',
                fontSize: 11,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                backdropFilter: 'blur(4px)',
              }}>
                <ZoomIn size={12} />
                Click to expand
              </div>
            )}
          </div>
        )}

        {/* Stat Chips */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          flexWrap: 'wrap',
          marginBottom: 12,
        }}>
          {submodule.chips && submodule.chips.map((chip, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                padding: '4px 12px',
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 600,
                color: NAVY,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span
                style={{
                  width: 7.5,
                  height: 7.5,
                  borderRadius: '50%',
                  background: DOT_COLORS[chip.dot] || '#64748B',
                }}
              />
              {chip.label}
            </span>
          ))}
        </div>

        {/* 2-Column Split: Bullets on Left (48%), Flow on Right (52%) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '48% 52%',
          gap: 24,
          alignItems: 'stretch',
        }}>
          {/* Left: 3 Short Bullet Highlights */}
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: 16,
            padding: '14px 18px',
          }}>
            <div style={{
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: BRAND,
              textTransform: 'uppercase',
              marginBottom: 8,
              fontFamily: "'Inter', sans-serif",
            }}>
              KEY CAPABILITIES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {submodule.bullets && submodule.bullets.map((b, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    width: 17,
                    height: 17,
                    borderRadius: '50%',
                    background: 'rgba(239, 20, 78, 0.08)',
                    color: BRAND,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    ✓
                  </span>
                  <span style={{
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: '#1E293B',
                    lineHeight: 1.35,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Compact 4-Step Mini Flow */}
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: 16,
            padding: '14px 18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#64748B',
              textTransform: 'uppercase',
              marginBottom: 10,
              fontFamily: "'Inter', sans-serif",
            }}>
              WORKFLOW STAGES
            </div>
            <div style={{ position: 'relative', margin: '4px 0' }}>
              <div style={{
                position: 'absolute',
                top: 10,
                left: 30,
                right: 30,
                height: 2,
                background: 'linear-gradient(to right, #EF144E 0%, #8B5CF6 50%, #1D4ED8 100%)',
                zIndex: 1,
              }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 2,
              }}>
                {submodule.flow && submodule.flow.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: 96,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: idx === 0 ? BRAND : '#FFFFFF',
                      color: idx === 0 ? '#FFFFFF' : NAVY,
                      border: idx === 0 ? `2px solid ${BRAND}` : '2px solid #CBD5E1',
                      boxShadow: idx === 0 ? '0 2px 6px rgba(239, 20, 78, 0.3)' : '0 1px 3px rgba(11, 31, 75, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10,
                      fontWeight: 800,
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      {idx + 1}
                    </div>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#475569',
                      lineHeight: 1.2,
                      marginTop: 4,
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Material Module Slide Container ──────────────────────────────────────────
export default function MaterialModuleSlide({
  slideNumber,
  totalSlides = 27,
  onNavigate,
}) {
  const [activeLightbox, setActiveLightbox] = useState(null);
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === slideNumber);

  if (!slideData) {
    return <div>Slide {slideNumber} not found</div>;
  }

  // Next Slide Information (pointing to next slide)
  const nextSlideData = SLIDES_DATA.find((s) => s.slideNumber === slideNumber + 1);
  const nextSlide = nextSlideData
    ? {
        number: nextSlideData.slideNumber,
        title: nextSlideData.sectionName || (nextSlideData.type === 'closing' ? 'Summary' : 'Next Section'),
        index: nextSlideData.slideNumber - 1,
      }
    : null;

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      speakerNotes={slideData.speakerNotes}
    >
      {/* Title Block */}
      <SlideTitle
        eyebrow={slideData.eyebrow}
        titleNavy={slideData.titleNavy}
        titleBrand={slideData.titleBrand}
        titleNavyAfter={slideData.titleNavyAfter}
        intro={slideData.intro}
        slideIndex={slideNumber}
      />

      {/* Main Body */}
      {slideData.isWide ? (
        <div style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          margin: '4px 0',
        }}>
          <SubModuleWideCard
            submodule={slideData.submodules[0]}
            delay={1}
            onOpenLightbox={setActiveLightbox}
          />
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 28,
          flex: 1,
          alignItems: 'stretch',
          minHeight: 0,
          margin: '4px 0',
        }}>
          {slideData.submodules && slideData.submodules.map((sm, idx) => (
            <SubModuleCard
              key={sm.number || idx}
              submodule={sm}
              delay={idx + 1}
              onOpenLightbox={setActiveLightbox}
            />
          ))}
        </div>
      )}

      {/* Bottom: "Why it helps" One-Line Strip (Max 14 words) */}
      <WhyItHelpsStrip
        text={slideData.whyItHelps}
        nextSlide={nextSlide}
        onNavigate={onNavigate}
      />

      {/* Lightbox Overlay */}
      <LightboxModal
        isOpen={Boolean(activeLightbox)}
        onClose={() => setActiveLightbox(null)}
        submodule={activeLightbox}
      />
    </SlideLayout>
  );
}
