export const toolsList = [
  {
    name: "Daily Log",
    tagline: "Record what happened on site, every day across 13 specialized logs",
    category: "Management",
    screenshotImg: "/images/daily-logs-dashboard.jpg",
    points: [
      { title: "Manpower & Work Performed", desc: "Track crew headcount, hours, site location, and drawings reference" },
      { title: "Equipment, Materials & Weather", desc: "Capture machine runtime, material deliveries, and climate impact" },
      { title: "Safety, Quality & Delays", desc: "Log toolbox talks, defects, NCRs, and root-cause schedule blockers" }
    ],
    metric: "148 Workers • 13 Modules Synced",
    meterLabel: "Daily Biometric Attendance & Log Health",
    meterPercent: 98.6,
    dailyLogDate: "November 18th, 2026",
    subSections: [
      { id: 1, title: "Daily Reports", desc: "Consultant-facing daily site report details", badgeColor: "text-rose-600 bg-rose-50" },
      { id: 2, title: "Weather Conditions", desc: "Current weather and impact on work", badgeColor: "text-sky-600 bg-sky-50" },
      { id: 3, title: "Manpower / Workforce", desc: "Role, company, count, and hours", badgeColor: "text-emerald-600 bg-emerald-50" },
      { id: 4, title: "Work Performed", desc: "Description, location, and drawings reference", badgeColor: "text-amber-600 bg-amber-50" },
      { id: 5, title: "Equipment & Machinery", desc: "Machines operated, hours used, and condition", badgeColor: "text-purple-600 bg-purple-50" },
      { id: 6, title: "Material Deliveries", desc: "Material quantity, supplier, and time", badgeColor: "text-pink-600 bg-pink-50" },
      { id: 7, title: "Safety Observations", desc: "Incidents, near misses, toolbox talks", badgeColor: "text-yellow-700 bg-yellow-50" },
      { id: 8, title: "Quality Observations", desc: "Inspections, defects, and NCRs", badgeColor: "text-teal-600 bg-teal-50" },
      { id: 9, title: "Delays & Issues", desc: "Reason, impact, and responsible party", badgeColor: "text-slate-600 bg-slate-100" },
      { id: 10, title: "Visitors on Site", desc: "Visitor information and purpose", badgeColor: "text-pink-600 bg-pink-50" },
      { id: 11, title: "Notes & Attachments", desc: "Supervisor notes and attachments", badgeColor: "text-red-600 bg-red-50" },
      { id: 12, title: "Communications Log", desc: "Record phone calls, emails, and meetings", badgeColor: "text-rose-600 bg-rose-50" },
      { id: 13, title: "Labour Overtime Tracker", desc: "Personal time cards & monthly sheets", badgeColor: "text-rose-600 bg-rose-50" }
    ],
    bars: [
      { label: "Mon", val: "65%" },
      { label: "Tue", val: "76%" },
      { label: "Wed", val: "84%" },
      { label: "Thu", val: "98%", active: true },
      { label: "Fri", val: "88%" },
      { label: "Sat", val: "55%" }
    ]
  },
  {
    name: "Schedule",
    tagline: "Manage your project timelines, 7 WBS phases and Gantt events",
    category: "Management",
    screenshotImg: "/images/schedule-gantt-dashboard.png",
    points: [
      { title: "WBS 7-Phase Structure", desc: "Track from Pre-Construction & Substructure to Superstructure & Handover" },
      { title: "Primavera P6 & MS Project Sync", desc: "Upload .xer / .xml files with automated task duration & dependency calculations" },
      { title: "Live Today Marker & Critical Path", desc: "Real-time timeline tracking compares planned schedule against actual field progress" }
    ],
    metric: "7 Phases Active • +2 Days Ahead",
    meterLabel: "Overall Schedule Execution Progress",
    meterPercent: 68.4,
    schedulePhases: [
      { id: 1, name: "Phase 1: Pre-Construction & Mobilization", start: "09/01/25", end: "09/29/25", duration: "28d", pct: 100, color: "bg-emerald-600" },
      { id: 2, name: "Phase 2: Substructure & Earthworks", start: "09/29/25", end: "12/16/25", duration: "78d", pct: 100, color: "bg-emerald-600" },
      { id: 3, name: "Phase 3: Reinforced Concrete Superstructure", start: "12/16/25", end: "05/07/26", duration: "142d", pct: 78, color: "bg-[#ef144e]" },
      { id: 4, name: "Phase 4: MEP Services & Infrastructure", start: "02/20/26", end: "06/24/26", duration: "124d", pct: 54, color: "bg-amber-500" },
      { id: 5, name: "Phase 5: External Envelope & Glazing", start: "05/07/26", end: "07/01/26", duration: "55d", pct: 25, color: "bg-sky-500" },
      { id: 6, name: "Phase 6: Architectural Finishes", start: "06/24/26", end: "09/10/26", duration: "78d", pct: 12, color: "bg-slate-400" },
      { id: 7, name: "Phase 7: Testing, Commissioning & Handover", start: "09/10/26", end: "09/29/26", duration: "19d", pct: 0, color: "bg-slate-300" }
    ]
  },
  {
    name: "Tasks",
    tagline: "Assign work and track field execution to 100% completion",
    category: "Management",
    screenshotImg: "/images/tasks-dashboard.png",
    points: [
      { title: "Clear Ownership & SLA", desc: "Every task has an assignee, priority level, and hard due date" },
      { title: "Status Flow Pipeline", desc: "To Do, In Progress, Review and Completed status stages" },
      { title: "Subcontractor Accountability", desc: "Track work orders and inspection mock-ups without endless email threads" }
    ],
    metric: "5 Total Tasks • 1 In Progress • 2 To Do",
    meterLabel: "Field Task Velocity & Completion SLA",
    meterPercent: 80.0,
    kpis: [
      { label: "Total Tasks", count: 5, color: "bg-rose-50 text-rose-700 border-rose-200" },
      { label: "In Progress", count: 1, color: "bg-amber-50 text-amber-700 border-amber-200" },
      { label: "To Do", count: 2, color: "bg-sky-50 text-sky-700 border-sky-200" },
      { label: "Completed", count: 1, color: "bg-emerald-50 text-emerald-700 border-emerald-200" }
    ],
    items: [
      { task: "Pre-Pour Reinforcement & Embedded...", category: "Concrete Work", status: "In Progress", statusColor: "text-rose-600 border-rose-300 bg-rose-50/50", priority: "High", priorityColor: "text-amber-700 bg-amber-50", assignee: "TA", due: "Nov 05, 2026" },
      { task: "Subcontractor Sample Mock-Up Revi...", category: "Material Approval", status: "Review", statusColor: "text-amber-600 border-amber-300 bg-amber-50/50", priority: "Medium", priorityColor: "text-yellow-700 bg-yellow-50", assignee: "NA", due: "Nov 06, 2026" },
      { task: "Hydrostatic Pressure Testing on Chill...", category: "Testing & Commissioning", status: "To Do", statusColor: "text-slate-600 border-slate-300 bg-slate-50", priority: "Critical", priorityColor: "text-red-700 bg-red-50", assignee: "ER", due: "Nov 07, 2026" },
      { task: "Backfill Compaction Dry Density Testi...", category: "Quality Control", status: "To Do", statusColor: "text-slate-600 border-slate-300 bg-slate-50", priority: "Low", priorityColor: "text-emerald-700 bg-emerald-50", assignee: "RM", due: "Nov 08, 2026" },
      { task: "Clash Detection Resolution - Level 2 B...", category: "Shop Drawing Review", status: "Completed", statusColor: "text-emerald-600 border-emerald-300 bg-emerald-50/50", priority: "Medium", priorityColor: "text-yellow-700 bg-yellow-50", assignee: "DC", due: "Oct 29, 2026" }
    ]
  },
  {
    name: "Documents",
    tagline: "One controlled home for architectural, structural & MEP drawings",
    category: "Management",
    screenshotImg: "/images/documents-dashboard.png",
    points: [
      { title: "Standardized Folder Architecture", desc: "Organized by discipline: Architectural, Structural, MEP, BOQ & As-Builts" },
      { title: "Drawings View & CAD Integration", desc: "Direct sheet inspection, drawing revisions, and transmittal generation" },
      { title: "Audit & Version Control", desc: "Batch upload capabilities with timestamped latest-revision enforcement" }
    ],
    metric: "5 Core Discipline Folders • Rev 04 IFC",
    meterLabel: "Discipline Document Index & ISO Standards",
    meterPercent: 100,
    folders: [
      { id: "01", name: "01 Architectural Drawings", updated: "11/3/2026, 4:55:53 PM", tag: "IFC Approved" },
      { id: "02", name: "02 Structural Engineering", updated: "11/3/2026, 4:55:53 PM", tag: "Calculations & Details" },
      { id: "03", name: "03 MEP Building Services", updated: "11/3/2026, 4:55:53 PM", tag: "HVAC & Electrical" },
      { id: "04", name: "04 Project Specifications & BOQ", updated: "11/3/2026, 4:55:53 PM", tag: "Contractual Baseline" },
      { id: "05", name: "05 Handover & As-Built Records", updated: "11/3/2026, 4:55:53 PM", tag: "Commissioning" }
    ]
  },
  {
    name: "RFIs",
    tagline: "Resolve technical queries between site, consultant & design team",
    category: "Management",
    screenshotImg: "/images/rfis-dashboard.png",
    points: [
      { title: "Formal RFI Registry", desc: "Track every technical query from submission through formal consultant sign-off" },
      { title: "Overdue & SLA Tracking", desc: "Real-time overdue alerts and average cycle age (42 days tracking)" },
      { title: "Discipline Tagging", desc: "Tagged by Civil, Structural, MEP, and Architecture with Marcus Vance ownership" }
    ],
    metric: "5 RFIs • 2 Overdue • 42 Days Avg. Age",
    meterLabel: "RFI Turnaround SLA & Technical Closure",
    meterPercent: 60.0,
    kpis: [
      { label: "Total RFIs", count: 5, color: "bg-rose-50 text-rose-700 border-rose-200" },
      { label: "Open", count: 1, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
      { label: "Pending", count: 1, color: "bg-amber-50 text-amber-700 border-amber-200" },
      { label: "Overdue", count: 2, color: "bg-rose-50 text-rose-700 border-rose-200" },
      { label: "Avg. Age", count: "42 days", color: "bg-purple-50 text-purple-700 border-purple-200" }
    ],
    items: [
      { num: "MCC-MNM-26-RFI-005", title: "Waterproofing Termination Detail at Seismic Expansio...", status: "Pending", priority: "High", cat: "CIV", assigned: "Marcus Vance", due: "Oct 28, 2026", days: "-20" },
      { num: "MCC-MNM-26-RFI-004", title: "Chilled Water Circulation Pump Electrical Feeder Sizin...", status: "Closed", priority: "Medium", cat: "MEP", assigned: "Marcus Vance", due: "Oct 23, 2026", days: "-25" },
      { num: "MCC-MNM-26-RFI-003", title: "Fire Door Rating and Structural Opening Tolerances at...", status: "Answered", priority: "High", cat: "CIV", assigned: "Marcus Vance", due: "Oct 18, 2026", days: "-30" },
      { num: "MCC-MNM-26-RFI-002", title: "Discrepancy Between Architectural Ceiling Height an...", status: "Open", priority: "Critical", cat: "MEP", assigned: "Marcus Vance", due: "Oct 13, 2026", days: "-35" },
      { num: "MCC-MNM-26-RFI-001", title: "Structural Column Reinforcement Clash with Undergr...", status: "Answered", priority: "High", cat: "CIV", assigned: "Marcus Vance", due: "Oct 8, 2026", days: "-40" }
    ]
  },
  {
    name: "Submittals",
    tagline: "Manage contractor submittals, samples, and consultant approvals",
    category: "Management",
    screenshotImg: "/images/submittals-dashboard.png",
    points: [
      { title: "Status Pipeline Transparency", desc: "Instant visibility into Draft, Pending Review, Client Review, and Approved" },
      { title: "11 Submittal Packages", desc: "Fire doors, drainage, sprinkler calculations, porcelain tiles, gypsum, and switchboards" },
      { title: "Audit Trail & Spec Adherence", desc: "Contractor submittals tied directly to specification sections and revision numbers" }
    ],
    metric: "11 Total • 5 Approved • 3 Pending Review",
    meterLabel: "Submittal Review Cycle & Approval Rate",
    meterPercent: 72.7,
    kpis: [
      { label: "TOTAL", count: 11, color: "text-[var(--text)]" },
      { label: "PENDING REVIEW", count: 3, color: "text-amber-600" },
      { label: "APPROVED", count: 5, color: "text-emerald-600" },
      { label: "REQUIRES ACTION", count: 0, color: "text-[var(--acc)]" }
    ],
    items: [
      { title: "Heavy Duty Steel Fire Doors & Hardware Schedule", rev: "Rev 01", disc: "Arch", status: "Draft", badge: "bg-slate-100 text-slate-700" },
      { title: "Acoustic Drainage Piping & Fittings (Polypipe)", rev: "Rev 02", disc: "Plumbing", status: "Pending", badge: "bg-amber-50 text-amber-700 border border-amber-200" },
      { title: "Sprinkler Hydraulic Calculations & Pipe Sizing", rev: "Rev 01", disc: "Fire", status: "Client Review", badge: "bg-sky-50 text-sky-700 border border-sky-200" },
      { title: "Porcelain Floor Tiles & Anti-Slip Stair Nosing", rev: "Rev 03", disc: "Finishes", status: "Approved", badge: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
      { title: "Acoustic Gypsum Ceiling Tiles (Knauf AMF)", rev: "Rev 02", disc: "Finishes", status: "Pending", badge: "bg-amber-50 text-amber-700 border border-amber-200" },
      { title: "Substructure Bituminous Waterproofing Membrane", rev: "Rev 04", disc: "Waterproofing", status: "Approved", badge: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
      { title: "Main LV Switchboard & Distribution Schematics", rev: "Rev 01", disc: "Electrical", status: "Pending", badge: "bg-amber-50 text-amber-700 border border-amber-200" },
      { title: "HVAC Chilled Water Piping & Insulation Specs", rev: "Rev 02", disc: "HVAC", status: "Approved", badge: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
      { title: "Ready-Mix Concrete Mix Design C40/20", rev: "Rev 03", disc: "Structure", status: "Approved", badge: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
      { title: "Curtain Wall Structural Glazing & Fixings", rev: "Rev 02", disc: "Facade", status: "Pending", badge: "bg-amber-50 text-amber-700 border border-amber-200" },
      { title: "Structural Steel Framing Connection Details", rev: "Rev 04", disc: "Structure", status: "Approved", badge: "bg-emerald-50 text-emerald-700 border border-emerald-200" }
    ]
  },
  {
    name: "Transmittals",
    tagline: "Formally issue drawing packages, test reports & IFC documents",
    category: "Management",
    screenshotImg: "/images/transmittals-dashboard.png",
    points: [
      { title: "Formal Chain of Custody", desc: "Every transmittal has a unique number (TR-0001 to TR-0005) and logged recipient" },
      { title: "100% Delivery Verification", desc: "5 sent transmittals with verified receipt by Client, Consultant, and Municipal Authority" },
      { title: "Status & Purpose Classifications", desc: "Categorized as 'For Information', 'Approved as Noted', and 'For Review'" }
    ],
    metric: "5 Sent Transmittals • 0 Draft • 0 Action Req.",
    meterLabel: "Transmittal Delivery & Receipt Governance",
    meterPercent: 100,
    kpis: [
      { label: "Total Transmittals", count: 5 },
      { label: "Sent", count: 5 },
      { label: "Draft", count: 0 },
      { label: "Action Required", count: 0 }
    ],
    items: [
      { num: "TR-0005", title: "Fire Fighting & Suppression As-Built Redline Markups", to: "Consultant Civil / MEP", date: "Nov 02, 2026", purpose: "For Information", purposeColor: "bg-sky-50 text-sky-700 border border-sky-200", files: "4 Files" },
      { num: "TR-0004", title: "Curtain Wall Structural Glazing On-Site Mock-up Inspection", to: "Prime Client Rep", date: "Oct 27, 2026", purpose: "Approved as Noted", purposeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200", files: "8 Files" },
      { num: "TR-0003", title: "Concrete Core Test Compressive Strength Verification Reports", to: "Independent Lab", date: "Oct 20, 2026", purpose: "For Information", purposeColor: "bg-sky-50 text-sky-700 border border-sky-200", files: "2 Files" },
      { num: "TR-0002", title: "MEP Single Line Diagrams & Electrical Load Schedules Rev 03", to: "Municipal Authority", date: "Oct 14, 2026", purpose: "For Review", purposeColor: "bg-amber-50 text-amber-700 border border-amber-200", files: "12 Files" },
      { num: "TR-0001", title: "Architectural & Structural IFC Drawing Package Issue", to: "Main Contractor J.V.", date: "Oct 05, 2026", purpose: "Approved as Noted", purposeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200", files: "34 Sheets" }
    ]
  },
  {
    name: "Material Request",
    tagline: "Requisition site materials with quantity tracking and PM sign-off",
    category: "Management",
    screenshotImg: "/images/material-requests-dashboard.png",
    points: [
      { title: "Direct Site Requisitions", desc: "Site engineers request materials with specifications, quantities, and schedule needs" },
      { title: "PM Approval Workflow", desc: "Automated routing for Project Manager approval with single-click verification" },
      { title: "Multi-Discipline Coverage", desc: "Covers Drywall, Acoustic Plumbing, C40 Ready-Mix Concrete, and Grade 60 Rebar" }
    ],
    metric: "4 Requisitions • 3 Approved • 1 Pending PM",
    meterLabel: "Site Requisition Approval Health",
    meterPercent: 75.0,
    kpis: [
      { label: "Pending Approval", count: "01", color: "bg-amber-50 text-amber-700 border-amber-200" },
      { label: "Approved", count: "03", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
      { label: "Rejected", count: "00", color: "bg-slate-50 text-slate-500 border-slate-200" }
    ],
    items: [
      { code: "MR-MNM-2026-0004", name: "Moisture-resistant gypsum drywall boards (12.5mm)", qty: "450 Sheets", cat: "Finishes", status: "Pending PM Approval", statusColor: "bg-amber-50 text-amber-700 border border-amber-200", date: "Nov 04, 2026" },
      { code: "MR-MNM-2026-0003", name: "UPVC drainage pipes & heavy-duty acoustic fittings", qty: "120 Lengths", cat: "Plumbing", status: "Approved by PM", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200", date: "Oct 29, 2026" },
      { code: "MR-MNM-2026-0002", name: "Ready-mix batching plant C40/20 concrete pour L2", qty: "180 m³", cat: "Structural", status: "Approved by PM", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200", date: "Oct 24, 2026" },
      { code: "MR-MNM-2026-0001", name: "Grade 60 high-yield deformed steel rebar (T16/T20)", qty: "35 MT", cat: "Rebar", status: "Approved by PM", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200", date: "Oct 17, 2026" }
    ]
  },
  {
    name: "Operational Assets Request",
    tagline: "Request, track and manage site machinery, heavy plant & equipment",
    category: "Management",
    screenshotImg: "/images/operational-assets-dashboard.png",
    points: [
      { title: "Fleet & Equipment Control", desc: "Request cranes, excavators, generators, and specialized power tools" },
      { title: "Lifecycle Status Pipeline", desc: "Track from Request to Approval, Site Issuance, and Handover Return" },
      { title: "Zero Idle Resource Waste", desc: "Maintain real-time accountability across machinery deployments" }
    ],
    metric: "0 Active Pending • Fleet Ready on Standby",
    meterLabel: "Site Heavy Equipment Deployment",
    meterPercent: 100,
    kpis: [
      { label: "All Requests", count: "00" },
      { label: "Pending", count: "00" },
      { label: "Approved", count: "00" },
      { label: "Issued", count: "00" },
      { label: "Returned", count: "00" },
      { label: "Rejected", count: "00" }
    ],
    emptyState: {
      title: "No requests found",
      desc: "No requests match your current search queries or selected status filters."
    }
  },
  {
    name: "Budget & Costs",
    tagline: "Track project budgets, cost codes, allocations, forecasting, and change orders",
    category: "Financials & Quality",
    screenshotImg: "/images/budget-dashboard.jpg",
    points: [
      { title: "Standard Budget & Lock Status", desc: "Baseline locked budget preventing unauthorized scope or line-item creeps" },
      { title: "Division 01 - 03 Architecture", desc: "Breakdown across General Requirements, Earthworks, and Superstructure" },
      { title: "Committed vs Direct Cost Tracking", desc: "Real-time variance analysis between committed subcontracts and direct field expenses" }
    ],
    metric: "BHD 1,030,750 Total • BHD 332,500 Committed",
    meterLabel: "Baseline Cost Lock & Committed Exposure",
    meterPercent: 32.2,
    badgeText: "Budget Locked",
    divisions: [
      { code: "01", name: "Division 01 - General", items: "4 items", original: "BHD 152,000.000", revised: "BHD 152,000.000", committed: "BHD 30,400.000", direct: "BHD 38,001.000" },
      { code: "02", name: "Division 02 - Existing Conditions & Earthworks", items: "3 items", original: "BHD 109,250.000", revised: "BHD 109,250.000", committed: "BHD 32,775.000", direct: "BHD 60,088.000" },
      { code: "03", name: "Division 03 - Superstructure", items: "4 items", original: "BHD 769,500.000", revised: "BHD 769,500.000", committed: "BHD 269,325.000", direct: "BHD 269,325.000" }
    ],
    lineItems: [
      { code: "01-100.L", name: "Project Supervision & Site Management", tag: "General", budget: "BHD 71,250.000" },
      { code: "01-200.0", name: "Site Facilities & Temporary Utilities", tag: "General", budget: "BHD 42,750.000" },
      { code: "02-200.E", name: "Bulk Excavation & Soil Disposal", tag: "Substructure", budget: "BHD 61,750.000" },
      { code: "03-100.M", name: "Formwork & Shuttering Systems", tag: "Superstructure", budget: "BHD 90,250.000" }
    ]
  },
  {
    name: "Contracts",
    tagline: "Manage and track project subcontracts, values, and formal change orders",
    category: "Financials & Quality",
    screenshotImg: "/images/contracts-dashboard.png",
    points: [
      { title: "BHD 3.47M Contract Portfolio", desc: "Full commercial governance covering FIDIC Main Contract, MEP, Finishes, and Facade" },
      { title: "Change Order Management", desc: "BHD 47,500 approved change orders tracked with revised baseline of BHD 3,517,500" },
      { title: "Lifecycle Approval Status", desc: "Clear contract stages: Approved (2), Under Review (1), and Draft (1 awaiting action)" }
    ],
    metric: "BHD 3,470,000 Total Value • 2 of 4 Approved",
    meterLabel: "Commercial Contract Execution & Sign-off",
    meterPercent: 50.0,
    kpis: [
      { label: "TOTAL CONTRACT VALUE", val: "BHD 3,470,000.000", sub: "4 contracts", icon: "wallet" },
      { label: "APPROVED CONTRACTS", val: "2", sub: "of 4 total", icon: "check" },
      { label: "DRAFT / PENDING", val: "1", sub: "awaiting action", icon: "clock" },
      { label: "CHANGE ORDERS TOTAL", val: "BHD 47,500.000", sub: "Revised: BHD 3.51M", icon: "trend" }
    ],
    items: [
      { num: "MCC-MNM-26-PC-001", title: "FIDIC Red Book Main Construction Contract - Core & Shell", party: "Kingdom Real Estate Dev Co. BSC", status: "APPROVED", statusColor: "border-amber-300 text-amber-700 bg-amber-50", dates: "05/08/2026 - 02/05/2027" },
      { num: "MCC-MNM-26-SC-003", title: "Internal Architectural Finishes, Drywall & Tiling Subcontract", party: "Al-Manartain Marble, Granite & Interior", status: "DRAFT", statusColor: "border-amber-200 text-amber-600 bg-amber-50/50", dates: "05/08/2026 - 02/05/2027" },
      { num: "MCC-MNM-26-SC-001", title: "Mechanical, Electrical & Fire Fighting Subcontract Package", party: "Bahrain Electro-Mechanical Contracting", status: "APPROVED", statusColor: "border-amber-300 text-amber-700 bg-amber-50", dates: "05/08/2026 - 02/05/2027" },
      { num: "MCC-MNM-26-SC-002", title: "Unitized Aluminium Curtain Wall & Glazing Agreement", party: "Gulf Facade Engineering & Glass", status: "UNDER_REVIEW", statusColor: "border-yellow-300 text-yellow-700 bg-yellow-50", dates: "05/08/2026 - 02/05/2027" }
    ]
  },
  {
    name: "Observations",
    tagline: "Capture, assign and track HSE safety and QA/QC quality findings on site",
    category: "Financials & Quality",
    screenshotImg: "/images/observations-dashboard.png",
    points: [
      { title: "Direct Field Hazard Logging", desc: "Track missing edge protections, scaffolding compliance, and rebar cover depths" },
      { title: "Target Date & Assignment SLA", desc: "Every observation is assigned to specific discipline engineers with hard target dates" },
      { title: "Live HSE Status Counter", desc: "Instant count of Open (2), In Progress (2), Resolved (1), and Closed (0)" }
    ],
    metric: "5 Observations • 2 Open • 2 In Progress • 1 Resolved",
    meterLabel: "QA/QC & HSE Safety Compliance Resolution",
    meterPercent: 60.0,
    kpis: [
      { label: "Total Observations", count: 5, color: "bg-rose-50 text-rose-700 border-rose-200" },
      { label: "Open", count: 2, color: "bg-rose-50 text-rose-700 border-rose-200" },
      { label: "In Progress", count: 2, color: "bg-amber-50 text-amber-700 border-amber-200" },
      { label: "Resolved", count: 1, color: "bg-sky-50 text-sky-700 border-sky-200" },
      { label: "Closed", count: 0, color: "bg-slate-50 text-slate-500 border-slate-200" }
    ],
    items: [
      { id: "OBS-0004", title: "Rebar Cover Depth Deficiency Prior to Suspended Slab Pour", loc: "Level 4 Suspended Slab", cat: "Quality", priority: "High", priorityColor: "text-amber-700 bg-amber-50", status: "Open", statusColor: "bg-rose-50 text-rose-700 border-rose-200", owner: "Elena Rostova", target: "Nov 04, 2026" },
      { id: "OBS-0001", title: "Missing Perimeter Edge Protection & Toe-Boards at Slab Edge", loc: "Level 5 - Grid Line", cat: "Safety", priority: "Critical", priorityColor: "text-red-700 bg-red-50", status: "Open", statusColor: "bg-rose-50 text-rose-700 border-rose-200", owner: "James O'Connor", target: "Nov 05, 2026" },
      { id: "OBS-0005", title: "MEP Pipe Penetration Through Fire Wall Missing Collar", loc: "Level 2 Corridor", cat: "Quality", priority: "Medium", priorityColor: "text-purple-700 bg-purple-50", status: "Resolved", statusColor: "bg-sky-50 text-sky-700 border-sky-200", owner: "Elena Rostova", target: "Nov 01, 2026" },
      { id: "OBS-0002", title: "Uncertified Scaffolding Tower Lacking Outriggers & Brakes", loc: "Ground Floor Main Hall", cat: "Safety", priority: "High", priorityColor: "text-amber-700 bg-amber-50", status: "In Progress", statusColor: "bg-amber-50 text-amber-700 border-amber-200", owner: "James O'Connor", target: "Nov 06, 2026" },
      { id: "OBS-0003", title: "Concrete Honeycombing & Aggregate Segregation at Core Wall", loc: "Core Wall CW-02", cat: "Quality", priority: "High", priorityColor: "text-amber-700 bg-amber-50", status: "In Progress", statusColor: "bg-amber-50 text-amber-700 border-amber-200", owner: "Nasser Al-Haddad", target: "Nov 07, 2026" }
    ]
  },
  {
    name: "Punch List",
    tagline: "Close out snag items, defective works, and incomplete handover items",
    category: "Financials & Quality",
    screenshotImg: "/images/punch-list-dashboard.png",
    points: [
      { title: "Categorized Snag Classification", desc: "Organized by Corrective Works, Defective Works, and Incomplete Snag Lists" },
      { title: "Room & Unit Specific Tagging", desc: "Tied directly to locations: Stairwell 2, Corridor Core A, Unit 502, Unit 304, Bedroom 601" },
      { title: "Handover Readiness Burn-Down", desc: "Track progress from Open & Assigned to In Progress and Verified Closed" }
    ],
    metric: "5 Snags • 1 Closed • 2 In Progress • 2 Open",
    meterLabel: "Handover Snag Resolution Burn-Down",
    meterPercent: 60.0,
    kpis: [
      { label: "Total Punch Items", count: 5, color: "bg-rose-50 text-rose-700 border-rose-200" },
      { label: "Open", count: 2, color: "bg-rose-50 text-rose-700 border-rose-200" },
      { label: "In Progress", count: 2, color: "bg-amber-50 text-amber-700 border-amber-200" },
      { label: "Resolved", count: 0, color: "bg-slate-50 text-slate-500 border-slate-200" },
      { label: "Closed", count: 1, color: "bg-emerald-50 text-emerald-700 border-emerald-200" }
    ],
    items: [
      { id: "PI-0111", title: "Emergency Exit Photoluminescent Signage Missing", work: "Corrective Works", loc: "Stairwell 2 - Ground Floor", priority: "Critical", status: "Open", statusColor: "text-rose-700 border-rose-200 bg-rose-50", assignee: "James O'Connor", target: "Nov 4, 2026" },
      { id: "PI-0114", title: "Internal Solid-Core Fire Door Leaf Binding Against Frame", work: "Defective Works", loc: "Corridor Core A - Service", priority: "High", status: "Open", statusColor: "text-rose-700 border-rose-200 bg-rose-50", assignee: "Robert Miller", target: "Nov 5, 2026" },
      { id: "PI-0115", title: "Unterminated Concealed Low-Voltage Wiring at Kitchen", work: "Incomplete Snag", loc: "Unit 502 - Open Kitchen", priority: "High", status: "Assigned", statusColor: "text-slate-700 border-slate-200 bg-slate-50", assignee: "Elena Rostova", target: "Nov 6, 2026" },
      { id: "PI-0113", title: "Hollow Sounding Ceramic Floor Tiles Requiring Re-Laying", work: "Defective Works", loc: "Unit 304 - Living Room", priority: "Medium", status: "In Progress", statusColor: "text-amber-700 border-amber-200 bg-amber-50", assignee: "Elena Rostova", target: "Nov 7, 2026" },
      { id: "PI-0112", title: "Hairline Shrinkage Crazing Cracks on Gypsum Ceiling Joint", work: "Defective Works", loc: "Master Bedroom 601", priority: "Low", status: "Closed", statusColor: "text-emerald-700 border-emerald-200 bg-emerald-50", assignee: "Robert Miller", target: "Oct 26, 2026" }
    ]
  },
  {
    name: "Project Team",
    tagline: "Manage and organize your project team members, roles & organizational hierarchy",
    category: "Financials & Quality",
    screenshotImg: "/images/team-directory-dashboard.png",
    orgChartImg: "/images/team-org-chart-dashboard.png",
    points: [
      { title: "7 Core Project Members", desc: "Elena Rostova, Robert Miller, James O'Connor, Nasser Al-Haddad, Alexander Hayes, David Chen, Tariq Al-Mansoor" },
      { title: "Interactive Organizational Chart", desc: "Auto-generated hierarchy from Managing Director to PM, Engineers, Safety, and Site Foremen" },
      { title: "Direct Contact & Role Governance", desc: "Instant corporate email, telephone, employee code (EPP-00101 to 109), and 100% active status" }
    ],
    metric: "7 Members Active • 4 Hierarchy Tiers",
    meterLabel: "Team Onboarding & Role-Based Governance",
    meterPercent: 100,
    members: [
      { initials: "AH", code: "EPP-00101", name: "Alexander Hayes", role: "Managing Director", tier: "Executive", email: "admin@builtraa.com", phone: "+973 39123456", tierColor: "border-amber-400 bg-amber-50 text-amber-800" },
      { initials: "DC", code: "EPP-00104", name: "David Chen", role: "Project Manager", tier: "Management", email: "d.chen@builtraa.com", phone: "+973 39456789", tierColor: "border-rose-400 bg-rose-50 text-rose-800" },
      { initials: "ER", code: "EPP-00106", name: "Elena Rostova", role: "Project Engineer - Electrical", tier: "Engineering", email: "e.rostova@builtraa.com", phone: "+973 39678901", tierColor: "border-emerald-400 bg-emerald-50 text-emerald-800" },
      { initials: "JO", code: "EPP-00109", name: "James O'Connor", role: "Safety Officer", tier: "Engineering", email: "j.oconnor@builtraa.com", phone: "+973 39901234", tierColor: "border-emerald-400 bg-emerald-50 text-emerald-800" },
      { initials: "TA", code: "EPP-00107", name: "Tariq Al-Mansoor", role: "Site Engineer", tier: "Engineering", email: "t.mansoor@builtraa.com", phone: "+973 39789012", tierColor: "border-emerald-400 bg-emerald-50 text-emerald-800" },
      { initials: "RM", code: "EPP-00108", name: "Robert Miller", role: "Civil Foreman", tier: "Staff / Site", email: "r.miller@builtraa.com", phone: "+973 39890123", tierColor: "border-slate-300 bg-slate-50 text-slate-700" },
      { initials: "NA", code: "EPP-00105", name: "Nasser Al-Haddad", role: "Senior Quantity Surveyor", tier: "Staff / Site", email: "n.haddad@builtraa.com", phone: "+973 39567890", tierColor: "border-slate-300 bg-slate-50 text-slate-700" }
    ]
  }
];
