/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      sm: '3px',
      '18px': '18px',
      '20px': '20px',
          },
    extend: {
      colors: {
        deepBlue :"#1E3A8A",
      }
    },
  },
  plugins: [],
}