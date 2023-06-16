/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fecd19",
        secondary: "#923717",
        tertiary: "#9D3D1A",
        content: "#393938",
        space: "#fef7db",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        lilita: ["var(--font-Lilita_One)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
