import React from 'react';
import {
  SlideLayout,
  SlideTitle,
  WhyItHelpsStrip,
} from '../components/shared';
import { SLIDES_DATA } from '../slidesData';

// Slide 07 compact clean feature card for 5 items matching Slide 3 style
function Slide7FeatureCard({ icon: Icon, number, moduleLabel, title, text }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 18,
        padding: '12px 18px',
        border: '1px solid rgba(15, 23, 42, 0.08)',
        background: '#FFFFFF',
        boxShadow: '0 4px 18px rgba(11, 31, 75, 0.035)',
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
        marginBottom: 3,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          {Icon && (
            <div style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'linear-gradient(135deg, rgba(239, 20, 78, 0.08) 0%, rgba(29, 78, 216, 0.08) 100%)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={15} color="#1D4ED8" strokeWidth={1.8} />
            </div>
          )}

          {moduleLabel && (
            <span style={{
              fontSize: 10.5,
              fontWeight: 700,
              color: '#EF144E',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              fontFamily: "'Inter', sans-serif",
            }}>
              {moduleLabel}
            </span>
          )}
        </div>

        <span style={{
          fontSize: 11,
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
        fontSize: 15.5,
        fontWeight: 700,
        color: '#0B1F4B',
        lineHeight: 1.25,
        marginBottom: 2,
        fontFamily: "'Inter', sans-serif",
      }}>
        {title}
      </div>

      {/* Card Text */}
      <div style={{
        fontSize: 12.5,
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

export default function Slide7({ slideNumber = 7, totalSlides = 20, onNavigate }) {
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === 7);

  if (!slideData) {
    return <div>Slide 7 not found</div>;
  }

  // Next slide calculation
  let nextSlide = null;
  const nextData = SLIDES_DATA.find((s) => s.slideNumber === 8);
  if (nextData) {
    const nextTitle = nextData.sectionName ||
      (nextData.titleNavy ? `${nextData.titleNavy} ${nextData.titleBrand || ''}`.trim() : 'Next');
    nextSlide = {
      number: 8,
      title: nextTitle,
      index: 7,
    };
  }

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
        {/* Left Column: 5 Clean Feature Cards */}
        <div style={{
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          justifyContent: 'space-between',
        }}>
          {slideData.cards && slideData.cards.map((card, idx) => (
            <Slide7FeatureCard
              key={card.number || idx}
              icon={card.icon}
              number={card.number}
              moduleLabel={card.moduleLabel}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>

        {/* Right Column: Two High-Resolution Screenshot Cards (Exactly like Slide 3) */}
        <div className="shot-cards-container">
          {/* Card 1: Disciplinary Actions */}
          <div className="shot-card">
            <img
              src="/assets/slide7/disciplinary-actions.png"
              alt="Builtraa Disciplinary Actions Dashboard"
              className="shot-card__img"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              loading="eager"
            />
          </div>

          {/* Card 2: Reports Dashboard */}
          <div className="shot-card">
            <img
              src="/assets/slide7/reports-dashboard.png"
              alt="Builtraa Reports Dashboard"
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
