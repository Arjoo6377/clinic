export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  serviceDetail: (slug) => `/services/${slug}`,
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
  { to: ROUTES.contact, label: 'Contact' },
]
