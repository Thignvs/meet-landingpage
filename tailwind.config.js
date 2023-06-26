/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      darkblue: '#4D96A9',
      darkbluehover:'#71c0d4',
      darkpurple: '#855FB1',
      darkpurplehover: '#B18BDD',
      darkgrayishblue: '#28283D',
      gray: '#87879D',
      lightblue: '#8FE3F9',
      lightpurple: '#D9B8FF',
      white: '#FAFAFA',
    },
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
    },
    backgroundImage: {
      'footer-bg-mobile': "url('./assets/mobile/image-footer.jpg')",
      'footer-bg-tablet': "url('./assets/tablet/image-footer.jpg')",
      'footer-bg-desktop': "url('./assets/desktop/image-footer.jpg')",
    },
    letterSpacing: {
      widest: '.25em'
    },
    extend: {
      inset: {
        '-160px': '-160px',
      },
    },
  },
  plugins: [],
}