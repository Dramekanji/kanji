/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#222222',
        'gray-dark': '#7B7B7B',
        'gray-light': '#F8F8F8',
        'gray-border': '#E0E0E0',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-mobile': ['4rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-tablet': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '500' }],
        'hero': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '500' }],
        'section': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'section-mobile': ['2rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '500' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },
    },
  },
  plugins: [],
}
