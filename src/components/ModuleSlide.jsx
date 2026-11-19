import React from 'react';
import {
  SlideLayout,
  SlideTitle,
  ClientFeatureCard,
  HowItWorksPanel,
  WhyItHelpsStrip,
} from './shared';
import { SLIDES_DATA } from '../slidesData';

export default function ModuleSlide({ slideNumber, totalSlides = 20, onNavigate }) {
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

      {/* Main 2-Column Grid: Left Feature Cards (45%), Right "How it works" Panel (55%) */}
      <div style={{
        display: 'flex',
        gap: 28,
        flex: 1,
        alignItems: 'stretch',
        minHeight: 0,
        margin: '6px 0',
      }}>
        {/* Left Column: Feature Cards */}
        <div style={{
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          gap: isCompact ? (slideData.cards.length > 4 ? 8 : 10) : 14,
          justifyContent: 'space-between',
        }}>
          {slideData.cards && slideData.cards.map((card, idx) => (
            <ClientFeatureCard
              key={card.number || idx}
              icon={card.icon}
              number={card.number}
              moduleLabel={card.moduleLabel}
              title={card.title}
              text={card.text}
              compact={isCompact}
              linkChip={card.linkChip}
              onNavigate={onNavigate}
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
