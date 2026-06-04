/** OPD timings per Dr. Praveer Kumar clinic schedule */
export const OPD_SCHEDULE = {
  morning: '9:00 AM – 10:30 AM',
  evening: '5:00 PM – 9:00 PM',
  sunday: '5:00 PM – 7:00 PM',
}

export const OPENING_HOURS = [
  ['Monday – Saturday (Morning)', OPD_SCHEDULE.morning],
  ['Monday – Saturday (Evening)', OPD_SCHEDULE.evening],
  ['Sunday', OPD_SCHEDULE.sunday],
]

export const HOURS_HIGHLIGHTS = [
  {
    title: 'Morning OPD',
    text: '9:00 AM to 10:30 AM, Monday through Saturday—ideal for early visits before work or school.',
    icon: 'calendar',
  },
  {
    title: 'Evening OPD',
    text: '5:00 PM to 9:00 PM, Monday through Saturday—convenient for families after office hours.',
    icon: 'heartPulse',
  },
  {
    title: 'Sunday hours',
    text: '5:00 PM to 7:00 PM on Sunday—evening consultation only.',
    icon: 'shieldCheck',
  },
]

export const VISIT_TIPS = [
  'Arrive 10 minutes early for registration, especially on first visits.',
  'Morning OPD is 9:00–10:30 AM; evening OPD is 5:00–9:00 PM (Mon–Sat).',
  'Sunday consultations are available 5:00–7:00 PM only.',
  'Call ahead to confirm slot availability during busy evening hours.',
  'Bring insurance cards, prior reports, and a list of current medicines.',
]
