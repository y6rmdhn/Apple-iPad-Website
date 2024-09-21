/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", "12px"],
        heading: ["80px", "84px"],
        subheading: ["28px", "32px"],
        headingSecond: ["56px", "60px"],
      },
      fontFamily: {
        sf: ['SF Pro', 'sans-serif'],
      },
      colors: {
        background: "#FAFAFC",
        black:{
          Apple: "#1D1D1F",
        },
        gray:{
          Apple: "#F5F5F7",
        },
        finish:{
          "space-black": "#2E2C2E",
          silver: "#6B696E", 
        }
      },
      scale: {
        '102': '1.02',
      },
      boxShadow: {
        '3d-inset': 'inset 1px 1px 2px rgba(0, 0, 0, 0.3), inset -1px -1px 2px rgba(255, 255, 255, 0.1)',
      },
      padding: {
        'custom-calc': 'calc(50vw - min(1200px, 87.5vw) / 2)',
      },
      width: {
        'custom-calc': 'calc(50vw - min(1200px, 87.5vw) / 2)',
      },
      screens: {
        'max-md': { 'max': '768px' },
        'max-lg': { 'max': '1024px' },
        'max-lg-photo': { 'max': '1160px' },
        'max-sm-1': { 'max': '730px' },
        'max-mb': {'max': '622px'},
        'max-mobile-L': {'max': '425px'},
      },
      transitionDuration: {
        '3192': '3.192s',
      },
      transitionDelay: {
        '100': '0.1s', 
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.04, 0.04, 0.12, 0.96)', 
      },
    },
  },
  plugins: [],
}