const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e84828",
        },
      },
      fontSize: {
        "4xl": "5rem",
        "2xl": "3rem",
        xl: "1.75rem",
        lg: "1.25rem",
        base: "0.9rem",
        sm: "0.75rem",
        xs: "0.5rem",
      },
    },
  },
  plugins: [nextui()],
};
