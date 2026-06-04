import doctorPhoto from '../assets/doctorphoto.jpeg'
import clinicInterior from '../assets/images/clinic-interior.jpg'
import clinicExterior from '../assets/images/clinic-exterior.jpeg'
import heroBrand from '../assets/images/hero.png'

export const GALLERY_ITEMS = [
  {
    src: doctorPhoto,
    alt: 'Dr. Praveer Kumar — Family Physician',
    caption: 'Dr. Praveer Kumar',
    description: 'MBBS, AFIH, PGDIS — 25+ years serving families in Badarpur.',
    portrait: true,
  },
  {
    src: clinicInterior,
    alt: 'Bright reception and waiting area',
    caption: 'Reception & waiting lounge',
    description: 'A calm, air-conditioned waiting space designed for families and seniors.',
  },
  {
    src: clinicExterior,
    alt: 'Astha Health Care clinic building exterior',
    caption: 'Clinic exterior — Badarpur',
    description: 'Easy to locate on 40 Feet Road, Molar Band Extension.',
  },
  {
    src: heroBrand,
    alt: 'Astha Health Care branding',
    caption: 'Our commitment to care',
    description: 'Trusted general physician services for the local community.',
  },
]

export const GALLERY_FEATURES = [
  { title: 'Hygienic consultation rooms', icon: 'shieldCheck' },
  { title: 'Organised pharmacy coordination', icon: 'stethoscope' },
  { title: 'Comfortable family seating', icon: 'heartPulse' },
  { title: 'Accessible clinic hours', icon: 'calendar' },
]
