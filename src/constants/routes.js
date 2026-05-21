export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  insurance: '/insurance',
  hours: '/hours',
  contact: '/contact',
  testimonials: '/testimonials',
  faq: '/faq',
  gallery: '/gallery',
}

export const NAV_ITEMS = [
  { to: ROUTES.home, label: 'Home', end: true },
  { to: ROUTES.services, label: 'Services' },
  { to: ROUTES.about, label: 'About' },
  { to: ROUTES.hours, label: 'Hours' },
  { to: ROUTES.insurance, label: 'Insurance' },
  { to: ROUTES.contact, label: 'Contact' },
]
