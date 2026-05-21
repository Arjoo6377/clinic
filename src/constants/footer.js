import { ROUTES } from './routes'

export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { to: ROUTES.home, label: 'Home' },
      { to: ROUTES.about, label: 'About us' },
      { to: ROUTES.services, label: 'Services' },
      { to: ROUTES.gallery, label: 'Gallery' },
    ],
  },
  {
    title: 'Patient info',
    links: [
      { to: ROUTES.hours, label: 'Opening hours' },
      { to: ROUTES.insurance, label: 'Insurance & fees' },
      { to: ROUTES.faq, label: 'FAQ' },
      { to: ROUTES.testimonials, label: 'Testimonials' },
    ],
  },
  {
    title: 'Get care',
    links: [
      { to: ROUTES.contact, label: 'Contact & directions' },
      { to: ROUTES.contact, label: 'Book appointment' },
    ],
  },
]
