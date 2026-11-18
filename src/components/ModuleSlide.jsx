import React from 'react';
import {
  SlideLayout,
  SlideTitle,
  ClientFeatureCard,
  HowItWorksPanel,
  WhyItHelpsStrip,
} from './shared';
import { SLIDES_DATA } from '../slidesData';

export default function ModuleSlide({ slideNumber, totalSlides = 20 }) {
  const slideData = SLIDES_DATA.find((s) => s.slideNumber === slideNumber);

  if (!slideData) {
    return <div>Slide {slideNumber} not found</div>;
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

        {/* Right Column: "How it works" Step List Panel (NO screenshots, NO images) */}
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

      {/* Bottom: "Why it helps" One-Line Strip (Max 14 words) */}
      <WhyItHelpsStrip text={slideData.whyItHelps} />
    </SlideLayout>
  );
}
