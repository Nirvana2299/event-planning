/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '132': '44rem',
        '136': '48rem'
      },
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive']
      },
      colors: {
        'bisque': 'ffe4c4'
      }
    },
  },
  plugins: [],
}