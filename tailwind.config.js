/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#294A9B',
          'primary-dark': '#1C3672',
          'primary-light': '#365BC7',
          secondary: '#1976B9',
          'secondary-dark': '#125A8E',
          'secondary-light': '#3792D4',
          charcoal: '#343434',
          'charcoal-dark': '#1C1F22',
          'charcoal-light': '#4D535A',
          grey: '#858585',
          'grey-light': '#E2E5E9',
          surface: '#F3F4F5',
          'surface-subtle': '#F8F9FA',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.18em',
      }
    },
  },
  plugins: [],
}
