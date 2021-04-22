// tailwind.config

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      'primary': '#28425f',
      'secondary': '#0f2846',
    }),

    fontFamily: {
      custom: ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#112d4e",
        primaryDark: "#0f2846",
        secondary: "#28425f",
        tertiary: "#586c83",
        modal: '#000005',
      }),
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10)'
          },
        },
        'draw-down': {
          '0%': {
            //opacity: '1',
            transform: 'translateY(-10)'
          },
          '100%': {
            //opacity: '0',
            transform: 'translateY(0)'
          },
        }


      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.2s ease-out',
        'draw-down': 'draw-down 0.2s ease-out'

      },
      screens: {
        'sm-x-2': '400px',
      },
      margin: {
        '-100': '-108px'
      },
      width: {
        'modal-sm': '550px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
