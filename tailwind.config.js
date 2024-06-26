/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-black-hover': 'rgba(0, 0, 0, 0.4)',
        'c-black2-hover': 'rgba(0, 0, 1, 0.6)',
        'cgray': '#808080'
      },
      keyframes: {
        'ttb': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'c-scale':{
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.1)'
          }
        },
        'btt': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'searchVisible': {
          '0%': { width: '0%', opacity: 0 },
          '100%': { width: '100%', opacity: 1 }
        }
      },
      animation:{
        'a-ttb': 'ttb .1s ease-in-out',
        'a-c-scale': 'c-scale .5s ease-in-out',
        'a-btt': 'btt .1s ease-in-out',
        'a-searchVisible': 'searchVisible .5s ease-in-out'
      },
      height: {
        '7/100': '7%',
        '93/100': '93%'
      },
      width:{
        '49/100': '49%',
        '49/50': '98%',
        '2f': '200%',
        '3f': '300%',
      },
      fontSize:{
        xs: '0.65rem',
        sm: '0.75rem',
        base: '0.85rem'
      },
      fontFamily:{
        'c-t': ['"Tahoma"']
      }
    },
  },
  plugins: [],
}

