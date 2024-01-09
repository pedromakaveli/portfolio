/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono'],
        'vancouver': ['Vancouver'],
        'montserrat': ['Montserrat'],
      },
      colors: {
        'primary': '#090911',
        'secondary': '#12121E',
        'cyan-bright': '#00FFF0',
        'ocean-blue': '#05CDFF',
        'pink': '#FF058C',
        'menu': 'rgba(95, 95, 95, 0.50)',
      }
    },
  },
  plugins: [],
}