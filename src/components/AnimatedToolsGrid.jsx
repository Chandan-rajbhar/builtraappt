import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { toolsList } from '../data/presentationData';
import { 
  ClipboardList, Calendar, CheckSquare, Folder, FileText, 
  Layers, Send, Package, Truck, Wallet, Briefcase, Eye, 
  ListChecks, Users, ArrowUpRight
} from 'lucide-react';

const toolConfigs = [
  { 
    name: "Daily Log", 
    icon: ClipboardList, 
    color: "text-rose-600 bg-rose-50 border-rose-200", 
    dot: "bg-rose-500",
    pos: { top: '3%', left: '6%', rot: -6, z: 12 }
  },
  { 
    name: "Schedule", 
    icon: Calendar, 
    color: "text-red-600 bg-red-50 border-red-200", 
    dot: "bg-red-500",
    pos: { top: '1%', left: '40%', rot: 4, z: 14 }
  },
  { 
    name: "Tasks", 
    icon: CheckSquare, 
    color: "text-amber-600 bg-amber-50 border-amber-200", 
    dot: "bg-amber-500",
    pos: { top: '4%', left: '72%', rot: -4, z: 13 }
  },
  { 
    name: "Documents", 
    icon: Folder, 
    color: "text-emerald-600 bg-emerald-50 border-emerald-200", 
    dot: "bg-emerald-500",
    pos: { top: '21%', left: '20%', rot: 5, z: 15 }
  },
  { 
    name: "RFIs", 
    icon: FileText, 
    color: "text-sky-600 bg-sky-50 border-sky-200", 
    dot: "bg-sky-500",
    pos: { top: '19%', left: '54%', rot: -5, z: 16 }
  },
  { 
    name: "Submittals", 
    icon: Layers, 
    color: "text-indigo-600 bg-indigo-50 border-indigo-200", 
    dot: "bg-indigo-500",
    pos: { top: '22%', left: '76%', rot: 3, z: 14 }
  },
  { 
    name: "Transmittals", 
    icon: Send, 
    color: "text-blue-600 bg-blue-50 border-blue-200", 
    dot: "bg-blue-500",
    pos: { top: '39%', left: '3%', rot: -4, z: 17 }
  },
  { 
    name: "Material Request", 
    icon: Package, 
    color: "text-teal-600 bg-teal-50 border-teal-200", 
    dot: "bg-teal-500",
    pos: { top: '37%', left: '37%', rot: 6, z: 18 }
  },
  { 
    name: "Operational Assets Request", 
    icon: Truck, 
    color: "text-purple-600 bg-purple-50 border-purple-200", 
    dot: "bg-purple-500",
    pos: { top: '40%', left: '68%', rot: -3, z: 15 }
  },
  { 
    name: "Budget & Costs", 
    icon: Wallet, 
    color: "text-rose-600 bg-rose-50 border-rose-200", 
    dot: "bg-rose-500",
    pos: { top: '57%', left: '17%', rot: 5, z: 19 }
  },
  { 
    name: "Contracts", 
    icon: Briefcase, 
    color: "text-amber-600 bg-amber-50 border-amber-200", 
    dot: "bg-amber-500",
    pos: { top: '56%', left: '50%', rot: -4, z: 20 }
  },
  { 
    name: "Observations", 
    icon: Eye, 
    color: "text-teal-600 bg-teal-50 border-teal-200", 
    dot: "bg-teal-500",
    pos: { top: '58%', left: '75%', rot: 5, z: 16 }
  },
  { 
    name: "Punch List", 
    icon: ListChecks, 
    color: "text-orange-600 bg-orange-50 border-orange-200", 
    dot: "bg-orange-500",
    pos: { top: '75%', left: '5%', rot: -5, z: 21 }
  },
  { 
    name: "Project Team", 
    icon: Users, 
    color: "text-cyan-600 bg-cyan-50 border-cyan-200", 
    dot: "bg-cyan-500",
    pos: { top: '75%', left: '42%', rot: 3, z: 22 }
  }
];

export default function AnimatedToolsGrid({ onSelectTool }) {
  const containerRef = useRef(null);
  const floatingTweensRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Pop-in Entrance Animation
      gsap.fromTo('.floating-square-tile',
        { 
          opacity: 0, 
          scale: 0.3, 
          y: 40,
          rotation: (i) => toolConfigs[i]?.pos.rot * 2 || 0 
        },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          rotation: (i) => toolConfigs[i]?.pos.rot || 0,
          duration: 0.8, 
          stagger: { amount: 0.6, from: "random" }, 
          ease: 'back.out(1.7)', 
          delay: 0.15 
        }
      );

      // 2. Organic Floating Wave Loop on each square
      const tiles = containerRef.current.querySelectorAll('.floating-square-tile');
      tiles.forEach((tile, idx) => {
        const baseRot = toolConfigs[idx]?.pos.rot || 0;
        const tween = gsap.to(tile, {
          y: idx % 2 === 0 ? -10 : 10,
          rotation: baseRot + (idx % 2 === 0 ? 2 : -2),
          duration: 2.4 + (idx % 5) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: idx * 0.12
        });
        floatingTweensRef.current.push(tween);
      });
    }, containerRef);

    return () => {
      ctx.revert();
      floatingTweensRef.current.forEach(t => t.kill && t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[540px] sm:h-[580px] lg:h-[620px] select-none"
    >
      {/* 14 Randomly/Organically Placed Big Square Cards */}
      {toolConfigs.map((item, idx) => {
        const IconComponent = item.icon;
        const slideNumber = String(idx + 1).padStart(2, '0');
        const toolIndex = idx;

        return (
          <div
            key={item.name}
            onClick={() => onSelectTool && onSelectTool(toolIndex + 1)}
            style={{
              top: item.pos.top,
              left: item.pos.left,
              zIndex: item.pos.z,
              transform: `rotate(${item.pos.rot}deg)`
            }}
            className="floating-square-tile absolute w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl sm:rounded-3xl bg-white border border-[var(--line)] shadow-lg hover:shadow-2xl hover:border-[var(--acc)] transition-all duration-300 cursor-pointer p-2.5 sm:p-3 flex flex-col justify-between group hover:z-50 hover:scale-110 hover:rotate-0"
          >
            {/* Top Row: Tool Number & Category Dot */}
            <div className="flex items-center justify-between w-full">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-400 group-hover:text-[var(--acc)] transition-colors">
                {slideNumber}
              </span>
              <div className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${item.dot} shadow-2xs animate-pulse`}></span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[var(--acc)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>

            {/* Center: Big Vibrant Branded Icon */}
            <div className="flex items-center justify-center my-auto">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border ${item.color} group-hover:scale-110 transition-transform duration-200 shadow-2xs`}>
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>

            {/* Bottom: Tool Name */}
            <div className="w-full text-center">
              <span className="font-heading font-bold text-[11px] sm:text-xs text-[var(--text)] group-hover:text-[var(--acc)] transition-colors block truncate leading-tight">
                {item.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
