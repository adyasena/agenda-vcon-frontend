/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      'blue-primary': '#00458E',
      'blue-light': '#0093DD',
      'blue-dark': '#28166F',
      'green-primary': '#36AE7C',
      'red-primary': '#D91C1C',
      'red-dark': '#C21010',
      'black': '#151515',
      'grey': '#CCCCCC',
      'white': '#F3F3F3'
    },
    extend: {},
    screens: {
      xm: "350px",
      sm: "640px",
      md: "913px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}
