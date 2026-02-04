/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // черный
        accent: '#FF6600',  // оранжевый
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
