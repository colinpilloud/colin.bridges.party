const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Roboto", "sans-serif"],
      },
      colors: {
        primary: "#e84828",
        secondary: "#cfa6be",
      },
      fontSize: {
        "4xl": "4rem",
        "2xl": "3rem",
        xl: "1.75rem",
        lg: "1.25rem",
        md: "1rem",
        base: "0.9rem",
        sm: "0.66rem",
        xs: "0.5rem",
      },
    },
  },
  plugins: [heroui()],
};
