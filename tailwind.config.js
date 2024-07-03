/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        TextColor: 'rgb(35 37 37 / <alpha-value>)',
        disableBtn: 'rgb(124, 125, 125)',
      },
    },
  },
  plugins: [],
}