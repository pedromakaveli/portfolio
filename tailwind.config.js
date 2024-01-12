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
        'secondary': '#01012b',
        'cyan-bright': '#05d9e8',
        'ocean-blue': '#05CDFF',
        'pink': '#ff2a6d',
        'menu': 'rgba(1,1,43, 0.30)',
      }
    },
  },
  plugins: [],
}