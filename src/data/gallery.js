import clinicInterior from '../assets/images/clinic-interior.jpg'
import clinicExterior from '../assets/images/clinic-exterior.jpeg'
import heroBrand from '../assets/images/hero.png'

/** Gallery-only assets — not used on other pages */
export const GALLERY_ITEMS = [
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
