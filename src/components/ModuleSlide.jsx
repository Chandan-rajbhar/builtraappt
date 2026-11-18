import React from 'react';
import {
  SlideLayout,
  SlideTitle,
  ClientFeatureCard,
  HowItWorksPanel,
  WhyItHelpsStrip,
} from './shared';
import { SLIDES_DATA } from '../slidesData';

export default function ModuleSlide({ slideNumber, totalSlides = 34, onNavigate }) {
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === slideNumber);

  if (!slideData) {
    return <div>Slide {slideNumber} not found</div>;
  }

  // Automatic "Next: ..." navigation
  let nextSlide = null;
  if (slideNumber === 19) {
    // The last HR slide points to Material Management overview (Slide 20)
    nextSlide = { number: 20, title: 'Material Management', index: 19 };
  } else if (slideNumber === 33) {
    // The last MM module slide points to Thank You (Slide 34)
    nextSlide = { number: 34, title: 'Summary', index: 33 };
  } else if (slideNumber >= 21 && slideNumber < 33) {
    const next = SLIDES_DATA.find((s) => s.slideNumber === slideNumber + 1);
    if (next) {
      nextSlide = {
        number: next.slideNumber,
        title: next.sectionName || next.titleBrand || 'Next',
        index: next.slideNumber - 1,
      };
    }
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

      {/* Main 2-Column Grid: Left 3 Cards (45%), Right "How it works" Panel (55%) */}
      <div style={{
        display: 'flex',
        gap: 32,
        flex: 1,
        alignItems: 'stretch',
        minHeight: 0,
        margin: '8px 0',
      }}>
        {/* Left Column: 3 Plain Client Feature Cards */}
        <div style={{
          width: '45%',
          display: 'grid',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {slideData.cards.map((card, idx) => (
            <ClientFeatureCard
              key={card.number || idx}
              icon={card.icon}
              number={card.number}
              title={card.title}
              text={card.text}
              delay={idx + 1}
            />
          ))}
        </div>

        {/* Right Column: "How it works" Step List Panel */}
        <div style={{
          width: '55%',
          display: 'flex',
        }}>
          <HowItWorksPanel
            icon={slideData.moduleIcon}
            steps={slideData.steps}
            delay={0.35}
          />
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
