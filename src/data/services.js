/** Homepage service icons only: stethoscope | shieldCheck | heartPulse | calendar */
export const SERVICES = [
  {
    id: 'general-consultation',
    title: 'General consultation',
    subtitle: 'Diagnosis and treatment for common illnesses and symptoms.',
    icon: 'stethoscope',
    details: [
      'Fever, cough, cold, and seasonal infections',
      'Digestive discomfort, body pain, and fatigue',
      'Skin rashes, allergies, and minor injuries',
      'Clear prescriptions with follow-up when needed',
    ],
  },
  {
    id: 'preventive-checkups',
    title: 'Preventive checkups',
    subtitle: 'Routine screenings, vitals, and wellness monitoring.',
    icon: 'shieldCheck',
    details: [
      'Annual wellness visits for adults and seniors',
      'Blood pressure, weight, and basic lab coordination',
      'Vaccination guidance and travel health advice',
      'Lifestyle counselling tailored to your routine',
    ],
  },
  {
    id: 'chronic-disease',
    title: 'Chronic disease care',
    subtitle: 'Plans for diabetes, blood pressure, thyroid, and more.',
    icon: 'heartPulse',
    details: [
      'Structured monitoring for diabetes and hypertension',
      'Thyroid and lipid management with regular reviews',
      'Medication adjustments explained in simple terms',
      'Referrals to specialists when additional care is needed',
    ],
  },
  {
    id: 'appointment',
    title: 'Request an appointment',
    subtitle: 'Choose a slot that works for you—we will confirm quickly.',
    icon: 'calendar',
    details: [
      'Phone booking with same-day slots when available',
      'Evening and weekend hours for working families',
      'Visit reminders and follow-up scheduling',
      'Emergency triage advice over the phone',
    ],
  },
]

export const CARE_JOURNEY = [
  {
    title: 'Call or walk in',
    text: 'Share your concern and preferred time—we confirm availability and any documents to bring.',
    icon: 'calendar',
  },
  {
    title: 'Consultation',
    text: 'Vitals, history, and examination with a clear explanation before any test or medicine.',
    icon: 'stethoscope',
  },
  {
    title: 'Plan & follow-up',
    text: 'Written guidance, prescriptions, and a follow-up date when your condition needs monitoring.',
    icon: 'shieldCheck',
  },
  {
    title: 'Ongoing care',
    text: 'Chronic patients receive consistent reviews so treatment stays safe and effective long term.',
    icon: 'heartPulse',
  },
]

export const WHO_WE_SERVE = [
  'Children with fever, cough, or routine illness',
  'Adults needing preventive health checks',
  'Seniors managing blood pressure or diabetes',
  'Families seeking one trusted neighborhood clinic',
]
