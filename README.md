# Builtraa HR Management — Client-Friendly Deck (20 Slides)

An executive, client-friendly presentation deck for **Builtraa – HR Management**, designed for non-technical stakeholders to clearly understand what each section does, how it works step-by-step, and why it helps in plain language.

Built with **Vite + React + Tailwind CSS + Framer Motion**, featuring a 1920×1080 stage scaled to any screen with CSS transform letterboxing, dual branding (**Builtraa + UXDlab**), liquid-glass navigation controls, and comprehensive export capabilities (**PptxGenJS** and **Playwright PNG**).

---

## 🌟 Key Highlights & Rules Followed

1. **Client-Friendly & Non-Technical:**
   - Zero technical jargon (no `API`, `database`, `sync`, `workflow`, `pipeline`, `telemetry`, `KPI`, `biometric`, `ledger`, `immutable`, `backend`).
   - Plain replacements used:
     - *biometric punch* → "punch at the attendance machine"
     - *automatic sync / automation* → "happens automatically"
     - *workflow* → "steps"
     - *module* → "section"
     - *approval pipeline* → "approval steps"
     - *GOSI* → "GOSI (social insurance)"
     - *LMRA* → "LMRA (labour authority fee)"
     - *indemnity* → "end-of-service benefit"
     - *ball in court* → "who needs to act next"
2. **Zero Screenshots, Product Images, or Mockup Tables:**
   - Pure, modern vector glass cards and step lists.
   - 0 screenshots or image frames anywhere in the app or PPTX export.
3. **No Private / System Data:**
   - No employee names, employee IDs (`EMP-00188` etc.), counts (`21 employees`, `203 cases`), money amounts (`BHD 27,162`), dates, or percentages.
4. **Structured Card System:**
   - Exactly 3 feature cards on the left per section slide (title max 3 words, text max 12 words, height max 170px).
   - "How it works" panel on the right with 3–4 numbered circles and connecting gradient line.
   - "Why it helps" one-line highlight strip at the bottom (max 14 words).
5. **Speaker Notes ("Say it like this"):**
   - 2–3 simple sentences per slide embedded as native PPTX speaker notes (`slide.addNotes(...)`) and visible in the React app via the **NOTES [N]** presenter drawer.
6. **Strict Safe Zones (Zero Overlaps):**
   - Top bar (110px): `HOME` button left (48px margin), `Builtraa | uxdlab` logo right.
   - Bottom bar (110px): `SKIP →` button left, navigation pill centered (`01 — 20`), `NOTES [N]` button right.
   - Content area strictly bounded between `y = 130px` and `y = 970px`. Single slide counter only.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Live at: http://localhost:5173

# Export PowerPoint presentation (20 slides, zero images, native notes)
node scripts/export-pptx.mjs
# Generates: exports/Builtraa_HR_Management_v3.pptx

# Export slide PNG screenshots
node scripts/export-png.mjs
# Generates: exports/png/slide-01.png ... slide-20.png
```

---

## 📑 Slide Directory (1 to 20)

| # | Section Name | Category | Headline / Focus |
|---|--------------|----------|-------------------|
| **01** | Title Slide | Intro | "One place for people, time and pay." Floating icon cluster & 17 section ticker |
| **02** | What this system covers | Overview | 17 sections across 4 categories (People & Time, Money, Rules & Records, Support & Reports) |
| **03** | HR Dashboard | People & Time | Real-time workforce, attendance, and pending alerts at a glance |
| **04** | Employees | People & Time | Complete profile list, staff & labour segregation, document statuses |
| **05** | Leave | People & Time | Multi-tier approval steps, department overviews, and leave adjustments |
| **06** | Payroll | Money | Staff & labour monthly runs, approvals, payment readiness, and locked records |
| **07** | Attendance | People & Time | Daily check-in/out records, auto absent rules, shift setups, and Excel exports |
| **08** | Loan | Money | Loan requests, monthly deductions, outstanding balances, and active stages |
| **09** | Salary Increment | Money | Tracking salary increases, approvals, searches, and payroll application |
| **10** | Salary Discrepancy | Money | Reporting salary issues, HR & MD review stages, and discrepancy resolution |
| **11** | Disciplinary Action | Rules & Records | Recorded notices, severity categories, automated late cases, and appeals |
| **12** | Ticket Management | Support & Reports | Travel entitlement checking, ticket booking vs. cash allowances, and cost logs |
| **13** | Digital Forms | Rules & Records | Paperless personnel requisitions, performance evaluations, and tracking |
| **14** | Clearance Form | Rules & Records | Structured exit checklists, multi-department sign-offs, and asset handovers |
| **15** | Employee Rejoining | Rules & Records | Rejoining records after extended leaves or re-hires, updating active statuses |
| **16** | Report | Support & Reports | Ready-made exports for salary, attendance, expiring documents, and vehicles |
| **17** | Meeting Arrangements | Support & Reports | Scheduling sessions, setting participant groups, and logging meeting statuses |
| **18** | Audit Logs | Rules & Records | Comprehensive log of payroll operations, user actions, statuses, and reasons |
| **19** | Payroll Settings | Money | Baseline statutory rules: GOSI (social insurance), end-of-service, and LMRA fees |
| **20** | Closing Slide | Outro | "Thank you" · "Questions?" with brand glow and return to overview action |
