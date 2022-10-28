/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xxs': '375px',
        'xs': '420px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      fontFamily: {
        Monsterrat: ['"Monsterrat"','sans-serif']
      },
    },
  },
  plugins: [],
}
