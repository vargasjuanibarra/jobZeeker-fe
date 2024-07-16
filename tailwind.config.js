/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ['Roboto', 'sans-serif']
    },
    gridTemplateColumns: {
      '50/50': '45% 45%',
      '70/30':'65% 33%',
      '30/70':'33% 65%'
    }
  },
  plugins: [],
}