const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

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
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            // primary: "#e84828",
          },
        },
        dark: {
          colors: {
            // primary: "#e84828",
          },
        },
      },
    }),
  ],
};
