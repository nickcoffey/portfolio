/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{md,njk,css}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
