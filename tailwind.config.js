/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'kkanit' : ['Kanit'],
        'ostwald' : ["Oswald", 'sans-serif'],
        'mulish' : ["Mulish", 'sans-serif'],
        'chivo' : [ "Chivo", 'sans-serif'],
      },
    },
  },
  plugins: [],
}