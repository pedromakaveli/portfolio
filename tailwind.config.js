/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono'],
        'vancouver': ['Vancouver']
      },
      colors: {
        'primary': '#090911',
        'secondary': '#080814',
        'cyan-bright': '#00FFF0',
        'pink': '#FF058C',
        'menu': 'rgba(22, 22, 37, 0.61)',
      }
    },
  },
  plugins: [],
}

