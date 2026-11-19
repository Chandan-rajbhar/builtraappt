import React from 'react';
import {
  SlideLayout,
  SlideTitle,
  WhyItHelpsStrip,
} from './shared';
import { SLIDES_DATA } from '../slidesData';

// Clean feature card with NO red vertical line (matching Slide 3 specification)
function CleanFeatureCard({ icon: Icon, number, moduleLabel, title, text, compact }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: compact ? '11px 18px' : '14px 18px',
        border: '1px solid rgba(15, 23, 42, 0.08)',
        background: '#FFFFFF',
        boxShadow: '0 6px 24px rgba(11, 31, 75, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        minHeight: 0,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Header: Icon chip + Module Label (left) + Number (right) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: compact ? 4 : 6,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {Icon && (
            <div style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background: 'linear-gradient(135deg, rgba(239, 20, 78, 0.08) 0%, rgba(29, 78, 216, 0.08) 100%)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={16} color="#1D4ED8" strokeWidth={1.8} />
            </div>
          )}

          {moduleLabel && (
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#EF144E',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontFamily: "'Inter', sans-serif",
            }}>
              {moduleLabel}
            </span>
          )}
        </div>

        <span style={{
          fontSize: 12,
          fontWeight: 700,
          color: '#94A3B8',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '0.05em',
        }}>
          {number}
        </span>
      </div>

      {/* Card Title */}
      <div style={{
        fontSize: compact ? 16 : 17,
        fontWeight: 700,
        color: '#0B1F4B',
        lineHeight: 1.25,
        marginBottom: compact ? 2 : 4,
        fontFamily: "'Inter', sans-serif",
      }}>
        {title}
      </div>

      {/* Card Text */}
      <div style={{
        fontSize: compact ? 12.5 : 13,
        fontWeight: 400,
        color: '#64748B',
        lineHeight: 1.35,
        fontFamily: "'Inter', sans-serif",
      }}>
        {text}
      </div>
    </div>
  );
}

export default function ScreenshotsModuleSlide({
  slideNumber,
  totalSlides = 20,
  onNavigate,
  shots = [],
}) {
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === slideNumber);

  if (!slideData) {
    return <div>Slide {slideNumber} not found</div>;
  }

  // Automatic "Next: ..." calculation across the 20-slide deck
  let nextSlide = null;
  if (slideNumber < totalSlides) {
    const nextData = SLIDES_DATA.find((s) => s.slideNumber === slideNumber + 1);
    if (nextData) {
      const nextTitle = nextData.sectionName ||
        (nextData.titleNavy ? `${nextData.titleNavy} ${nextData.titleBrand || ''}`.trim() : 'Next');
      nextSlide = {
        number: nextData.slideNumber,
        title: nextTitle,
        index: nextData.slideNumber - 1,
      };
    }
  }

  const isCompact = slideData.compact || (slideData.cards && slideData.cards.length > 3);

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

      {/* Main 2-Column Grid: Left Feature Cards (45%), Right Screenshot Cards (55%) */}
      <div style={{
        display: 'flex',
        gap: 28,
        flex: 1,
        alignItems: 'stretch',
        minHeight: 0,
        margin: '6px 0',
      }}>
        {/* Left Column: Clean Feature Cards (NO red accent lines) */}
        <div style={{
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          gap: isCompact ? 10 : 12,
          justifyContent: 'space-between',
        }}>
          {slideData.cards && slideData.cards.map((card, idx) => (
            <CleanFeatureCard
              key={card.number || idx}
              icon={card.icon}
              number={card.number}
              moduleLabel={card.moduleLabel}
              title={card.title}
              text={card.text}
              compact={isCompact}
            />
          ))}
        </div>

        {/* Right Column: Two Full-Bleed High-Resolution Screenshot Cards */}
        <div style={{
          width: '55%',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          justifyContent: 'space-between',
          height: '100%',
        }}>
          {shots.map((shot, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                flex: 1,
                width: '100%',
                minHeight: 0,
                borderRadius: 20,
                padding: 0,
                border: '1px solid rgba(15, 23, 42, 0.08)',
                background: '#FFFFFF',
                boxShadow: '0 6px 24px rgba(11, 31, 75, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top left',
                  display: 'block',
                  borderRadius: 19,
                  imageRendering: 'auto',
                }}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: "Why it helps" One-Line Strip */}
      <WhyItHelpsStrip
        text={slideData.whyItHelps}
        nextSlide={nextSlide}
        onNavigate={onNavigate}
      />
    </SlideLayout>
  );
}
