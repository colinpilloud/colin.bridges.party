const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      metal: ["Burn The Witch", "sans-serif"],
    },
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Roboto", "sans-serif"],
      },
      colors: {
        primary: "#e84828",
        secondary: "#ffffff",
        focus: "#f0f0f0",
      },
      fontSize: {
        "4xl": "3.33rem",
        "2xl": "2.5rem",
        xl: "1.75rem",
        lg: "1.25rem",
        md: "1rem",
        base: "0.9rem",
        sm: "0.66rem",
        xs: "0.5rem",
      },
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
  },
  plugins: [heroui()],
};
