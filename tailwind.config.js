/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        astha: {
          950: '#0a2238',
          900: '#0c2847',
          800: '#153c72',
          700: '#1a4a85',
          100: '#e9f1fb',
          200: '#d4e0f0',
        },
      },
      maxWidth: {
        container: '72rem',
        narrow: '48rem',
        prose: '42rem',
      },
      borderRadius: {
        card: '1rem',
        panel: '0.75rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        glass: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        cta: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
}
