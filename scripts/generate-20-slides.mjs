import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../src/slidesContent.json');

const slides20 = [
  // ─── 01: WELCOME ────────────────────────────────────────────────────────────
  {
    slideNumber: 1,
    type: "welcome",
    ecosystem: "ENTERPRISE PLATFORM",
    eyebrow: "ENTERPRISE MANAGEMENT SYSTEM",
    titleNavy: "BUILT",
    titleBrand: "RAA",
    titleNavyAfter: "",
    subtitle: "Enterprise Management System",
    intro: "One Platform. Three Powerful Management Ecosystems.",
    ecosystems: [
      {
        id: "hr",
        name: "HR Management",
        slideRange: "Slides 02–07",
        targetSlide: 2,
        icon: "Users",
        descriptor: "People, attendance, payroll and operations"
      },
      {
        id: "mm",
        name: "Material Management",
        slideRange: "Slides 08–12",
        targetSlide: 8,
        icon: "ShoppingCart",
        descriptor: "Requisitions, procurement, inventory and site assets"
      },
      {
        id: "pt",
        name: "Project Tools",
        slideRange: "Slides 13–19",
        targetSlide: 13,
        icon: "Briefcase",
        descriptor: "Planning, documentation, finance and site execution"
      }
    ],
    speakerNotes: "Builtraa connects your workforce, supply chain and project execution in one unified enterprise platform."
  },

  // ─── 02: HR MANAGEMENT OVERVIEW ─────────────────────────────────────────────
  {
    slideNumber: 2,
    type: "module",
    ecosystem: "HR MANAGEMENT",
    eyebrow: "02 / HR MANAGEMENT",
    sectionName: "HR Management Overview",
    titleNavy: "Real-time HR",
    titleBrand: "Overview",
    titleNavyAfter: "",
    intro: "One screen that shows how your workforce is doing today.",
    moduleIcon: "LayoutDashboard",
    cards: [
      {
        icon: "LayoutDashboard",
        number: "01",
        moduleLabel: "HR Dashboard",
        title: "Today at a glance",
        text: "Total employees, active loans, people on leave, monthly payroll."
      },
      {
        icon: "Users",
        number: "02",
        moduleLabel: "Employee Overview",
        title: "Workforce status",
        text: "Staff, labour and active status in one view."
      },
      {
        icon: "BarChart3",
        number: "03",
        moduleLabel: "HR Statistics",
        title: "Attendance and alerts",
        text: "Present or absent by type and site; pending approvals, clearances and expiring visas or passports."
      }
    ],
    steps: [
      "Open the dashboard",
      "See today's numbers",
      "Spot what needs attention",
      "Open that section to act"
    ],
    whyItHelps: "HR spots problems early without opening every section.",
    speakerNotes: "The HR overview gives leadership immediate visibility into staffing, daily attendance, payroll status, and urgent compliance alerts."
  },

  // ─── 03: EMPLOYEE MANAGEMENT ────────────────────────────────────────────────
  {
    slideNumber: 3,
    type: "module",
    ecosystem: "HR MANAGEMENT",
    compact: true,
    eyebrow: "03 / HR MANAGEMENT",
    sectionName: "Employee Management",
    titleNavy: "Employee",
    titleBrand: "Management",
    titleNavyAfter: "",
    intro: "From joining to leaving, every employee record in one place.",
    moduleIcon: "Users",
    cards: [
      {
        icon: "Users",
        number: "01",
        moduleLabel: "Employees",
        title: "Complete employee list",
        text: "Personal, job, department and ID details in one record; staff and labour lists."
      },
      {
        icon: "UserCheck",
        number: "02",
        moduleLabel: "Employee Rejoining",
        title: "Return to work",
        text: "Re-start employees returning from leave or re-employment with a record."
      },
      {
        icon: "FileText",
        number: "03",
        moduleLabel: "Digital Forms",
        title: "Paperless forms",
        text: "Staffing requests and performance appraisals with priority and status."
      },
      {
        icon: "CheckSquare",
        number: "04",
        moduleLabel: "Clearance Form",
        title: "Exit checklist",
        text: "Departments sign off and company assets are handed over."
      }
    ],
    steps: [
      "Add and maintain the employee",
      "Use forms for hiring and reviews",
      "Rejoining restarts returning staff",
      "Clearance completes the exit"
    ],
    whyItHelps: "Every stage of an employee's journey is recorded and easy to find.",
    speakerNotes: "From onboarding to exit clearance, all employee records, appraisals, and rejoining events remain centralized and searchable."
  },

  // ─── 04: LEAVE & ATTENDANCE MANAGEMENT ──────────────────────────────────────
  {
    slideNumber: 4,
    type: "module",
    ecosystem: "HR MANAGEMENT",
    eyebrow: "04 / HR MANAGEMENT",
    sectionName: "Leave & Attendance Management",
    titleNavy: "Leave &",
    titleBrand: "Attendance",
    titleNavyAfter: "",
    intro: "Attendance is recorded automatically and leave is approved step by step.",
    moduleIcon: "CalendarDays",
    cards: [
      {
        icon: "Clock",
        number: "01",
        moduleLabel: "Attendance",
        title: "Daily record",
        text: "Check-in, lunch, check-out, hours worked and late arrivals."
      },
      {
        icon: "CalendarCheck",
        number: "02",
        moduleLabel: "Attendance",
        title: "Marked automatically",
        text: "No punch by 10:30 AM means Absent; a punch makes them Present."
      },
      {
        icon: "CalendarDays",
        number: "03",
        moduleLabel: "Leave",
        title: "Step-by-step approval",
        text: "Requests go to Project Director, Director, then Managing Director."
      }
    ],
    steps: [
      "Employee punches at the attendance machine",
      "Status updates automatically",
      "Leave goes through three approvals",
      "HR checks, corrects and exports"
    ],
    whyItHelps: "Accurate attendance and leave, which also feed salary.",
    speakerNotes: "Automatic biometric punches eliminate manual attendance sheets, feeding verified work hours directly into leave and payroll."
  },

  // ─── 05: PAYROLL MANAGEMENT & SETTINGS ──────────────────────────────────────
  {
    slideNumber: 5,
    type: "module",
    ecosystem: "HR MANAGEMENT",
    eyebrow: "05 / HR MANAGEMENT",
    sectionName: "Payroll Management & Settings",
    titleNavy: "Payroll &",
    titleBrand: "Settings",
    titleNavyAfter: "",
    intro: "Set the salary rules once, then prepare, approve and pay each month.",
    moduleIcon: "CreditCard",
    cards: [
      {
        icon: "Sliders",
        number: "01",
        moduleLabel: "Payroll Settings",
        title: "Rules in one place",
        text: "GOSI shares, end-of-service rates and the LMRA fee."
      },
      {
        icon: "CreditCard",
        number: "02",
        moduleLabel: "Payroll",
        title: "Staff and labour",
        text: "Separate payroll runs, monthly or custom."
      },
      {
        icon: "ShieldCheck",
        number: "03",
        moduleLabel: "Payroll",
        title: "Clear status",
        text: "Each run shows approval status, totals and a locked mark."
      }
    ],
    steps: [
      "Set the rules",
      "Run payroll",
      "Approved and paid",
      "Locked (rule changes apply to future payroll only)"
    ],
    whyItHelps: "Salaries are processed in an organised and traceable way.",
    speakerNotes: "Company contributions and statutory fees are defined once, so monthly disbursements run smoothly and lock permanently once paid."
  },

  // ─── 06: SALARY & EMPLOYEE BENEFITS ─────────────────────────────────────────
  {
    slideNumber: 6,
    type: "module",
    ecosystem: "HR MANAGEMENT",
    eyebrow: "06 / HR MANAGEMENT",
    sectionName: "Salary & Employee Benefits",
    titleNavy: "Salary &",
    titleBrand: "Benefits",
    titleNavyAfter: "",
    intro: "Loans, raises and salary corrections with clear approvals.",
    moduleIcon: "Wallet",
    cards: [
      {
        icon: "Wallet",
        number: "01",
        moduleLabel: "Loan",
        title: "Issue and track",
        text: "Loan type, amount, start and end month with monthly deduction."
      },
      {
        icon: "TrendingUp",
        number: "02",
        moduleLabel: "Salary Increment",
        title: "Request to payroll",
        text: "Requests move from waiting to approved to applied."
      },
      {
        icon: "Scale",
        number: "03",
        moduleLabel: "Salary Discrepancy",
        title: "Fix salary mistakes",
        text: "HR reviews, then the Managing Director decides."
      }
    ],
    steps: [
      "A request or claim is raised",
      "Reviewed and approved",
      "Applied to payroll or deducted monthly",
      "Recorded for later checks"
    ],
    whyItHelps: "Money matters are fair, approved and properly recorded.",
    speakerNotes: "Deductions for employee advances and adjustments are scheduled directly into payroll with full approval history."
  },

  // ─── 07: HR OPERATIONS & COMPLIANCE ─────────────────────────────────────────
  {
    slideNumber: 7,
    type: "module",
    ecosystem: "HR MANAGEMENT",
    compact: true,
    eyebrow: "07 / HR MANAGEMENT",
    sectionName: "HR Operations & Compliance",
    titleNavy: "HR Operations &",
    titleBrand: "Compliance",
    titleNavyAfter: "",
    intro: "Discipline, travel, reports, meetings and a full audit trail.",
    moduleIcon: "ShieldAlert",
    cards: [
      {
        icon: "ShieldAlert",
        number: "01",
        moduleLabel: "Disciplinary Action",
        title: "Fair, recorded cases",
        text: "Late-arrival cases are automatic; HR can also raise one."
      },
      {
        icon: "Plane",
        number: "02",
        moduleLabel: "Ticket Management",
        title: "Travel benefits",
        text: "Eligibility, ticket or cash allowance and cost tracking."
      },
      {
        icon: "BarChart3",
        number: "03",
        moduleLabel: "Report",
        title: "Ready-made reports",
        text: "Salary, attendance, leave and expiring documents with export."
      },
      {
        icon: "Users",
        number: "04",
        moduleLabel: "Meeting Arrangements",
        title: "Plan and record",
        text: "Schedule meetings, choose participants, see status."
      },
      {
        icon: "History",
        number: "05",
        moduleLabel: "Audit Logs",
        title: "Every payroll action",
        text: "Success, failure, filters and export to Excel."
      }
    ],
    steps: [
      "An event happens",
      "It is recorded",
      "HR and management review it",
      "Reports and audit logs prove it later"
    ],
    whyItHelps: "Every action is consistent, fair and can be checked later.",
    speakerNotes: "Compliance workflows and complete audit trails guarantee total accountability across HR policies and governance."
  },

  // ─── 08: MATERIAL MANAGEMENT OVERVIEW ───────────────────────────────────────
  {
    slideNumber: 8,
    type: "module",
    ecosystem: "MATERIAL MANAGEMENT",
    eyebrow: "08 / MATERIAL MANAGEMENT",
    sectionName: "Material Management Overview",
    titleNavy: "Material Management",
    titleBrand: "Overview",
    titleNavyAfter: "",
    intro: "Every material request and approved material in one system.",
    moduleIcon: "Layers",
    cards: [
      {
        icon: "LayoutDashboard",
        number: "01",
        moduleLabel: "Dashboard",
        title: "Request overview",
        text: "All material requests with pending, approved and rejected counts."
      },
      {
        icon: "CheckSquare",
        number: "02",
        moduleLabel: "Dashboard",
        title: "Quick actions",
        text: "Search by request or status, raise a new request, export."
      },
      {
        icon: "Layers",
        number: "03",
        moduleLabel: "Material Master",
        title: "One master list",
        text: "Civil, electrical, mechanical and HVAC materials with code, size, unit and cost code mapping; filter and export to Excel."
      }
    ],
    steps: [
      "Add materials to the master",
      "Raise a material request",
      "Pending approval",
      "Approved and sent to procurement"
    ],
    whyItHelps: "Everyone orders the same materials, and every request is visible.",
    speakerNotes: "A single standardized materials catalog prevents duplicate codes and ensures project requisitions are tracked clearly."
  },

  // ─── 09: PROCUREMENT MANAGEMENT ─────────────────────────────────────────────
  {
    slideNumber: 9,
    type: "module",
    ecosystem: "MATERIAL MANAGEMENT",
    eyebrow: "09 / MATERIAL MANAGEMENT",
    sectionName: "Procurement Management",
    titleNavy: "Procurement",
    titleBrand: "Management",
    titleNavyAfter: "",
    intro: "Buy what the warehouse does not have, at the best quotation.",
    moduleIcon: "ShoppingCart",
    cards: [
      {
        icon: "ShoppingCart",
        number: "01",
        moduleLabel: "Procurement Queue",
        title: "Items to buy",
        text: "Requested items not available after the warehouse stock check."
      },
      {
        icon: "AlertCircle",
        number: "02",
        moduleLabel: "Procurement Queue",
        title: "Key numbers",
        text: "Pending items, units to buy, high-priority items; create a global RFQ."
      },
      {
        icon: "FileSpreadsheet",
        number: "03",
        moduleLabel: "RFQ / Quotations",
        title: "Compare quotations",
        text: "Material and asset RFQs by status: requested, pending, approved, rejected, on hold."
      }
    ],
    steps: [
      "Stock is checked",
      "Shortfall joins the queue",
      "RFQ is sent to vendors",
      "Quotations are compared and approved"
    ],
    whyItHelps: "Nothing that needs buying is missed, and prices are compared fairly.",
    speakerNotes: "Shortfalls detected during site stock checks enter procurement queues automatically for quotation comparison."
  },

  // ─── 10: PURCHASE ORDERS & VENDOR MGMT ──────────────────────────────────────
  {
    slideNumber: 10,
    type: "module",
    ecosystem: "MATERIAL MANAGEMENT",
    eyebrow: "10 / MATERIAL MANAGEMENT",
    sectionName: "Purchase Orders & Vendor Mgmt",
    titleNavy: "Purchase Orders &",
    titleBrand: "Vendors",
    titleNavyAfter: "",
    intro: "Order from the right vendor and settle the bill.",
    moduleIcon: "Building2",
    cards: [
      {
        icon: "CreditCard",
        number: "01",
        moduleLabel: "Purchase Orders",
        title: "Orders linked to requests",
        text: "Synced from Zoho Books; open, received and billed totals; MR and AR tabs."
      },
      {
        icon: "Building2",
        number: "02",
        moduleLabel: "Vendors",
        title: "Vendor directory",
        text: "Code, contact, email, phone, city and trade category."
      },
      {
        icon: "Wallet",
        number: "03",
        moduleLabel: "Accounts & Bills",
        title: "Invoices and payments",
        text: "Invoice entry, approvals, partial payments and settled history."
      }
    ],
    steps: [
      "Choose the vendor",
      "Purchase order is issued",
      "Invoice is entered",
      "Payment is approved and settled"
    ],
    whyItHelps: "Every order can be traced from vendor to payment.",
    speakerNotes: "Approved supplier directories link directly to Zoho Books purchase orders and subsequent payment disbursements."
  },

  // ─── 11: MATERIAL RECEIVING & DELIVERY ──────────────────────────────────────
  {
    slideNumber: 11,
    type: "module",
    ecosystem: "MATERIAL MANAGEMENT",
    eyebrow: "11 / MATERIAL MANAGEMENT",
    sectionName: "Material Receiving & Delivery",
    titleNavy: "Receiving &",
    titleBrand: "Delivery",
    titleNavyAfter: "",
    intro: "Know what is on the way and what has arrived.",
    moduleIcon: "Truck",
    cards: [
      {
        icon: "Truck",
        number: "01",
        moduleLabel: "Deliveries",
        title: "Shipment tracking",
        text: "Total, pending, in-progress and delivered shipments with stage and percentage."
      },
      {
        icon: "Package",
        number: "02",
        moduleLabel: "Deliveries",
        title: "Stock status",
        text: "See whether each requested item is already in stock."
      },
      {
        icon: "CheckSquare",
        number: "03",
        moduleLabel: "Receipts (GRN)",
        title: "Receive and check",
        text: "Pending dispatch, QC status, store status, items with issues, history."
      }
    ],
    steps: [
      "Order is approved and dispatched",
      "Delivery is tracked",
      "Goods arrive and pass the quality check",
      "Store inward is recorded"
    ],
    whyItHelps: "Only checked material enters the store, with a full record.",
    speakerNotes: "Dispatched site shipments are monitored live, followed by mandatory quality inspections before store sign-off."
  },

  // ─── 12: INVENTORY & ASSET MANAGEMENT ───────────────────────────────────────
  {
    slideNumber: 12,
    type: "module",
    ecosystem: "MATERIAL MANAGEMENT",
    compact: true,
    eyebrow: "12 / MATERIAL MANAGEMENT",
    sectionName: "Inventory & Asset Management",
    titleNavy: "Inventory &",
    titleBrand: "Asset Management",
    titleNavyAfter: "",
    intro: "Stock for materials, and tools and machinery for the site.",
    moduleIcon: "Boxes",
    cards: [
      {
        icon: "Boxes",
        number: "01",
        moduleLabel: "Inventory",
        title: "Four stock levels",
        text: "On-hand, usable, reserved and on-order; low-stock watch; batch add and activity logs."
      },
      {
        icon: "Wrench",
        number: "02",
        moduleLabel: "Asset List",
        title: "Machinery list",
        text: "Code, size, unit and preferred vendor."
      },
      {
        icon: "ClipboardList",
        number: "03",
        moduleLabel: "Operational Assets Request",
        title: "Request equipment",
        text: "Pending, approved, issued, returned or rejected."
      },
      {
        icon: "ShieldCheck",
        number: "04",
        moduleLabel: "Operational Assets Inventory",
        title: "Free or in use",
        text: "Total, available and in-use assets; add stock entry."
      }
    ],
    steps: [
      "Add stock or assets",
      "Reserve or request",
      "Issue to site",
      "Return and update stock"
    ],
    whyItHelps: "Stock and equipment are always accurate and accounted for.",
    speakerNotes: "Warehouse inventory levels and heavy site machinery are tracked with accurate availability and issue records."
  },

  // ─── 13: PROJECT MANAGEMENT OVERVIEW ────────────────────────────────────────
  {
    slideNumber: 13,
    type: "module",
    ecosystem: "PROJECT TOOLS",
    eyebrow: "13 / PROJECT TOOLS",
    sectionName: "Project Management Overview",
    titleNavy: "Project Management",
    titleBrand: "Overview",
    titleNavyAfter: "",
    intro: "See what is happening on every project today.",
    moduleIcon: "LayoutDashboard",
    cards: [
      {
        icon: "FileClock",
        number: "01",
        moduleLabel: "Daily Log",
        title: "Site diary",
        text: "Record the day's work and events on the project."
      },
      {
        icon: "LayoutDashboard",
        number: "02",
        moduleLabel: "Project Overview",
        title: "Project summary",
        text: "Key project details in one place."
      },
      {
        icon: "BarChart3",
        number: "03",
        moduleLabel: "Project KPIs and Progress",
        title: "Progress at a glance",
        text: "KPIs and completion status."
      }
    ],
    steps: [
      "Open the project",
      "Review overview and KPIs",
      "Check the daily log",
      "Act on what needs attention"
    ],
    whyItHelps: "Project managers see progress without chasing reports.",
    speakerNotes: "Project managers gain instant visibility into daily on-site work logs, milestone KPIs, and active site issues."
  },

  // ─── 14: PROJECT PLANNING & TASK MGMT ───────────────────────────────────────
  {
    slideNumber: 14,
    type: "module",
    ecosystem: "PROJECT TOOLS",
    eyebrow: "14 / PROJECT TOOLS",
    sectionName: "Project Planning & Task Mgmt",
    titleNavy: "Planning &",
    titleBrand: "Task Management",
    titleNavyAfter: "",
    intro: "Plan the work and track who does what.",
    moduleIcon: "CalendarDays",
    cards: [
      {
        icon: "CalendarDays",
        number: "01",
        moduleLabel: "Schedule",
        title: "Project schedule",
        text: "Plan activities and dates."
      },
      {
        icon: "CheckSquare",
        number: "02",
        moduleLabel: "Tasks",
        title: "Task tracking",
        text: "Assign tasks and follow their status."
      }
    ],
    steps: [
      "Build the schedule",
      "Create and assign tasks",
      "Update progress",
      "Review completion"
    ],
    whyItHelps: "Everyone knows the plan, the owner and the deadline.",
    speakerNotes: "Master work breakdown schedules and distributed team tasks keep site execution on target."
  },

  // ─── 15: PROJECT DOCUMENTATION ──────────────────────────────────────────────
  {
    slideNumber: 15,
    type: "module",
    ecosystem: "PROJECT TOOLS",
    eyebrow: "15 / PROJECT TOOLS",
    sectionName: "Project Documentation",
    titleNavy: "Project",
    titleBrand: "Documentation",
    titleNavyAfter: "",
    intro: "Every project document, query and transfer in one place.",
    moduleIcon: "FileText",
    cards: [
      {
        icon: "FileText",
        number: "01",
        moduleLabel: "Documents",
        title: "Document library",
        text: "Central drawings, specs and project files."
      },
      {
        icon: "HelpCircle",
        number: "02",
        moduleLabel: "RFIs",
        title: "Requests for information",
        text: "Formal technical queries with routing and answers."
      },
      {
        icon: "Plane",
        number: "03",
        moduleLabel: "Transmittals",
        title: "Document transfers",
        text: "Formal document transfers and distribution records."
      }
    ],
    steps: [
      "Upload or raise",
      "Route to the right person",
      "Response or acknowledgement",
      "Recorded for reference"
    ],
    whyItHelps: "Project communication is formal, traceable and easy to find.",
    speakerNotes: "Centralized drawing revisions, formal RFIs, and transmittal logs ensure all consultants and contractors stay aligned."
  },

  // ─── 16: SUBMITTALS & MATERIAL REQUESTS ─────────────────────────────────────
  {
    slideNumber: 16,
    type: "module",
    ecosystem: "PROJECT TOOLS",
    eyebrow: "16 / PROJECT TOOLS",
    sectionName: "Submittals & Material Requests",
    titleNavy: "Submittals &",
    titleBrand: "Material Requests",
    titleNavyAfter: "",
    intro: "Get materials approved and requested from the project.",
    moduleIcon: "ClipboardList",
    cards: [
      {
        icon: "CheckCircle2",
        number: "01",
        moduleLabel: "Submittals",
        title: "Approval of materials",
        text: "Technical data and samples approved before site delivery."
      },
      {
        icon: "ShoppingCart",
        number: "02",
        moduleLabel: "Material Request",
        title: "Request materials",
        text: "Project needs flow straight into Material Management (Slide 08/09)."
      },
      {
        icon: "Wrench",
        number: "03",
        moduleLabel: "Operational Assets Request",
        title: "Request site equipment",
        text: "Raise machinery and tool requests for site execution.",
        linkChip: {
          label: "Managed in Material Management → Slide 12",
          targetSlide: 12
        }
      }
    ],
    steps: [
      "Submit for approval",
      "Approved",
      "Material or equipment request raised",
      "Handled in Material Management"
    ],
    whyItHelps: "Project needs flow straight to purchasing without re-entry.",
    speakerNotes: "Approved project specifications immediately trigger material requisitions without manual re-entry into procurement."
  },

  // ─── 17: PROJECT FINANCIAL MANAGEMENT ───────────────────────────────────────
  {
    slideNumber: 17,
    type: "module",
    ecosystem: "PROJECT TOOLS",
    eyebrow: "17 / PROJECT TOOLS",
    sectionName: "Project Financial Management",
    titleNavy: "Project",
    titleBrand: "Financial Management",
    titleNavyAfter: "",
    intro: "Keep project money and agreements under control.",
    moduleIcon: "Wallet",
    cards: [
      {
        icon: "Wallet",
        number: "01",
        moduleLabel: "Budget & Costs",
        title: "Budget vs actual",
        text: "Track expenditure, variations and remaining budget."
      },
      {
        icon: "FileSpreadsheet",
        number: "02",
        moduleLabel: "Contracts",
        title: "Contract records",
        text: "Commercial agreements, terms and subcontractor milestones."
      }
    ],
    steps: [
      "Set the budget",
      "Record costs and contracts",
      "Compare actual with plan",
      "Report to management"
    ],
    whyItHelps: "Cost overruns are seen early.",
    speakerNotes: "Contractual commitments and actual site costs are benchmarked continuously against original project estimates."
  },

  // ─── 18: QUALITY & SITE INSPECTION ──────────────────────────────────────────
  {
    slideNumber: 18,
    type: "module",
    ecosystem: "PROJECT TOOLS",
    eyebrow: "18 / PROJECT TOOLS",
    sectionName: "Quality & Site Inspection",
    titleNavy: "Quality &",
    titleBrand: "Site Inspection",
    titleNavyAfter: "",
    intro: "Find, fix and close site issues.",
    moduleIcon: "ShieldCheck",
    cards: [
      {
        icon: "AlertCircle",
        number: "01",
        moduleLabel: "Observations",
        title: "Site observations",
        text: "Safety, quality and non-conformance records with photos."
      },
      {
        icon: "CheckCircle2",
        number: "02",
        moduleLabel: "Punch List",
        title: "Items to fix",
        text: "Snag list items verified before project handover."
      }
    ],
    steps: [
      "Issue is observed",
      "Assigned for action",
      "Fixed",
      "Verified and closed"
    ],
    whyItHelps: "Quality problems are tracked until they are closed.",
    speakerNotes: "Site snagging and QA/QC punch lists ensure zero defect handovers to project owners."
  },

  // ─── 19: PROJECT TEAM & COLLABORATION ───────────────────────────────────────
  {
    slideNumber: 19,
    type: "module",
    ecosystem: "PROJECT TOOLS",
    eyebrow: "19 / PROJECT TOOLS",
    sectionName: "Project Team & Collaboration",
    titleNavy: "Project Team &",
    titleBrand: "Collaboration",
    titleNavyAfter: "",
    intro: "The right people, with clear responsibilities.",
    moduleIcon: "Users",
    cards: [
      {
        icon: "Users",
        number: "01",
        moduleLabel: "Project Team",
        title: "Team members",
        text: "Directory of engineers, contractors and specialists."
      },
      {
        icon: "Briefcase",
        number: "02",
        moduleLabel: "Team directory",
        title: "Contacts and roles",
        text: "Direct contact details and authorization levels."
      },
      {
        icon: "UserCheck",
        number: "03",
        moduleLabel: "Collaboration",
        title: "Responsibilities",
        text: "Track who owns each package, task and approval."
      }
    ],
    steps: [
      "Add team members",
      "Assign roles",
      "Collaborate on tasks and documents",
      "Track responsibilities"
    ],
    whyItHelps: "Everyone knows who to contact and who owns what.",
    speakerNotes: "Structured stakeholder roles and transparent responsibility matrices eliminate miscommunication on site."
  },

  // ─── 20: THANK YOU ──────────────────────────────────────────────────────────
  {
    slideNumber: 20,
    type: "thankyou",
    ecosystem: "ENTERPRISE PLATFORM",
    eyebrow: "BUILTRAA - ENTERPRISE MANAGEMENT SYSTEM",
    titleNavy: "THANK",
    titleBrand: "YOU.",
    titleNavyAfter: "",
    description: "Building smarter workflows. Connecting people, materials and projects.",
    tagline: "Simplify. Manage. Deliver.",
    speakerNotes: "Thank you for exploring Builtraa's three enterprise ecosystems. We are ready to answer your questions."
  }
];

fs.writeFileSync(filePath, JSON.stringify(slides20, null, 2), 'utf8');
console.log('Successfully written exactly 20 slides to slidesContent.json!');

