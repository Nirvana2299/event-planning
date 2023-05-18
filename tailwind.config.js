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
      width: {
        '128': '32rem',
        '132': '44rem',
        '136': '48rem'
      },
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive']
      },
      colors: {
        'bisque': {
          100: '#ffe4c4',
          200: '#ccb69d',
          300: '#a3927e',
          400: '#827565',
          500: '#685e51',
          600: '#534b41',
          700: '#423c34',
          800: '#35302a',
          900: '#2a2622',
          1000: '#221e1b'
        },
        'rosegold': {
          100: '#b76e79'
        },
        'gentlecare': {
          100: '#ffc3a0',
          200: '#ffafbd',
          300: '#C9AD93'
        }
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}