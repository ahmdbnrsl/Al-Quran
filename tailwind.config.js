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
        'index-dark': "url('/background/index_dark.jpg')",
        'index-light': "url('/background/index_light.jpg')",
        'hero': "url('/background/hero.png')",
        'footer': "url('/background/footer.png')"
      },
      gridTemplateColumns: {
          'auto-fit': 'repeat(auto-fit, minmax(20rem, 1fr))'
      },
      backgroundSize: {
          'smaller': '10%'
      }
    },
  },
  plugins: [],
}

