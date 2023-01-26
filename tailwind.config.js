/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    height: {
      75: "75px",
      50: "50px",
      30: "30px",
    },
    width:{
      75: "75px",
      50: "50px",
      40: "40%",
      30: "30px",
      80: "80%",
      60: "60%",
      'full': "100%",
    },
    spacing: {
      0: "0",
      "1/2": "0.5rem",
      1: "1rem",
      2: "2rem",
      3: "3rem",
      "1/5": "20%",
      "1/10": "10%",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      text: "#07004D",
      lime: "#65a30d",
      green: "#365314",
      pink: "#fda4af",
      off: "#fffbeb",
      background:"#fffbeb",
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  plugins: [],
};
