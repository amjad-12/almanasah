/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: '#147dab',
        iconColor: '#31a9dc',
        blueColor: '#73c8ed',
        fontColor: '#2a3a92',
        parColor: '#68747c',
        whiteColor: '#ffffff',
        backColor: '#F7FBFF',
        goldColor: '#eee52a',
      },
      lineHeight: {
        '10': '3.2rem',
        '11': '4.5rem',
        '12': '6rem',
      },
      fontSize: {
        pxl: '1.7rem',
        plan: '2.5rem',
        num: '4rem'
        
      },
      gridTemplateColumns: {
        'features': 'repeat(auto-fit, minmax(18.7rem, .5fr))',
        'feature': '16rem',
        'advantage': 'repeat(auto-fit, minmax(10rem, 1fr))',
        'plans': 'repeat(auto-fit, minmax(25rem, 1fr))'
      },
      gridTemplateRows: {
        'feature': 'repeat(2, 6.5rem)',
        'plan': 'repeat(3, 1fr)'
      },
      borderRadius: {
        'me': '2.5rem',
        'me2': '4rem'
      }
    },
  },
  plugins: [],
}

