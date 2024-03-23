/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-image':"url('./public/bg.png')"
      }
    },
  },
  plugins: [],
}