export const INSURANCE_PLANS = [
  {
    name: 'Cashless & reimbursement',
    description: 'We support major insurers for cashless claims and reimbursement documentation at the desk.',
    icon: 'shieldCheck',
    points: ['Policy verification at reception', 'Pre-auth guidance for eligible procedures', 'Claim forms assistance'],
  },
  {
    name: 'Transparent consultation fees',
    description: 'Clear fee structure for visits, follow-ups, and common procedures—ask our front desk anytime.',
    icon: 'stethoscope',
    points: ['New patient and follow-up fee clarity', 'Procedure estimates before treatment', 'Receipts for employer claims'],
  },
  {
    name: 'Corporate & family plans',
    description: 'Valid coverage letters and ID cards help us process claims smoothly for you and dependents.',
    icon: 'calendar',
    points: ['Dependent coverage checks', 'Corporate tie-up documentation', 'Repeat visit billing support'],
  },
]

export const INSURANCE_STEPS = [
  { title: 'Bring documents', text: 'Insurance card, photo ID, and any employer letter on your first insured visit.', icon: 'shieldCheck' },
  { title: 'Desk verification', text: 'Our team confirms network status and explains out-of-pocket costs upfront.', icon: 'calendar' },
  { title: 'Treatment & billing', text: 'Care proceeds with agreed fees; cashless or reimbursement per your plan.', icon: 'stethoscope' },
  { title: 'Follow-up support', text: 'Additional visits reuse your file—less paperwork each time.', icon: 'heartPulse' },
]

export const INSURANCE_FAQ = [
  {
    q: 'Which insurers do you accept?',
    a: 'We work with most major health insurers in India. Bring your policy card on your first visit and our team will confirm eligibility.',
  },
  {
    q: 'Do I need pre-authorization?',
    a: 'For some plans, pre-authorization may be required for specific procedures. Call us before your visit and we will guide you.',
  },
  {
    q: 'Are walk-in visits covered?',
    a: 'Coverage depends on your policy type. We advise calling your insurer or our desk before assuming cashless eligibility.',
  },
]

export const FEE_GUIDE = [
  { label: 'General consultation', note: 'Discussed at reception based on visit type' },
  { label: 'Follow-up within 7 days', note: 'Reduced fee when advised at prior visit' },
  { label: 'Procedure / dressing', note: 'Quoted before treatment begins' },
]
