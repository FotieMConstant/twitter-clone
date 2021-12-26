module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        lightBlue: "rgba(29, 155, 240, 0.1)",
        twitterBlue: "#1d9bf0",
        twitterBlueHovered: "rgb(26, 140, 216)"
      },
      backgroundColor: {
        gray: "rgba(15, 20, 25, 0.1)",
        lightBlue: "rgba(29, 155, 240, 0.1)",
        twitterBlue: "rgb(29, 155, 240)",
        twitterBlueHovered: "rgb(26, 140, 216)",
        tranparentGrayBg: "rgb(239 243 244)",
        trendingBg: "#f7f9f9",
        hoverGrayTrendingBg: "rgb(0, 0, 0, 0.03)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
