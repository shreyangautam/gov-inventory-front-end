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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
