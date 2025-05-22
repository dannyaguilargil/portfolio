/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a192f',
        accent: '#64ffda',
        primary: '#ccd6f6',
        secondary: '#8892b0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
