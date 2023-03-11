/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: '#147dab',
        fontColor: '#2a3a92',
        parColor: '#68747c',
        whiteColor: '#ffffff',
        backColor: '#F7FBFF'
      },
      borderRadius: {
        'md': '20px'
      },
      lineHeight: {
        '10': '3.2rem',
        '11': '4.5rem',
        '12': '6rem',
      },
      fontSize: {
        pxl: '1.7rem',
        
      },
      gridTemplateColumns: {
        'features': 'repeat(auto-fit, minmax(18.7rem, .5fr))',
        'feature': '16rem'
      },
      gridTemplateRows: {
        'feature': 'repeat(2, 6.5rem)'
      },
      borderRadius: {
        'me': '2.5rem',
        'me2': '4rem'
      }
    },
  },
  plugins: [],
}

