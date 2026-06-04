import asthaLogo from '../assets/images/astha-logo.png'
import doctorPhoto from '../assets/doctorphoto.jpeg'
import clinicInterior from '../assets/images/clinic-interior.jpg'
import clinicExterior from '../assets/images/clinic-exterior.jpeg'
import heroBrand from '../assets/images/hero.png'

/** Clinic photos — doctor portrait: assets/doctorphoto.jpeg */
export const PAGE_IMAGES = {
  gallery: [clinicInterior, clinicExterior, heroBrand],
}

export const CLINIC = {
  name: 'Astha Health Care',
  tagline: 'Trusted family healthcare in Badarpur',
  phone: '92115 95888',
  phoneTel: 'tel:+919211595888',
  email: 'care@asthahealthcare.in',
  address:
    'C 25, 40 Feet Rd, Block G, Molar band Extension, Badarpur, New Delhi, Delhi 110044',
  mapsUrl:
    'https://maps.google.com/?q=' +
    encodeURIComponent(
      'C 25, 40 Feet Rd, Block G, Molar band Extension, Badarpur, New Delhi, Delhi 110044',
    ),
  doctor: {
    name: 'Dr. Praveer Kumar',
    degrees: 'MBBS, AFIH, PGDIS',
    role: 'Family Physician',
    experience: '25+ years of clinical expertise',
    image: doctorPhoto,
    specialFocus: 'General healthcare, preventive medicine, occupational health & patient wellness',
  },
  assets: {
    logo: asthaLogo,
    bannerVideo: '/banner.mp4',
  },
}
