import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BRAND, NAVY, ROYAL, GREY, easeCurve } from '../components/shared';
import { Users, ShoppingCart, Briefcase, ChevronRight, Sparkles } from 'lucide-react';

export default function Slide1({ onNavigate }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const ecosystems = [
    {
      id: 'hr',
      name: 'HR Management',
      slideRange: 'Slides 02–07',
      targetIndex: 1, // Slide 02
      icon: Users,
      color: BRAND,
      desc: 'People, attendance, payroll and operations'
    },
    {
      id: 'mm',
      name: 'Material Management',
      slideRange: 'Slides 08–12',
      targetIndex: 7, // Slide 08
      icon: ShoppingCart,
      color: ROYAL,
      desc: 'Requisitions, procurement, inventory and site assets'
    },
    {
      id: 'pt',
      name: 'Project Tools',
      slideRange: 'Slides 13–19',
      targetIndex: 12, // Slide 13
      icon: Briefcase,
      color: BRAND,
      desc: 'Planning, documentation, finance and site execution'
    }
  ];

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

      {/* Main Content Area (Strict Safe Zone: y = 130 to y = 920) */}
      <div style={{
        position: 'absolute',
        top: 130,
        left: 96,
        right: 96,
        bottom: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 10,
      }}>
        {/* Top Split: Left Content + Right 3 Ecosystem Cards */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          gap: 70,
        }}>
          {/* Left Column (48% width) */}
          <div style={{
            width: '48%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
            {/* Eyebrow: ENTERPRISE MANAGEMENT SYSTEM */}
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
                ENTERPRISE MANAGEMENT SYSTEM
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.5, delay: 0.3, ease: easeCurve }}
                style={{ height: 2.5, background: BRAND, borderRadius: 1 }}
              />
            </div>

            {/* Title: BUILTRAA (huge, two-tone) */}
            <div style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
              fontFamily: "'Inter', sans-serif",
              marginBottom: 16,
            }}>
              <motion.span
                className="shine"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4, ease: easeCurve }}
                style={{ color: NAVY }}
              >
                BUILT
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5, ease: easeCurve }}
                style={{ color: BRAND }}
                className="shine-brand"
              >
                RAA
              </motion.span>
            </div>

            {/* Subtitle: Enterprise Management System */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.6, ease: easeCurve }}
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: NAVY,
                marginBottom: 10,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Enterprise Management System
            </motion.div>

            {/* Tagline: One Platform. Three Powerful Management Ecosystems. */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7, ease: easeCurve }}
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: GREY,
                marginBottom: 38,
                fontFamily: "'Inter', sans-serif",
                maxWidth: 540,
                lineHeight: 1.4,
              }}
            >
              One Platform. Three Powerful Management Ecosystems.
            </motion.div>

            {/* Glass Pill Button "Start →" (Jumps to slide 02) */}
            <motion.button
              onClick={() => onNavigate && onNavigate(1, 1)}
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
                padding: '14px 36px',
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

          {/* Right Column (52% width): 3 Clickable Ecosystem Cards */}
          <div style={{
            width: '52%',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}>
            {ecosystems.map((eco, idx) => {
              const IconComp = eco.icon;
              const isHovered = hoveredCard === eco.id;

              return (
                <motion.div
                  key={eco.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 + idx * 0.12, ease: easeCurve }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate && onNavigate(eco.targetIndex, 1)}
                  onMouseEnter={() => setHoveredCard(eco.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="glass card-interactive"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 28px',
                    borderRadius: 22,
                    border: isHovered ? `1.5px solid ${BRAND}` : '1.5px solid rgba(226, 232, 240, 0.9)',
                    background: isHovered ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.85)',
                    boxShadow: isHovered
                      ? '0 14px 32px rgba(239, 20, 78, 0.10), inset 0 1px 0 #FFFFFF'
                      : '0 8px 24px rgba(11, 31, 75, 0.04), inset 0 1px 0 #FFFFFF',
                    cursor: 'pointer',
                    transition: 'border 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    {/* Lavender Icon Tile */}
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: 'linear-gradient(135deg, rgba(239, 20, 78, 0.1) 0%, rgba(29, 78, 216, 0.08) 100%)',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <IconComp size={28} color={eco.color} strokeWidth={1.9} />
                    </div>

                    {/* Titles */}
                    <div>
                      <div style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: NAVY,
                        fontFamily: "'Inter', sans-serif",
                        marginBottom: 4,
                      }}>
                        {eco.name}
                      </div>
                      <div style={{
                        fontSize: 15,
                        fontWeight: 400,
                        color: GREY,
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        {eco.desc}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Slide Range Pill + Chevron */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: BRAND,
                      fontFamily: "'Inter', sans-serif",
                      padding: '4px 14px',
                      borderRadius: 999,
                      background: 'rgba(239, 20, 78, 0.08)',
                      border: '1px solid rgba(239, 20, 78, 0.18)',
                    }}>
                      {eco.slideRange}
                    </span>
                    <ChevronRight size={20} color={isHovered ? BRAND : '#94A3B8'} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Strip: 3 Ecosystem Chips */}
        <div style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{
            fontSize: 14,
            fontWeight: 500,
            color: GREY,
            fontFamily: "'Inter', sans-serif",
          }}>
            Click any ecosystem above or jump directly to its section:
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            {ecosystems.map((eco) => (
              <motion.div
                key={eco.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate && onNavigate(eco.targetIndex, 1)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 18px',
                  borderRadius: 999,
                  background: 'rgba(255, 255, 255, 0.90)',
                  border: '1px solid #E2E8F0',
                  fontSize: 13,
                  fontWeight: 600,
                  color: NAVY,
                  boxShadow: '0 2px 6px rgba(11, 31, 75, 0.03)',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span style={{ color: BRAND, fontWeight: 700 }}>
                  {eco.slideRange.replace('Slides ', '')}
                </span>
                <span>{eco.name}</span>
                <span style={{ color: BRAND }}>→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
