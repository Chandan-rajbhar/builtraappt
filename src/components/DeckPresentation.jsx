import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { toolsList } from '../data/presentationData';
import AnimatedToolsGrid from './AnimatedToolsGrid';
import ToolScreenshotFrame from './ToolScreenshotFrame';
import ToolWorkflowPath from './ToolWorkflowPath';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

          // Trigger directional entrance animation every time a slide is visited
          const leftEl = entry.target.querySelector('[data-anim-left]');
          if (leftEl) {
            const leftChildren = leftEl.querySelectorAll('[data-anim-child]');
            if (leftChildren.length > 0) {
              gsap.fromTo(leftChildren,
                { x: -70, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.65, stagger: 0.06, ease: 'power3.out' }
              );
            } else {
              gsap.fromTo(leftEl,
                { x: -70, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }
              );
            }
          }

          // Right container enters from the RIGHT
          const rightEl = entry.target.querySelector('[data-anim-right]');
          if (rightEl) {
            gsap.fromTo(rightEl,
              { x: 70, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.05 }
            );
          }

          // Center container for slide 16
          const centerEl = entry.target.querySelector('[data-anim-center]');
          if (centerEl) {
            gsap.fromTo(centerEl,
              { y: 35, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }
            );
          }
        }
      });
    }, { root: deck, threshold: 0.55 });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keyboard Navigation (Horizontal Left/Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const deck = deckRef.current;
      if (!deck) return;

      const delta = {
        ArrowRight: 1,
        ArrowDown: 1,
        PageDown: 1,
        ' ': 1,
        ArrowLeft: -1,
        ArrowUp: -1,
        PageUp: -1,
      }[e.key];

      if (delta) {
        e.preventDefault();
        deck.scrollBy({ left: delta * deck.clientWidth, behavior: 'smooth' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        deck.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (e.key === 'End' || e.key === 'Escape') {
        e.preventDefault();
        deck.scrollTo({ left: deck.scrollWidth, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mouse Wheel Navigation (Converts Vertical Wheel to Smooth Horizontal Slides)
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    let wheelDebounce = false;
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 18 && !wheelDebounce) {
        e.preventDefault();
        wheelDebounce = true;
        const dir = e.deltaY > 0 ? 1 : -1;
        deck.scrollBy({ left: dir * deck.clientWidth, behavior: 'smooth' });
        setTimeout(() => {
          wheelDebounce = false;
        }, 420);
      }
    };

    deck.addEventListener('wheel', handleWheel, { passive: false });
    return () => deck.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollToSlide = (index) => {
    const deck = deckRef.current;
    if (!deck) return;
    const sections = deck.querySelectorAll('.slide-section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#FFFFFF]">
      
      {/* Ambient Dotted Grid from builtrappt */}
      <div className="dotted-grid fixed inset-0 pointer-events-none z-0"></div>

      {/* Floating Top Header with Official Builtraa Logo */}
      <div className="fixed top-5 left-6 md:left-12 z-40 flex items-center gap-3 select-none">
        <button 
          onClick={() => scrollToSlide(0)} 
          className="flex items-center gap-2 group transition-transform hover:scale-105 bg-transparent border-0 p-0 cursor-pointer text-left"
          title="Back to Start"
        >
          <img 
            src="/builtraa-logo-colored.svg" 
            alt="Builtraa Logo" 
            className="h-7 md:h-8 w-auto object-contain" 
          />
        </button>
      </div>

      {/* Scrollable Mandatory Deck */}
      <div ref={deckRef} className="deck-container relative z-10">
        
        {/* SLIDE 01: Hero Slide */}
        <section className="slide-section">
          <div data-anim-left className="flex flex-col">
            <div data-anim-child className="mb-6 flex items-center">
              <img 
                src="/builtraa-logo-colored.svg" 
                alt="Builtraa" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
            <p data-anim-child className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF144E] mb-3">
              CONSTRUCTION PROJECT MANAGEMENT
            </p>
            <h1 data-anim-child className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-[#020817]">
              Project Tools
            </h1>
            <p data-anim-child className="text-base md:text-xl text-[#64748B] leading-relaxed mt-5 max-w-[520px]">
              Every project workflow, one menu away. A walkthrough of the 14 tools inside each Builtraa project.
            </p>
          </div>
          <div data-anim-right className="w-full">
            <AnimatedToolsGrid onSelectTool={scrollToSlide} />
          </div>
        </section>

        {/* SLIDES 02 - 15: The 14 Tools */}
        {toolsList.map((tool, i) => (
          <section key={tool.name} className="slide-section">
            <div data-anim-left className="flex flex-col">
              {/* Category Tag */}
              <div>
                <span data-anim-child className="inline-block text-xs font-mono font-semibold border border-[#E2E8F0] rounded-full px-3 py-1 text-[#64748B] mb-4 bg-white/90 shadow-2xs">
                  {tool.category}
                </span>
              </div>

              {/* Eyebrow Counter */}
              <p data-anim-child className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF144E] mb-3">
                {pad(i + 2)} / {tool.name.toUpperCase()}
              </p>

              {/* Tool Title */}
              <h2 data-anim-child className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#020817]">
                {tool.name}
              </h2>

              {/* Lead Tagline */}
              <p data-anim-child className="text-base md:text-lg text-[#64748B] leading-relaxed mt-4 max-w-[520px]">
                {tool.tagline}
              </p>

              {/* Key Points (Cards with Crimson Left Border) */}
              <div className="flex flex-col gap-3 mt-7 max-w-[520px]">
                {tool.points.map((pt, pIdx) => (
                  <div key={pIdx} data-anim-child className="key-point-card">
                    <h3 className="font-heading font-bold text-base text-[#020817] mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-normal m-0">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Respective Screenshot + Animated Lifecycle Workflow Path */}
            <div data-anim-right className="w-full flex flex-col gap-3">
              <ToolScreenshotFrame tool={tool} />
              <ToolWorkflowPath toolName={tool.name} isActive={currentIdx === (i + 1)} />
            </div>
          </section>
        ))}

        {/* SLIDE 16: Demo Showcase (End Slide) */}
        <section className="slide-section !grid-cols-1 justify-items-center text-center">
          <div data-anim-center className="max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF144E] mb-4">
              DEMO SHOWCASE
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-tight text-[#020817]">
              Now ready for the live demo
            </h2>
            <p className="text-base md:text-lg text-[#64748B] leading-relaxed mt-4 max-w-md mx-auto">
              See the Builtraa tools working on a real project.
            </p>
            <div className="mt-8">
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

      {/* Floating Bottom Navigation Bar from builtrappt */}
      <div className="fixed left-0 right-0 bottom-6 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none select-none">
        {/* Left: Home Button */}
        <button
          onClick={() => scrollToSlide(0)}
          className="glass-pill pointer-events-auto px-4 py-2 text-xs font-mono font-semibold tracking-wider text-[#020817] flex items-center gap-1.5 cursor-pointer shadow-sm hover:text-[#EF144E]"
        >
          HOME
        </button>

        {/* Center: Signature Glass Pill Controls */}
        <div className="glass-pill pointer-events-auto flex items-center gap-2.5 px-3 py-1.5 shadow-lg">
          <button
            onClick={() => scrollToSlide(Math.max(0, currentIdx - 1))}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-slate-100 text-[#020817] transition-colors cursor-pointer"
            title="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 px-1 font-mono text-xs select-none">
            <span className="font-bold text-[#020817]">{pad(currentIdx + 1)}</span>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#64748B]">{pad(totalSlides)}</span>
            <div className="w-12 h-1 bg-slate-200/90 rounded-full overflow-hidden ml-1">
              <div 
                className="h-full bg-[#EF144E] rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / totalSlides) * 100}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={() => scrollToSlide(Math.min(totalSlides - 1, currentIdx + 1))}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-slate-100 text-[#020817] transition-colors cursor-pointer"
            title="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Skip Button */}
        <button
          onClick={() => scrollToSlide(totalSlides - 1)}
          className="glass-pill pointer-events-auto px-4 py-2 text-xs font-mono font-semibold tracking-wider text-[#020817] flex items-center gap-1.5 cursor-pointer shadow-sm hover:text-[#EF144E]"
        >
          SKIP →
        </button>
      </div>

    </div>
  );
}
