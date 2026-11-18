import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { toolsList } from '../data/presentationData';
import BrowserFrame from './BrowserFrame';
import AnimatedToolsGrid from './AnimatedToolsGrid';

export default function DeckPresentation() {
  const deckRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const seenRef = useRef({});

  const totalSlides = 1 + toolsList.length + 1; // 1 hero + 14 tools + 1 demo = 16 slides

  const pad = (n) => String(n).padStart(2, '0');

  // IntersectionObserver to detect active slide and trigger GSAP animations
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const sections = deck.querySelectorAll('.slide-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Array.from(sections).indexOf(entry.target);
        if (index !== -1) {
          setCurrentIdx(index);

          // Trigger GSAP entrance animation once per section
          if (!seenRef.current[index]) {
            seenRef.current[index] = true;
            const animElements = entry.target.querySelectorAll('[data-anim]');
            if (animElements.length > 0) {
              gsap.fromTo(animElements,
                { y: 28, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power2.out' }
              );
            }
          }
        }
      });
    }, { root: deck, threshold: 0.55 });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const deck = deckRef.current;
      if (!deck) return;

      const delta = {
        ArrowDown: 1,
        PageDown: 1,
        ArrowRight: 1,
        ' ': 1,
        ArrowUp: -1,
        PageUp: -1,
        ArrowLeft: -1,
      }[e.key];

      if (delta) {
        e.preventDefault();
        deck.scrollBy({ top: delta * deck.clientHeight, behavior: 'smooth' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        deck.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'End' || e.key === 'Escape') {
        e.preventDefault();
        deck.scrollTo({ top: deck.scrollHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSlide = (index) => {
    const deck = deckRef.current;
    if (!deck) return;
    const sections = deck.querySelectorAll('.slide-section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[var(--bg)]">
      
      {/* Scrollable Mandatory Deck */}
      <div ref={deckRef} className="deck-container">
        
        {/* SLIDE 01: Hero Slide */}
        <section className="slide-section">
          <div>
            <div data-anim className="font-heading font-bold text-2xl md:text-3xl mb-8 flex items-center gap-2 text-[var(--text)]">
              <span className="text-[var(--acc)]">■</span> Builtraa
            </div>
            <p data-anim className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)] mb-4">
              CONSTRUCTION PROJECT MANAGEMENT
            </p>
            <h1 data-anim className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-[var(--text)]">
              Project Tools
            </h1>
            <p data-anim className="text-base md:text-xl text-[var(--muted)] leading-relaxed mt-5 max-w-[520px]">
              Every project workflow, one menu away. A walkthrough of the 14 tools inside each Builtraa project.
            </p>
          </div>
          <div data-anim className="w-full">
            <AnimatedToolsGrid onSelectTool={scrollToSlide} />
          </div>
        </section>

        {/* SLIDES 02 - 15: The 14 Tools */}
        {toolsList.map((tool, i) => (
          <section key={tool.name} className="slide-section">
            <div>
              {/* Category Tag */}
              <span data-anim className="inline-block text-xs border border-[var(--line)] rounded-full px-3 py-1 text-[var(--muted)] mb-4 bg-[var(--card)]">
                {tool.category}
              </span>

              {/* Eyebrow Counter */}
              <p data-anim className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)] mb-3">
                {pad(i + 2)} / {tool.name.toUpperCase()}
              </p>

              {/* Tool Title */}
              <h2 data-anim className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[var(--text)]">
                {tool.name}
              </h2>

              {/* Lead Tagline */}
              <p data-anim className="text-base md:text-lg text-[var(--muted)] leading-relaxed mt-4 max-w-[520px]">
                {tool.tagline}
              </p>

              {/* Key Points (3 Cards with Left Red Border) */}
              <div className="flex flex-col gap-3 mt-7 max-w-[520px]">
                {tool.points.map((pt, pIdx) => (
                  <div key={pIdx} data-anim className="key-point-card">
                    <h3 className="font-heading font-bold text-base text-[var(--text)] mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-normal m-0">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Clean Tool Card (without marked top bar) */}
            <div data-anim>
              <BrowserFrame activeToolName={tool.name} onSelectTool={scrollToSlide} />
            </div>
          </section>
        ))}

        {/* SLIDE 17: Demo Showcase (End Slide) */}
        <section className="slide-section !grid-cols-1 justify-items-center text-center">
          <div className="max-w-2xl mx-auto">
            <p data-anim className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)] mb-4">
              DEMO SHOWCASE
            </p>
            <h2 data-anim className="font-heading font-bold text-4xl md:text-6xl tracking-tight text-[var(--text)]">
              Now ready for the live demo
            </h2>
            <p data-anim className="text-base md:text-lg text-[var(--muted)] leading-relaxed mt-4 max-w-md mx-auto">
              See the Builtraa tools working on a real project.
            </p>
            <div data-anim className="mt-8">
              <a
                href="https://builtraa-demo.duckdns.org/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open Live Demo →
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed left-0 right-0 bottom-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/90 to-transparent">
        {/* Home Button */}
        <button
          onClick={() => scrollToSlide(0)}
          className="bg-transparent border border-[var(--line)] text-[var(--text)] rounded-full px-5 py-2 text-sm font-medium hover:bg-[var(--card)] transition-colors cursor-pointer"
        >
          Home
        </button>

        {/* Slide Counter */}
        <div className="font-heading text-sm text-[var(--muted)] select-none">
          <b className="text-[var(--text)]">{pad(currentIdx + 1)}</b> / {pad(totalSlides)}
        </div>

        {/* Skip to Demo Button */}
        <button
          onClick={() => scrollToSlide(totalSlides - 1)}
          className="bg-transparent border border-[var(--line)] text-[var(--text)] rounded-full px-5 py-2 text-sm font-medium hover:bg-[var(--card)] transition-colors cursor-pointer"
        >
          Skip →
        </button>
      </div>

      {/* Floating Scroll Cue on First Slide */}
      <div 
        className={`fixed right-6 md:right-16 bottom-20 text-[11px] font-mono tracking-[0.15em] text-[var(--muted)] select-none pointer-events-none transition-opacity duration-300 ${
          currentIdx === 0 ? 'opacity-100 animate-bounce' : 'opacity-0'
        }`}
      >
        SCROLL ↓
      </div>

    </div>
  );
}
