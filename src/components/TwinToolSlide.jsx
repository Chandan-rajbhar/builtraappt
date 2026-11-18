import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ClipboardList, 
  Calendar, 
  CheckSquare, 
  Folder, 
  FileText, 
  Layers, 
  Send, 
  Package, 
  Truck, 
  Wallet, 
  Briefcase, 
  Eye, 
  ListChecks, 
  Users,
  CheckCircle2, 
  Clock, 
  Activity, 
  ShieldCheck, 
  ShieldAlert, 
  RefreshCw 
} from 'lucide-react';
import { toolWorkflows } from './ToolWorkflowPath';

const toolIcons = {
  "Daily Log": ClipboardList,
  "Schedule": Calendar,
  "Tasks": CheckSquare,
  "Documents": Folder,
  "RFIs": FileText,
  "Submittals": Layers,
  "Transmittals": Send,
  "Material Request": Package,
  "Operational Assets Request": Truck,
  "Budget & Costs": Wallet,
  "Contracts": Briefcase,
  "Observations": Eye,
  "Punch List": ListChecks,
  "Project Team": Users,
};

const whyItHelpsMap = {
  "Daily Log": "Ensures precise time records and daily site activity feed directly into payroll & audit records.",
  "Schedule": "Eliminates schedule blind spots with live critical path tracking and instant delay warnings.",
  "Tasks": "Drives field subcontractor accountability and eliminates email delays on critical tasks.",
  "Documents": "Prevents costly rework by guaranteeing site crews build only from latest Rev IFC drawings.",
  "RFIs": "Accelerates technical design clarifications to eliminate costly site work stoppages.",
  "Submittals": "Guarantees formal material compliance before procurement, fabrication and delivery.",
  "Transmittals": "Creates a legally defensible digital audit trail protecting against claims and disputes.",
  "Material Request": "Stops site over-orders by validating requisitions against live BOQ budget balances.",
  "Operational Assets Request": "Maximizes equipment utilization and slashes idle plant machinery rental costs.",
  "Budget & Costs": "Protects contractor profit margins with live earned value and cost variance forecasts.",
  "Contracts": "Enforces FIDIC commercial terms, retention caps, and change order governance.",
  "Observations": "Proactively identifies safety hazards and quality defects before they cause accidents.",
  "Punch List": "Accelerates final client handover inspections with zero lingering site snags.",
  "Project Team": "Ensures unified, secure role-based access control across contractors and consultants."
};

export default function TwinToolSlide({ 
  tool1, 
  tool2, 
  slideNumber = "02", 
  category = "MANAGEMENT & EXECUTION",
  titlePrefix = "Daily Log",
  titleHighlight = "& Schedule Management",
  subtitle = "Record site execution activities connected directly to structured project timelines and milestones.",
  isActive = false
}) {
  const containerRef = useRef(null);

  // GSAP Entrance Animations
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const header = containerRef.current.querySelector('.twin-header');
      const leftCard = containerRef.current.querySelector('.twin-card-left');
      const rightCard = containerRef.current.querySelector('.twin-card-right');
      const leftSteps = containerRef.current.querySelectorAll('.twin-card-left .step-pill');
      const rightSteps = containerRef.current.querySelectorAll('.twin-card-right .step-pill');

      if (!isActive) {
        gsap.set([header, leftCard, rightCard], { opacity: 0 });
        return;
      }

      // 1. Header slides down
      gsap.fromTo(header,
        { opacity: 0, y: -22 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }
      );

      // 2. Left card slides in from left
      gsap.fromTo(leftCard,
        { opacity: 0, x: -60, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.65, ease: 'power3.out', delay: 0.08 }
      );

      // 3. Right card slides in from right
      gsap.fromTo(rightCard,
        { opacity: 0, x: 60, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.65, ease: 'power3.out', delay: 0.12 }
      );

      // 4. Step pills sequence 1-by-1 inside both cards
      if (leftSteps.length > 0) {
        gsap.fromTo(leftSteps,
          { opacity: 0, y: 12, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.08, ease: 'back.out(1.4)', delay: 0.35 }
        );
      }
      if (rightSteps.length > 0) {
        gsap.fromTo(rightSteps,
          { opacity: 0, y: 12, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.08, ease: 'back.out(1.4)', delay: 0.45 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const steps1 = toolWorkflows[tool1?.name] || [];
  const steps2 = toolWorkflows[tool2?.name] || [];

  const Icon1 = toolIcons[tool1?.name] || ClipboardList;
  const Icon2 = toolIcons[tool2?.name] || Calendar;

  const urlSlug1 = tool1?.name ? tool1.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-') : 'tool';
  const urlSlug2 = tool2?.name ? tool2.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-') : 'tool';

  const whyItHelps1 = whyItHelpsMap[tool1?.name] || "Ensures seamless execution and accountability across project teams.";
  const whyItHelps2 = whyItHelpsMap[tool2?.name] || "Eliminates delays and maintains continuous quality compliance.";

  // Point icon helper
  const getPointIcon = (index) => {
    if (index === 0) return <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />;
    if (index === 1) return <Activity className="w-3.5 h-3.5 text-amber-600" />;
    return <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />;
  };

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-start">
      {/* Top Header - Category & Main Title */}
      <div className="twin-header mb-3 md:mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF144E] mb-1 font-mono">
          {slideNumber} / {category}
        </p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight text-[#020817] leading-tight">
          {titlePrefix} <span className="text-[#EF144E]">{titleHighlight}</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#64748B] mt-1 max-w-4xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* 2-Card Twin Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 flex-1 items-stretch">
        
        {/* ================= LEFT CARD (Tool 1) ================= */}
        <div className="twin-card-left bg-white rounded-2xl border border-[#E2E8F0] border-l-4 border-l-[#EF144E] p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 hover:border-l-[#EF144E] transition-colors">
          <div className="space-y-3 sm:space-y-3.5">
            {/* Card Header: Icon + Title + Tagline */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-[#EF144E]">
                <Icon1 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-lg text-[#020817] leading-snug">
                  {tool1?.name}
                </h3>
                <p className="text-xs text-[#64748B] leading-tight line-clamp-1 mt-0.5">
                  {tool1?.tagline}
                </p>
              </div>
            </div>

            {/* Browser Screenshot Mockup */}
            <div className="rounded-xl border border-[#E2E8F0] bg-slate-50/50 overflow-hidden shadow-2xs">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-[10px] font-mono text-[#64748B] px-2 py-0.5 bg-white rounded border border-[#E2E8F0]/70 truncate max-w-[220px]">
                  builtraa-demo.duckdns.org / project / {urlSlug1}
                </div>
                <div className="w-6"></div>
              </div>
              {/* Image */}
              <div className="h-[135px] sm:h-[155px] md:h-[165px] bg-slate-100 overflow-hidden relative">
                <img 
                  src={tool1?.screenshotImg} 
                  alt={tool1?.name} 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 3 Key Points */}
            <div className="space-y-1.5 sm:space-y-2">
              {tool1?.points?.map((pt, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {getPointIcon(idx)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading font-bold text-xs text-[#020817] leading-tight">
                      {pt.title}
                    </h4>
                    <p className="text-[11px] text-[#64748B] leading-tight line-clamp-1 mt-0.5">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: STEPS + Why It Helps */}
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-2.5">
            {/* Steps Row */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#EF144E]">
                STEPS:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {steps1.map((st, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="step-pill inline-flex items-center gap-1 text-[10px] font-medium text-[#020817] bg-slate-100/80 border border-slate-200/80 px-2 py-0.5 rounded-full"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-rose-50 text-[#EF144E] text-[9px] font-mono font-bold flex items-center justify-center">
                      {sIdx + 1}
                    </span>
                    <span className="truncate max-w-[105px]">{st.title}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Why It Helps Callout */}
            <div className="p-2 px-2.5 rounded-lg bg-sky-50/70 border border-sky-100/80 text-[11px] text-[#020817] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <p className="m-0 leading-tight">
                <strong className="font-bold text-[#020817]">Why it helps:</strong> {whyItHelps1}
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CARD (Tool 2) ================= */}
        <div className="twin-card-right bg-white rounded-2xl border border-[#E2E8F0] border-l-4 border-l-[#EF144E] p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 hover:border-l-[#EF144E] transition-colors">
          <div className="space-y-3 sm:space-y-3.5">
            {/* Card Header: Icon + Title + Tagline */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-[#EF144E]">
                <Icon2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-lg text-[#020817] leading-snug">
                  {tool2?.name}
                </h3>
                <p className="text-xs text-[#64748B] leading-tight line-clamp-1 mt-0.5">
                  {tool2?.tagline}
                </p>
              </div>
            </div>

            {/* Browser Screenshot Mockup */}
            <div className="rounded-xl border border-[#E2E8F0] bg-slate-50/50 overflow-hidden shadow-2xs">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-[10px] font-mono text-[#64748B] px-2 py-0.5 bg-white rounded border border-[#E2E8F0]/70 truncate max-w-[220px]">
                  builtraa-demo.duckdns.org / project / {urlSlug2}
                </div>
                <div className="w-6"></div>
              </div>
              {/* Image */}
              <div className="h-[135px] sm:h-[155px] md:h-[165px] bg-slate-100 overflow-hidden relative">
                <img 
                  src={tool2?.screenshotImg} 
                  alt={tool2?.name} 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 3 Key Points */}
            <div className="space-y-1.5 sm:space-y-2">
              {tool2?.points?.map((pt, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {getPointIcon(idx)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading font-bold text-xs text-[#020817] leading-tight">
                      {pt.title}
                    </h4>
                    <p className="text-[11px] text-[#64748B] leading-tight line-clamp-1 mt-0.5">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: STEPS + Why It Helps */}
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-2.5">
            {/* Steps Row */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#EF144E]">
                STEPS:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {steps2.map((st, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="step-pill inline-flex items-center gap-1 text-[10px] font-medium text-[#020817] bg-slate-100/80 border border-slate-200/80 px-2 py-0.5 rounded-full"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-rose-50 text-[#EF144E] text-[9px] font-mono font-bold flex items-center justify-center">
                      {sIdx + 1}
                    </span>
                    <span className="truncate max-w-[105px]">{st.title}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Why It Helps Callout */}
            <div className="p-2 px-2.5 rounded-lg bg-sky-50/70 border border-sky-100/80 text-[11px] text-[#020817] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <p className="m-0 leading-tight">
                <strong className="font-bold text-[#020817]">Why it helps:</strong> {whyItHelps2}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
