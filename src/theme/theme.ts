/**
 * Astha Health Care — design tokens extracted from homepage.
 * Do not add colors outside this palette.
 */
export const colors = {
  astha: {
    950: '#0a2238',
    900: '#0c2847',
    800: '#153c72',
    700: '#1a4a85',
    100: '#e9f1fb',
    200: '#d4e0f0',
  },
  white: '#ffffff',
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
  },
  slate: {
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  red: {
    600: '#dc2626',
  },
} as const

export const gradients = {
  heroOverlay: 'from-astha-950/55 via-astha-900/25 to-astha-900/15',
  servicesSection: 'from-astha-100 to-white',
  imageOverlay: 'from-astha-950/45 via-astha-900/12 to-transparent',
  cta: 'from-astha-900 to-astha-800',
} as const

export const typography = {
  fontFamily: {
    sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
    display: "'Poppins', 'Inter', ui-sans-serif, sans-serif",
  },
  fontSize: {
    eyebrow: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const

export const spacing = {
  sectionY: { sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', '2xl': '5rem' },
  containerX: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
  gap: { sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2.5rem' },
} as const

export const borderRadius = {
  button: '0.5rem',
  card: '1rem',
  panel: '0.75rem',
  pill: '9999px',
} as const

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const

export const container = {
  max: '72rem',
  narrow: '48rem',
  prose: '42rem',
} as const

export const buttons = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  cta: 'btn-cta',
} as const

export const cards = {
  default: 'card',
  stat: 'card-stat',
  service: 'card-service',
  glass: 'card-glass',
} as const

export const theme = {
  colors,
  gradients,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  container,
  buttons,
  cards,
} as const

export default theme
