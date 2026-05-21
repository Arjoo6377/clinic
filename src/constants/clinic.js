import asthaLogo from '../assets/images/astha-logo.png'
import doctorPhoto from '../assets/images/doctor.jpeg'
import clinicInterior from '../assets/images/clinic-interior.jpg'
import clinicExterior from '../assets/images/clinic-exterior.jpeg'
import heroBrand from '../assets/images/hero.png'

/**
 * Each photo appears on exactly one page:
 * About → doctor | Gallery → interior, exterior, hero | Home → video only
 */
export const PAGE_IMAGES = {
  about: doctorPhoto,
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
    role: 'General physician',
    experience: '12+ years in primary care',
    image: doctorPhoto,
  },
  assets: {
    logo: asthaLogo,
    bannerVideo: '/banner.mp4',
  },
}
