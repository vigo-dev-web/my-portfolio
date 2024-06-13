/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '120d1f',
      'midnight': '#120d1f',
      'lightblue': '#2999fc',
    },
    container: {
      center: true,
    },
    fontSize: {
      base: '1rem',
    },
    extend: {
      transitionDuration: {
        '500': '500ms',
      }
    },
  },
  plugins: [],
}