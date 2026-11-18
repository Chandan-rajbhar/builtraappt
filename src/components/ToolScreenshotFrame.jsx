import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ToolScreenshotFrame({ tool }) {
  const frameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance zoom & fade for the screenshot container
      gsap.fromTo(
        '.screenshot-container-anim',
        { opacity: 0, scale: 0.96, y: 18 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.6, 
          ease: 'power3.out', 
          delay: 0.08 
        }
      );
    }, frameRef);

    return () => ctx.revert();
  }, [tool.name]);

  const slug = tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div 
      ref={frameRef} 
      className="screenshot-container-anim w-full rounded-2xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden text-left"
    >
      {/* Sleek Browser Frame Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/90 border-b border-[#E2E8F0] select-none">
        <div className="flex items-center gap-2 min-w-0">
          {/* macOS Window Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          </div>

          {/* Clean URL bar */}
          <span className="text-[11px] font-mono text-[#64748B] pl-2 font-medium truncate">
            builtraa-demo.duckdns.org / project / {slug}
          </span>
        </div>

        {/* Category Badge */}
        <span className="text-[10px] font-mono font-bold text-[#EF144E] bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/60 shrink-0">
          {tool.category}
        </span>
      </div>

      {/* The Respected Platform Screenshot Only */}
      <div className="w-full bg-slate-100/60 flex items-center justify-center overflow-hidden">
        <img
          src={tool.screenshotImg}
          alt={`${tool.name} Dashboard Screenshot`}
          className="w-full h-auto object-cover object-top max-h-[340px] sm:max-h-[370px] lg:max-h-[390px] shadow-inner transition-transform duration-300 hover:scale-[1.01]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
