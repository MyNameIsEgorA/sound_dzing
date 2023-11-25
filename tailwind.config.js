/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    breakpoints: {
      xs: '375px',
      md: '834px',
      xl: '1280px',
    },
    extend: {
      colors: {
        black: '#000000',
        almost_black: '#181E1E',
        brightRed: '#E63946',
        red: '#FF6864',
        yellow: '#FFCA28',
        white: '#FFFFFF'
      },
      backgroundImage: {
        'hero': "url('/src/images/dr_bg.png')",
        'phone-hero': "url('/src/images/phone.png')"
      }
    },
  },
  plugins: [],
}

