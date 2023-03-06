/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        sans: ['var(--font-source)', ...fontFamily.sans],
      },
      colors: {
        primary: "#1f1d21",
        secondary: "#bd0032"

      },
      boxShadow: {
        medium: "0 10px 20px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 25%)"
      }
    },
  },
  plugins: [],
}
