import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Briefcase, Cloud, Users, Hammer, Truck, Package, 
  AlertTriangle, CheckSquare, Clock, UserPlus, FileText, 
  Phone, ChevronRight, Plus, Calendar, Image as ImageIcon, LayoutGrid
} from 'lucide-react';

const dailyLogModules = [
  {
    id: 1,
    title: "Daily Reports",
    desc: "Consultant-facing daily site report details",
    icon: Briefcase,
    iconColor: "text-[#E11D48]",
    iconBg: "bg-rose-50 border-rose-200/70",
    arrowBg: "bg-rose-50 text-[#E11D48]"
  },
  {
    id: 2,
    title: "Weather Conditions",
    desc: "Current weather and impact on work",
    icon: Cloud,
    iconColor: "text-[#0284C7]",
    iconBg: "bg-sky-50 border-sky-200/70",
    arrowBg: "bg-sky-50 text-[#0284C7]"
  },
  {
    id: 3,
    title: "Manpower / Workforce",
    desc: "Role, company, count, and hours",
    icon: Users,
    iconColor: "text-[#059669]",
    iconBg: "bg-emerald-50 border-emerald-200/70",
    arrowBg: "bg-emerald-50 text-[#059669]"
  },
  {
    id: 4,
    title: "Work Performed",
    desc: "Description, location, and drawings reference",
    icon: Hammer,
    iconColor: "text-[#D97706]",
    iconBg: "bg-amber-50 border-amber-200/70",
    arrowBg: "bg-amber-50 text-[#D97706]"
  },
  {
    id: 5,
    title: "Equipment & Machinery",
    desc: "Machines operated, hours used, and condition for this report",
    icon: Truck,
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-purple-50 border-purple-200/70",
    arrowBg: "bg-purple-50 text-[#7C3AED]"
  },
  {
    id: 6,
    title: "Material Deliveries",
    desc: "Material, quantity, supplier, and time",
    icon: Package,
    iconColor: "text-[#DB2777]",
    iconBg: "bg-pink-50 border-pink-200/70",
    arrowBg: "bg-pink-50 text-[#DB2777]"
  },
  {
    id: 7,
    title: "Safety Observations",
    desc: "Incidents, near misses, toolbox talks",
    icon: AlertTriangle,
    iconColor: "text-[#B45309]",
    iconBg: "bg-yellow-50 border-yellow-200/70",
    arrowBg: "bg-yellow-50 text-[#B45309]"
  },
  {
    id: 8,
    title: "Quality Observations",
    desc: "Inspections, defects, and NCRs",
    icon: CheckSquare,
    iconColor: "text-[#0D9488]",
    iconBg: "bg-teal-50 border-teal-200/70",
    arrowBg: "bg-teal-50 text-[#0D9488]"
  },
  {
    id: 9,
    title: "Delays & Issues",
    desc: "Reason, impact, and responsible party",
    icon: Clock,
    iconColor: "text-[#475569]",
    iconBg: "bg-slate-100 border-slate-200/70",
    arrowBg: "bg-slate-100 text-[#475569]"
  },
  {
    id: 10,
    title: "Visitors on Site",
    desc: "Visitor information and purpose",
    icon: UserPlus,
    iconColor: "text-[#DB2777]",
    iconBg: "bg-pink-50 border-pink-200/70",
    arrowBg: "bg-pink-50 text-[#DB2777]"
  },
  {
    id: 11,
    title: "Notes & Attachments",
    desc: "Supervisor notes and attachments",
    icon: FileText,
    iconColor: "text-[#DC2626]",
    iconBg: "bg-red-50 border-red-200/70",
    arrowBg: "bg-red-50 text-[#DC2626]"
  },
  {
    id: 12,
    title: "Communications Log",
    desc: "Record phone calls, emails, and meetings",
    icon: Phone,
    iconColor: "text-[#E11D48]",
    iconBg: "bg-rose-50 border-rose-200/70",
    arrowBg: "bg-rose-50 text-[#E11D48]"
  },
  {
    id: 13,
    title: "Labour Overtime Tracker",
    desc: "Personal time cards & monthly sheets",
    icon: Clock,
    iconColor: "text-[#E11D48]",
    iconBg: "bg-rose-50 border-rose-200/70",
    arrowBg: "bg-rose-50 text-[#E11D48]"
  }
];

export default function DailyLogsCardsGrid() {
  const containerRef = useRef(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'screenshot'

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered pop-in animation for each of the 13 cards
      gsap.fromTo('.daily-module-card',
        { opacity: 0, y: 22, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.1
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [viewMode]);

  return (
    <div ref={containerRef} className="w-full text-left space-y-3">
      {/* Top Header Control Strip (Clean, directly on background) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-[#EF144E] text-xl">📋</span>
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B1F4B] m-0 leading-tight">
              Daily Logs
            </h3>
            <p className="text-[11px] font-mono text-[#64748B] m-0 leading-none">
              13 Specialized Site Log Modules
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Switcher */}
          <div className="glass-pill p-0.5 flex items-center gap-0.5 shadow-2xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === 'grid'
                  ? 'bg-white text-[#EF144E] shadow-xs font-bold'
                  : 'text-[#64748B] hover:text-[#0B1F4B]'
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Cards Grid</span>
            </button>
            <button
              onClick={() => setViewMode('screenshot')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === 'screenshot'
                  ? 'bg-white text-[#EF144E] shadow-xs font-bold'
                  : 'text-[#64748B] hover:text-[#0B1F4B]'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Screenshot</span>
            </button>
          </div>

          <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-[#EF144E] hover:bg-[#b01e19] text-white font-bold text-xs items-center gap-1 shadow-sm transition-colors cursor-pointer">
            <Plus className="w-3.5 h-3.5" />
            <span>Create Log</span>
          </span>
        </div>
      </div>

      {viewMode === 'grid' ? (
        /* The 13 Separate Cards - Rendered Directly on Background */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[520px] lg:max-h-[560px] overflow-y-auto pr-1">
          {dailyLogModules.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="daily-module-card group relative p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#EF144E]/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 overflow-hidden"
              >
                {/* Left: Icon + Content */}
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  {/* Icon Box */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${item.iconBg} ${item.iconColor} group-hover:scale-105 transition-transform duration-200 shadow-2xs`}>
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="font-heading font-bold text-xs sm:text-sm text-[#0B1F4B] group-hover:text-[#EF144E] transition-colors truncate">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#64748B] leading-snug line-clamp-2">
                      {item.desc}
                    </div>
                  </div>
                </div>

                {/* Right: Chevron Arrow Box */}
                <div className={`w-6 h-6 rounded-lg ${item.arrowBg} flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform`}>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Authentic Screenshot Viewer */
        <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md bg-white">
          <img 
            src="/images/daily-logs-dashboard.jpg" 
            alt="Daily Logs 13 Modules Dashboard" 
            className="w-full h-auto object-cover max-h-[520px]"
          />
        </div>
      )}

      {/* Bottom Live Attendance Bar */}
      <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
        <span className="font-semibold text-[#0B1F4B] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Daily Biometric Attendance: <strong>148 / 150 Workers</strong></span>
        </span>
        <span className="font-mono font-bold text-[#EF144E]">
          98.6% Attendance Compliance
        </span>
      </div>
    </div>
  );
}
