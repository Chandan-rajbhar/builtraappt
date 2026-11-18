import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const toolWorkflows = {
  "Daily Log": [
    { step: "01", title: "Field Capture", desc: "Foremen log crew hours, equipment & climate on site" },
    { step: "02", title: "Auto Aggregation", desc: "Biometric punches & delivery tickets sync instantly" },
    { step: "03", title: "PM Verification", desc: "Project manager reviews site delays & safety talks" },
    { step: "04", title: "Consultant Sign-off", desc: "Official daily report stamped & locked into audit" }
  ],
  "Schedule": [
    { step: "01", title: "WBS Import", desc: "Upload Primavera P6 / MS Project .xer baseline" },
    { step: "02", title: "CPM Critical Path", desc: "Automated dependency calculations & float detection" },
    { step: "03", title: "Field Execution", desc: "Actual site dates dynamically update Gantt timeline" },
    { step: "04", title: "Variance Alert", desc: "Instant automated alerts for critical path delays" }
  ],
  "Tasks": [
    { step: "01", title: "Task Creation", desc: "Pin site activity with location & discipline tags" },
    { step: "02", title: "SLA Ownership", desc: "Designate subcontractor assignee & hard due date" },
    { step: "03", title: "Site Execution", desc: "Subcontractor submits proof photos & completion" },
    { step: "04", title: "QA/QC Closeout", desc: "Site engineer verifies quality & marks 100% done" }
  ],
  "Documents": [
    { step: "01", title: "Batch Upload", desc: "Upload Architectural, Structural & MEP packages" },
    { step: "02", title: "Auto Versioning", desc: "Enforce revision control from Rev 01 to Rev 04 IFC" },
    { step: "03", title: "Cloud Markup", desc: "Engineers mark clashes with live digital redlines" },
    { step: "04", title: "Controlled Issue", desc: "Approved drawings distributed to site teams" }
  ],
  "RFIs": [
    { step: "01", title: "Raise Query", desc: "Site engineer flags drawing clash or technical doubt" },
    { step: "02", title: "Discipline Route", desc: "Automated routing to lead consultant Marcus Vance" },
    { step: "03", title: "Design Response", desc: "Consultant provides technical sketch & clarification" },
    { step: "04", title: "Formal Closure", desc: "Answer logged into contractual project registry" }
  ],
  "Submittals": [
    { step: "01", title: "Subcontractor Spec", desc: "Contractor submits material sample & specs" },
    { step: "02", title: "GC Vetting", desc: "General Contractor QA verifies spec compliance" },
    { step: "03", title: "Consultant Review", desc: "Marked Approved, Approved as Noted, or Revise" },
    { step: "04", title: "Procure Release", desc: "Approved submittal triggers material fabrication" }
  ],
  "Transmittals": [
    { step: "01", title: "Package Assembly", desc: "Bundle IFC drawings, test reports & calculations" },
    { step: "02", title: "Select Recipient", desc: "Target formal stakeholder: Client, Consultant, Govt" },
    { step: "03", title: "Electronic Issue", desc: "Generate numbered transmittal TR-0001 to TR-0005" },
    { step: "04", title: "Proof of Issue", desc: "Digital receipt timestamped for dispute protection" }
  ],
  "Material Request": [
    { step: "01", title: "Site Requisition", desc: "Site supervisor requests concrete, rebar or drywall" },
    { step: "02", title: "BOQ Validation", desc: "System checks quantities against BOQ budget caps" },
    { step: "03", title: "PM Sign-off", desc: "Project Manager approves requisition with 1-click" },
    { step: "04", title: "Site Delivery", desc: "Supplier dispatches material with delivery challan" }
  ],
  "Operational Assets Request": [
    { step: "01", title: "Machinery Need", desc: "Site requests crane, excavator, pump or equipment" },
    { step: "02", title: "Fleet Check", desc: "Plant dispatcher checks equipment readiness" },
    { step: "03", title: "Mobilization", desc: "Machinery deployed to site with certified operator" },
    { step: "04", title: "Return Sign-off", desc: "De-mobilization inspection & digital asset return" }
  ],
  "Budget & Costs": [
    { step: "01", title: "Baseline Lock", desc: "Lock approved budget across CSI / WBS Divisions" },
    { step: "02", title: "Commitment POs", desc: "Subcontracts & POs committed against cost codes" },
    { step: "03", title: "Direct Costs", desc: "Daily labor, plant & material expenses booked live" },
    { step: "04", title: "Earned Value", desc: "Real-time variance analysis & completion forecast" }
  ],
  "Contracts": [
    { step: "01", title: "Contract Setup", desc: "Draft FIDIC Red Book, MEP & Finishes subcontracts" },
    { step: "02", title: "Commercial Vetting", desc: "Rates, milestones & retention percentages verified" },
    { step: "03", title: "Digital Signing", desc: "Multi-party contractual approval & e-signatures" },
    { step: "04", title: "Change Orders", desc: "Formal scope variations logged with revised totals" }
  ],
  "Observations": [
    { step: "01", title: "Field Detection", desc: "Safety/Quality officer spots edge or rebar defect" },
    { step: "02", title: "Tag & Assign", desc: "Tagged as Critical/High with engineer target date" },
    { step: "03", title: "Site Rectify", desc: "Trade contractor resolves hazard & uploads proof" },
    { step: "04", title: "HSE Closeout", desc: "Safety inspector validates fix and signs off" }
  ],
  "Punch List": [
    { step: "01", title: "Snag Spotting", desc: "Inspect finish, door binding or tile holowness" },
    { step: "02", title: "Location Pin", desc: "Pin defect to exact room: Stairwell 2, Unit 502" },
    { step: "03", title: "Corrective Work", desc: "Trade crew conducts corrective repair & re-finishing" },
    { step: "04", title: "Handover Stamp", desc: "Client final inspection & snag-free certificate" }
  ],
  "Project Team": [
    { step: "01", title: "Invite Member", desc: "Add engineers, safety & foremen with corporate ID" },
    { step: "02", title: "RBAC Governance", desc: "Assign role: Executive, Management, Site Staff" },
    { step: "03", title: "Org Hierarchy", desc: "Auto-generate organizational reporting chain" },
    { step: "04", title: "Unified Access", desc: "Instant 1-click cross-collaboration on all tools" }
  ]
};

export default function ToolWorkflowPath({ toolName, isActive }) {
  const containerRef = useRef(null);
  const steps = toolWorkflows[toolName] || toolWorkflows["Daily Log"];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll('.step-card-anim');
      const progressBars = containerRef.current.querySelectorAll('.step-progress-fill');

      if (!isActive) {
        gsap.set(cards, { opacity: 0, y: 20, scale: 0.92 });
        gsap.set(progressBars, { width: '0%' });
        return;
      }

      // Reset initial state before animation
      gsap.set(cards, { opacity: 0, y: 24, scale: 0.9, filter: 'blur(3px)' });
      gsap.set(progressBars, { width: '0%' });

      // Sequential 1-by-1 entrance timeline (Card 1 -> Card 2 -> Card 3 -> Card 4)
      const tl = gsap.timeline({ delay: 0.25 });

      cards.forEach((card, idx) => {
        const progressBar = card.querySelector('.step-progress-fill');
        const badge = card.querySelector('.step-badge');

        // Step card pops in
        tl.fromTo(
          card,
          { opacity: 0, y: 24, scale: 0.9, filter: 'blur(3px)' },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            filter: 'blur(0px)', 
            duration: 0.38, 
            ease: 'back.out(1.4)' 
          }
        );

        // Badge pops in
        if (badge) {
          tl.fromTo(
            badge,
            { scale: 0.6, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.2, ease: 'back.out(2)' },
            '-=0.25'
          );
        }

        // Progress line sweeps across the card bottom
        if (progressBar) {
          tl.fromTo(
            progressBar,
            { width: '0%' },
            { width: '100%', duration: 0.22, ease: 'power2.out' },
            '-=0.12'
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [toolName, isActive]);

  return (
    <div ref={containerRef} className="w-full space-y-1.5 text-left select-none">
      {/* Header Label - Minimal & Unboxed */}
      <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[#020817] px-1">
        <span className="text-[#EF144E]">LIFECYCLE WORKFLOW</span>
        <span className="text-[#94A3B8]">•</span>
        <span className="text-[#64748B] font-medium text-[11px]">How {toolName} Executes on Site</span>
      </div>

      {/* The 4 Standalone Step Cards (No Outer Card Wrapping) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {steps.map((st, sIdx) => {
          const isLast = sIdx === steps.length - 1;
          return (
            <div 
              key={sIdx}
              className="step-card-anim group relative p-2.5 sm:p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#EF144E]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between shadow-xs"
            >
              {/* Card Top: Step Badge & Phase Label */}
              <div className="flex items-center justify-between mb-1.5">
                <span className={`step-badge w-5 h-5 rounded-full font-mono text-[10px] font-bold flex items-center justify-center transition-colors ${
                  isLast 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-rose-50 text-[#EF144E] border border-rose-200'
                }`}>
                  {st.step}
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8] group-hover:text-[#64748B] transition-colors">
                  Phase {sIdx + 1}
                </span>
              </div>

              {/* Card Title */}
              <div className="font-heading font-bold text-xs text-[#020817] group-hover:text-[#EF144E] transition-colors truncate leading-tight">
                {st.title}
              </div>

              {/* Card Description */}
              <p className="text-[10px] text-[#64748B] leading-tight line-clamp-2 mt-1 m-0">
                {st.desc}
              </p>

              {/* Bottom Animated Progress Line */}
              <div className="mt-2 w-full h-[2px] bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`step-progress-fill h-full rounded-full ${
                    isLast ? 'bg-emerald-500' : 'bg-[#EF144E]'
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
