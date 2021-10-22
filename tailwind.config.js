module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        lightBlue: "rgba(29, 155, 240, 0.1)"
      },
      backgroundColor: {
        gray: "rgba(15, 20, 25, 0.1)",
        lightBlue: "rgba(29, 155, 240, 0.1)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
