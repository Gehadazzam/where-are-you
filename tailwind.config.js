/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgba(202,202,214,0.8)',
          dark: 'rgba(9,9,16,0.84)',
        },
        DarkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)',
        VeryDarkBlue: 'hsl(200, 15%, 8%)',
        DarkGray: 'hsl(0, 0%, 52%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
