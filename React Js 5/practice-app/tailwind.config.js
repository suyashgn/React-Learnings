/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        white: '#F5F5F7',
        navtext: '#021526',
        orange: '#F24F1D',
      },
    },
  },

  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  plugins: [],
};