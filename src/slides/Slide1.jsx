import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, NAVY, GREY, easeCurve } from '../components/shared';
import { SLIDES_DATA } from '../slidesData';
import builtraaMockup from '../assets/builtraa-mockup-2x.png';

export default function Slide1({ onNavigate }) {
  // 24 section names from SLIDES_DATA (both HR and Material modules)
  const moduleSections = SLIDES_DATA.filter((s) => s.type === 'module' || s.type === 'material');

  return (
    <div
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
        <div style={{ height: '100%', width: '5%', background: BRAND }} />
      </div>

      {/* Dotted Grid Background */}
      <div
        className="dotted-grid"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      {/* Soft Ambient Background Glows */}
      <div style={{
        position: 'absolute',
        top: '12%',
        right: '10%',
        width: 560,
        height: 560,
        borderRadius: '50%',
        background: 'rgba(29, 78, 216, 0.07)',
        filter: 'blur(130px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '12%',
        left: '8%',
        width: 520,
        height: 520,
        borderRadius: '50%',
        background: 'rgba(239, 20, 78, 0.06)',
        filter: 'blur(140px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        top: '38%',
        left: '46%',
        width: 440,
        height: 440,
        borderRadius: '50%',
        background: 'rgba(219, 234, 254, 0.35)',
        filter: 'blur(140px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Main Content Area (Strict Safe Zone: y = 130 to y = 920) */}
      <div style={{
        position: 'absolute',
        top: 130,
        left: 96,
        right: 96,
        bottom: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 10,
      }}>
        {/* Top Split: Left Content + Right Product Mockup */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          gap: 40,
        }}>
          {/* Left Column (46% width) */}
          <div style={{
            width: '46%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
            {/* Eyebrow: HR MANAGEMENT SYSTEM */}
            <div style={{ marginBottom: 20 }}>
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15, ease: easeCurve }}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: BRAND,
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: 8,
                }}
              >
                HR MANAGEMENT SYSTEM
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 56 }}
                transition={{ duration: 0.5, delay: 0.3, ease: easeCurve }}
                style={{ height: 2, background: BRAND, borderRadius: 1 }}
              />
            </div>

            {/* Title: "One place for people, time and pay." */}
            <div style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              color: NAVY,
              fontFamily: "'Inter', sans-serif",
              marginBottom: 24,
            }}>
              <motion.div
                className="shine"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4, ease: easeCurve }}
              >
                One place for
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5, ease: easeCurve }}
                style={{
                  color: BRAND,
                  display: 'inline-block',
                }}
                className="shine-brand"
              >
                people, time
              </motion.div>

              <motion.div
                className="shine"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.6, ease: easeCurve }}
              >
                and pay.
              </motion.div>
            </div>

            {/* Intro Line: 22px grey */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7, ease: easeCurve }}
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: GREY,
                marginBottom: 36,
                fontFamily: "'Inter', sans-serif",
                maxWidth: 580,
                lineHeight: 1.4,
              }}
            >
              Everything about your workforce, managed in one system.
            </motion.div>

            {/* Glass Pill Button "Start →" */}
            <motion.button
              onClick={() => onNavigate(1, 1)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.45, delay: 0.85, ease: easeCurve }}
              className="glass"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 34px',
                borderRadius: 999,
                fontSize: 18,
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
              <span>Start</span>
              <span style={{ color: BRAND, fontSize: 20 }}>→</span>
            </motion.button>
          </div>

          {/* Right Column (54% width): Device Mockup Showcase (Laptop + Mobile) */}
          <div style={{
            width: '54%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
            {/* Center soft radiant glow behind devices */}
            <div style={{
              position: 'absolute',
              width: 480,
              height: 480,
              right: 80,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(29, 78, 216, 0.09) 0%, rgba(239, 20, 78, 0.06) 50%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }} />

            {/* Device Mockup with Framer Motion Entrance & Ambient Floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: { duration: 0.65, delay: 0.35, ease: easeCurve },
                scale: { duration: 0.65, delay: 0.35, ease: easeCurve },
                y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
              }}
              whileHover={{ scale: 1.02 }}
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={builtraaMockup}
                alt="Builtraa Platform Desktop and Mobile Dashboard"
                style={{
                  width: 940,
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  mixBlendMode: 'multiply',
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Strip: Slow moving row of section names as chips */}
        <div style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Edge fade gradients */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: 48,
            background: 'linear-gradient(to right, #FFFFFF, transparent)', zIndex: 5, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: 48,
            background: 'linear-gradient(to left, #FFFFFF, transparent)', zIndex: 5, pointerEvents: 'none',
          }} />

          {/* Marquee ticker */}
          <div style={{ display: 'flex', gap: 14, overflow: 'hidden' }}>
            <motion.div
              animate={{ x: [0, -1600] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
              style={{ display: 'flex', gap: 12, flexShrink: 0 }}
            >
              {[...moduleSections, ...moduleSections].map((sec, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate && onNavigate(sec.slideNumber - 1, 1)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 16px',
                    borderRadius: 999,
                    background: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid #E2E8F0',
                    fontSize: 13,
                    fontWeight: 600,
                    color: NAVY,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 2px 6px rgba(11, 31, 75, 0.03)',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: BRAND, fontWeight: 700 }}>
                    {String(sec.slideNumber).padStart(2, '0')}
                  </span>
                  <span>{sec.sectionName}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
