/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono'],
        'vancouver': ['Vancouver']
      }
    },
  },
  plugins: [],
}

