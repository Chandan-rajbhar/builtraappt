import React from 'react';
import {
  SlideLayout,
  SlideTitle,
  WhyItHelpsStrip,
} from '../components/shared';
import { SLIDES_DATA } from '../slidesData';

// Slide 13 clean feature card matching Slide 2 & Slide 8 style
function Slide13FeatureCard({ icon: Icon, number, moduleLabel, title, text }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: '16px 20px',
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
        marginBottom: 6,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {Icon && (
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: 'linear-gradient(135deg, rgba(239, 20, 78, 0.08) 0%, rgba(29, 78, 216, 0.08) 100%)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={17} color="#1D4ED8" strokeWidth={1.8} />
            </div>
          )}

          {moduleLabel && (
            <span style={{
              fontSize: 11.5,
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
        fontSize: 17.5,
        fontWeight: 700,
        color: '#0B1F4B',
        lineHeight: 1.25,
        marginBottom: 4,
        fontFamily: "'Inter', sans-serif",
      }}>
        {title}
      </div>

      {/* Card Text */}
      <div style={{
        fontSize: 13.5,
        fontWeight: 400,
        color: '#64748B',
        lineHeight: 1.38,
        fontFamily: "'Inter', sans-serif",
      }}>
        {text}
      </div>
    </div>
  );
}

export default function Slide13({ slideNumber = 13, slideIndex, totalSlides = 20, onNavigate }) {
  const effectiveSlideNum = slideNumber || slideIndex || 13;
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === effectiveSlideNum) || SLIDES_DATA[12];

  if (!slideData) {
    return <div>Slide 13 not found</div>;
  }

  // Next slide calculation
  let nextSlide = null;
  const nextData = SLIDES_DATA.find((s) => s.slideNumber === effectiveSlideNum + 1);
  if (nextData) {
    const nextTitle = nextData.sectionName ||
      (nextData.titleNavy ? `${nextData.titleNavy} ${nextData.titleBrand || ''}`.trim() : 'Next');
    nextSlide = {
      number: effectiveSlideNum + 1,
      title: nextTitle,
      index: effectiveSlideNum,
    };
  }

  return (
    <SlideLayout
      slideNumber={effectiveSlideNum}
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
        slideIndex={effectiveSlideNum}
      />

      {/* Main 2-Column Grid: Left Feature Cards (45%), Right Screenshot Card (55%) */}
      <div style={{
        display: 'flex',
        gap: 28,
        flex: 1,
        alignItems: 'stretch',
        minHeight: 0,
        margin: '6px 0',
      }}>
        {/* Left Column: 3 Clean Feature Cards */}
        <div style={{
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          justifyContent: 'space-between',
        }}>
          {slideData.cards && slideData.cards.map((card, idx) => (
            <Slide13FeatureCard
              key={card.number || idx}
              icon={card.icon}
              number={card.number}
              moduleLabel={card.moduleLabel}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>

        {/* Right Column: Screenshot Card (Matching Slide 2 & Slide 8) */}
        <div style={{
          width: '55%',
          display: 'flex',
          height: '100%',
        }}>
          <div className="shot-card" style={{ height: '100%', width: '100%', padding: 14 }}>
            <img
              src="/assets/slide13/project-tools-overview.png"
              alt="Builtraa Project Management Overview Dashboard"
              className="shot-card__img"
              loading="eager"
            />
          </div>
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
