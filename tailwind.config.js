/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { sand: '#F8F4EF', sage: '#879B87', forest: '#354B40', gold: '#C3A77D', ink: '#27352D' },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 24px 60px -24px rgba(53,75,64,.35)' },
    },
  },
  plugins: [],
}
