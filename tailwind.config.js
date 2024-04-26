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
        'ar': ['Arab', 'sans-serif'],
        'far': ['formalAr', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'mulishbold': ['Mulish-Bold', 'sans-serif'],
        'mulishsemibold': ['Mulish-SemiBold', 'sans-serif'],
        'mukadimah': ['Mukadimah', 'sans-serif']
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

