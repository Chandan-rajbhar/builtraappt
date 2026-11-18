import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../src/slidesContent.json');
const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 1. Keep Title slide (1)
const slide1 = rawData.find(s => s.slideNumber === 1);

// 2. HR Overview slide (2) with original 4 categories
const slide2 = {
  slideNumber: 2,
  type: "overview",
  eyebrow: "02 / OVERVIEW",
  titleNavy: "What this system",
  titleBrand: "covers",
  titleNavyAfter: "",
  intro: "17 sections, grouped by what they help you do.",
  categories: [
    {
      title: "People & Time",
      icon: "Users",
      sections: [
        { name: "HR Dashboard", slide: 3 },
        { name: "Employees", slide: 4 },
        { name: "Attendance", slide: 7 },
        { name: "Leave", slide: 5 }
      ]
    },
    {
      title: "Money",
      icon: "Wallet",
      sections: [
        { name: "Payroll", slide: 6 },
        { name: "Loan", slide: 8 },
        { name: "Salary Increment", slide: 9 },
        { name: "Salary Discrepancy", slide: 10 },
        { name: "Payroll Settings", slide: 19 }
      ]
    },
    {
      title: "Rules & Records",
      icon: "ShieldCheck",
      sections: [
        { name: "Disciplinary Action", slide: 11 },
        { name: "Digital Forms", slide: 13 },
        { name: "Clearance Form", slide: 14 },
        { name: "Employee Rejoining", slide: 15 },
        { name: "Audit Logs", slide: 18 }
      ]
    },
    {
      title: "Support & Reports",
      icon: "BarChart3",
      sections: [
        { name: "Ticket Management", slide: 12 },
        { name: "Meeting Arrangements", slide: 17 },
        { name: "Report", slide: 16 }
      ]
    }
  ],
  speakerNotes: "These 17 sections cover the full journey of an employee, from joining to leaving."
};

// 3. Keep HR module slides 3 to 19 unchanged
const hrModuleSlides = rawData.filter(s => s.slideNumber >= 3 && s.slideNumber <= 19);

// 4. Slide 20: Material Management Overview slide
const slide20 = {
  slideNumber: 20,
  type: "mm-overview",
  eyebrow: "20 / OVERVIEW",
  titleNavy: "What Material Management",
  titleBrand: "covers",
  titleNavyAfter: "",
  intro: "13 sections, grouped by what they help you do.",
  categories: [
    {
      title: "Requests & Buying",
      icon: "ShoppingCart",
      sections: [
        { name: "Material Request Dashboard", slide: 21 },
        { name: "Procurement Queue", slide: 22 },
        { name: "RFQ / Quotations", slide: 23 },
        { name: "Purchase Orders", slide: 24 }
      ]
    },
    {
      title: "Delivery & Stock",
      icon: "Truck",
      sections: [
        { name: "Deliveries", slide: 25 },
        { name: "Material Master", slide: 26 },
        { name: "Receipts (GRN)", slide: 27 },
        { name: "Inventory", slide: 28 }
      ]
    },
    {
      title: "Vendors & Payments",
      icon: "Wallet",
      sections: [
        { name: "Accounts & Bills", slide: 29 },
        { name: "Vendors", slide: 30 }
      ]
    },
    {
      title: "Site Assets",
      icon: "Wrench",
      sections: [
        { name: "Asset List", slide: 31 },
        { name: "Operational Assets Request", slide: 32 },
        { name: "Operational Assets Inventory", slide: 33 }
      ]
    }
  ],
  speakerNotes: "Material Management organizes the entire construction supply chain across 13 specialized sections from requisition to site assets."
};

// 5. 13 Material Management Module slides (Slides 21 to 33)
const mmModuleSlides = [
  {
    slideNumber: 21,
    type: "module",
    sectionName: "Material Request Dashboard",
    eyebrow: "21 / DASHBOARD",
    titleNavy: "Material Request",
    titleBrand: "Dashboard",
    titleNavyAfter: "",
    intro: "See every material request and where it stands.",
    moduleIcon: "LayoutDashboard",
    cards: [
      {
        icon: "LayoutDashboard",
        number: "01",
        title: "Status at a glance",
        text: "Totals for pending approval, approved and rejected requests."
      },
      {
        icon: "FileText",
        number: "02",
        title: "Easy search",
        text: "Find a request by number, site or status."
      },
      {
        icon: "CheckSquare",
        number: "03",
        title: "Quick actions",
        text: "Raise a new request or export the list."
      }
    ],
    steps: [
      "Raise a request",
      "Pending PM approval",
      "Approved",
      "Goes to procurement"
    ],
    whyItHelps: "Every material need is visible from request to approval.",
    speakerNotes: "This dashboard gives site managers and buyers real-time visibility into all raised material requests and their current approval stage."
  },
  {
    slideNumber: 22,
    type: "module",
    sectionName: "Procurement Queue",
    eyebrow: "22 / PROCUREMENT QUEUE",
    titleNavy: "Procurement",
    titleBrand: "Queue",
    titleNavyAfter: "",
    intro: "Items that must be bought from outside vendors.",
    moduleIcon: "ShoppingCart",
    cards: [
      {
        icon: "ShoppingCart",
        number: "01",
        title: "Items to buy",
        text: "Requested items that are not available in warehouse stock."
      },
      {
        icon: "AlertCircle",
        number: "02",
        title: "Key numbers",
        text: "Pending items, total units to buy and high-priority items."
      },
      {
        icon: "FileSpreadsheet",
        number: "03",
        title: "Quick RFQ",
        text: "Send one item to RFQ or create a global RFQ."
      }
    ],
    steps: [
      "Stock is checked",
      "Shortfall joins the queue",
      "RFQ is created",
      "Vendors are asked for quotes"
    ],
    whyItHelps: "Nothing that needs buying is missed.",
    speakerNotes: "When warehouse stock cannot fulfill a request, items automatically enter this queue so procurement teams can act immediately."
  },
  {
    slideNumber: 23,
    type: "module",
    sectionName: "Request for Quotation",
    eyebrow: "23 / RFQ / QUOTATIONS",
    titleNavy: "Request for",
    titleBrand: "Quotation",
    titleNavyAfter: "",
    intro: "Ask vendors for prices and compare their quotations.",
    moduleIcon: "FileSpreadsheet",
    cards: [
      {
        icon: "FileSpreadsheet",
        number: "01",
        title: "Materials and assets",
        text: "Separate tabs for material RFQs and asset RFQs."
      },
      {
        icon: "CheckCircle2",
        number: "02",
        title: "Clear status",
        text: "Requested, pending, approved, rejected or on hold."
      },
      {
        icon: "FileText",
        number: "03",
        title: "Easy search",
        text: "Find any RFQ quickly."
      }
    ],
    steps: [
      "Create an RFQ",
      "Send to vendors",
      "Compare quotations",
      "Approve the best one"
    ],
    whyItHelps: "Prices are compared fairly before anything is bought.",
    speakerNotes: "Procurement sends requests for quotations to multiple suppliers, compares responses side by side, and approves the best price."
  },
  {
    slideNumber: 24,
    type: "module",
    sectionName: "Purchase Orders",
    eyebrow: "24 / PURCHASE ORDERS",
    titleNavy: "Purchase",
    titleBrand: "Orders",
    titleNavyAfter: "",
    intro: "Purchase orders linked to material and asset requests.",
    moduleIcon: "CreditCard",
    cards: [
      {
        icon: "CreditCard",
        number: "01",
        title: "Zoho Books link",
        text: "Purchase orders are synced from Zoho Books."
      },
      {
        icon: "FileText",
        number: "02",
        title: "Track every order",
        text: "Vendor, amount, delivery date and status in one list."
      },
      {
        icon: "Sliders",
        number: "03",
        title: "Counts and tabs",
        text: "Open, received and billed totals; view all, MR or AR orders."
      }
    ],
    steps: [
      "PO is drafted",
      "Approved",
      "Material received",
      "Billed"
    ],
    whyItHelps: "Every order can be traced from request to bill.",
    speakerNotes: "Purchase orders connect approved quotes to Zoho Books accounting, ensuring every order matches deliveries and invoices."
  },
  {
    slideNumber: 25,
    type: "module",
    sectionName: "Deliveries & Shipments",
    eyebrow: "25 / DELIVERIES",
    titleNavy: "Deliveries &",
    titleBrand: "Shipments",
    titleNavyAfter: "",
    intro: "Track material delivery from approval to site.",
    moduleIcon: "Truck",
    cards: [
      {
        icon: "Truck",
        number: "01",
        title: "Shipment counts",
        text: "Total, pending, in progress and delivered shipments."
      },
      {
        icon: "Package",
        number: "02",
        title: "Stock status",
        text: "See if the material is already in stock."
      },
      {
        icon: "TrendingUp",
        number: "03",
        title: "Progress tracking",
        text: "Each request shows its stage and percentage."
      }
    ],
    steps: [
      "Waiting for approval",
      "Dispatched",
      "In progress",
      "Delivered"
    ],
    whyItHelps: "Teams always know what is coming and when.",
    speakerNotes: "Project sites track in-transit material shipments with live dispatch stages and expected delivery dates."
  },
  {
    slideNumber: 26,
    type: "module",
    sectionName: "Material Master",
    eyebrow: "26 / MATERIAL MASTER",
    titleNavy: "Material",
    titleBrand: "Master",
    titleNavyAfter: "",
    intro: "One master list of all approved materials.",
    moduleIcon: "Layers",
    cards: [
      {
        icon: "Layers",
        number: "01",
        title: "All disciplines",
        text: "Civil, electrical, mechanical and HVAC materials together."
      },
      {
        icon: "FileText",
        number: "02",
        title: "Full details",
        text: "Code, description, size, unit and class for each material."
      },
      {
        icon: "Sliders",
        number: "03",
        title: "Filters and export",
        text: "Filter by discipline, category or unit; export to Excel."
      }
    ],
    steps: [
      "Add a material",
      "Set code and specification",
      "Map the cost code",
      "Material is active"
    ],
    whyItHelps: "Everyone orders the same materials with the same names and codes.",
    speakerNotes: "A single standardized catalog eliminates duplicate entries and ensures consistent item specifications across projects."
  },
  {
    slideNumber: 27,
    type: "module",
    sectionName: "Goods Receipt",
    eyebrow: "27 / RECEIPTS (GRN)",
    titleNavy: "Goods",
    titleBrand: "Receipt",
    titleNavyAfter: "",
    intro: "Receive material, check quality and add it to the store.",
    moduleIcon: "CheckSquare",
    cards: [
      {
        icon: "Clock",
        number: "01",
        title: "Pending dispatch",
        text: "See every purchase order waiting to be received."
      },
      {
        icon: "ShieldCheck",
        number: "02",
        title: "Quality and store status",
        text: "Each order shows its QC status and store status."
      },
      {
        icon: "History",
        number: "03",
        title: "Issues and history",
        text: "Track items with issues and past dispatches."
      }
    ],
    steps: [
      "Material arrives",
      "Quality check",
      "Store inward",
      "Recorded in history"
    ],
    whyItHelps: "Only checked material enters the store.",
    speakerNotes: "Storekeepers inspect incoming deliveries for quality and quantity before signing off and inwarding goods into stock."
  },
  {
    slideNumber: 28,
    type: "module",
    sectionName: "Inventory & Stock",
    eyebrow: "28 / INVENTORY",
    titleNavy: "Inventory &",
    titleBrand: "Stock",
    titleNavyAfter: "",
    intro: "Know exactly what is in stock and what is free to use.",
    moduleIcon: "Boxes",
    cards: [
      {
        icon: "Boxes",
        number: "01",
        title: "Four stock levels",
        text: "On-hand, usable, reserved and on-order quantities."
      },
      {
        icon: "AlertCircle",
        number: "02",
        title: "Low stock watch",
        text: "Low and out-of-stock items are counted."
      },
      {
        icon: "History",
        number: "03",
        title: "Easy updates",
        text: "Add stock in a batch and view activity logs."
      }
    ],
    steps: [
      "Stock is received",
      "Added to inventory",
      "Reserved for requests",
      "Issued to site"
    ],
    whyItHelps: "Stock numbers stay accurate and shortages are seen early.",
    speakerNotes: "Live inventory balances distinguish between on-hand stock and quantities already reserved for active construction sites."
  },
  {
    slideNumber: 29,
    type: "module",
    sectionName: "Accounts & Payments",
    eyebrow: "29 / ACCOUNTS & BILLS",
    titleNavy: "Accounts &",
    titleBrand: "Payments",
    titleNavyAfter: "",
    intro: "Handle material invoices and pay vendors.",
    moduleIcon: "Wallet",
    cards: [
      {
        icon: "FileText",
        number: "01",
        title: "Invoice entry",
        text: "Record vendor invoices against each order."
      },
      {
        icon: "CheckCircle2",
        number: "02",
        title: "Approvals",
        text: "Payments are approved before they are made."
      },
      {
        icon: "Coins",
        number: "03",
        title: "Settlement tracking",
        text: "See partial payments and settled history."
      }
    ],
    steps: [
      "Invoice is entered",
      "Payment approved",
      "Paid in full or part",
      "Settled"
    ],
    whyItHelps: "Vendor bills are checked and paid in an organised way.",
    speakerNotes: "Invoices are matched directly with purchase orders and goods receipt notes before accounts releases vendor payments."
  },
  {
    slideNumber: 30,
    type: "module",
    sectionName: "Vendor / Supplier Management",
    eyebrow: "30 / VENDORS",
    titleNavy: "Vendor / Supplier",
    titleBrand: "Management",
    titleNavyAfter: "",
    intro: "Keep all vendors and their contacts in one list.",
    moduleIcon: "Building2",
    cards: [
      {
        icon: "Users",
        number: "01",
        title: "Vendor details",
        text: "Code, contact person, email, phone and city."
      },
      {
        icon: "Layers",
        number: "02",
        title: "Trade categories",
        text: "Steel, paints, concrete, MEP and more."
      },
      {
        icon: "UserPlus",
        number: "03",
        title: "Quick add",
        text: "Add a new vendor or refresh the list."
      }
    ],
    steps: [
      "Add a vendor",
      "Choose trade category",
      "Used in RFQs",
      "Used in purchase orders"
    ],
    whyItHelps: "The right vendor is always easy to find.",
    speakerNotes: "All approved suppliers are organized by trade category with full contact details and transaction history in one directory."
  },
  {
    slideNumber: 31,
    type: "module",
    sectionName: "Asset List",
    eyebrow: "31 / ASSET LIST",
    titleNavy: "Asset",
    titleBrand: "List",
    titleNavyAfter: "",
    intro: "Manage machinery assets and their suppliers.",
    moduleIcon: "Wrench",
    cards: [
      {
        icon: "Wrench",
        number: "01",
        title: "Asset details",
        text: "Code, name, size and unit such as month, shift or pour."
      },
      {
        icon: "Building2",
        number: "02",
        title: "Preferred vendors",
        text: "Suppliers assigned to each asset."
      },
      {
        icon: "FileSpreadsheet",
        number: "03",
        title: "Add and export",
        text: "Add a new asset or export the list."
      }
    ],
    steps: [
      "Add an asset",
      "Set size and unit",
      "Map vendors",
      "Asset is active"
    ],
    whyItHelps: "Machinery and its suppliers are ready when needed.",
    speakerNotes: "All site machinery, vehicles, and heavy tools are listed with rental units and assigned preferred suppliers."
  },
  {
    slideNumber: 32,
    type: "module",
    sectionName: "Operational Assets Request",
    eyebrow: "32 / OPERATIONAL ASSETS REQUEST",
    titleNavy: "Operational Assets",
    titleBrand: "Request",
    titleNavyAfter: "",
    intro: "Request site machinery, tools and equipment.",
    moduleIcon: "ClipboardList",
    cards: [
      {
        icon: "CheckCircle2",
        number: "01",
        title: "Clear status",
        text: "Pending, approved, issued, returned or rejected."
      },
      {
        icon: "Sliders",
        number: "02",
        title: "Filters and views",
        text: "Filter by status and stock status; list or grid view."
      },
      {
        icon: "FileText",
        number: "03",
        title: "New request",
        text: "Raise a request and export the list."
      }
    ],
    steps: [
      "Request is raised",
      "Approved",
      "Issued to site",
      "Returned"
    ],
    whyItHelps: "Site tools are issued and returned with a proper record.",
    speakerNotes: "Sites request operational assets and machinery with full accountability for issue dates, project sites, and return timelines."
  },
  {
    slideNumber: 33,
    type: "module",
    sectionName: "Operational Assets Inventory",
    eyebrow: "33 / OPERATIONAL ASSETS INVENTORY",
    titleNavy: "Operational Assets",
    titleBrand: "Inventory",
    titleNavyAfter: "",
    intro: "Know which tools and machines are free or in use.",
    moduleIcon: "ShieldCheck",
    cards: [
      {
        icon: "ShieldCheck",
        number: "01",
        title: "Asset counts",
        text: "Total, available and in-use assets."
      },
      {
        icon: "Boxes",
        number: "02",
        title: "Asset list",
        text: "Code, name, category and quantities."
      },
      {
        icon: "UserCheck",
        number: "03",
        title: "Add stock",
        text: "Add a new stock entry in a few clicks."
      }
    ],
    steps: [
      "Stock entry is added",
      "Available",
      "Issued (in use)",
      "Returned to stock"
    ],
    whyItHelps: "Always know which assets are free and which are in use.",
    speakerNotes: "Site managers see which equipment is currently deployed on sites and which items are free in storage ready for use."
  }
];

// 6. Slide 34: Thank You (Closing slide)
const slide34 = {
  slideNumber: 34,
  type: "closing",
  eyebrow: "34 / SUMMARY",
  titleNavy: "Thank",
  titleBrand: "you",
  titleNavyAfter: "",
  intro: "Questions?",
  speakerNotes: "Thank you for your time. I am happy to answer any questions about any of the sections we walked through."
};

const fullSlides = [
  slide1,
  slide2,
  ...hrModuleSlides,
  slide20,
  ...mmModuleSlides,
  slide34
];

fs.writeFileSync(filePath, JSON.stringify(fullSlides, null, 2), 'utf8');
console.log('Successfully written', fullSlides.length, 'slides to slidesContent.json!');
