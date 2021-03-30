// tailwind.config

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#112d4e",
        secondary: "#28425f",
        tertiary: "#586c83",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
