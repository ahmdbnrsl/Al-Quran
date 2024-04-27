/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arab': ['Amiri', 'sans-serif'],
        'kufi': ['Reem Kufi', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif']
      },
      backgroundImage: {
        'dark-theme': "url('/background/darkTheme.jpg')",
        'light-theme': "url('/background/lightTheme.jpg')",
        'hero': "url('/background/hero.png')",
        'footer': "url('/background/footer.png')"
      }
    },
  },
  plugins: [],
}

