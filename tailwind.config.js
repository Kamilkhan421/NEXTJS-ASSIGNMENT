const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Roboto Condensed'", ...fontFamily.sans],
        subheading: ["'Inter'", ...fontFamily.sans],
      },
      colors: {
        primary: "#1959AC",
        secondary: "#0546D2",
        text: "#222222",
      },
    },
  },
  plugins: [],
};
