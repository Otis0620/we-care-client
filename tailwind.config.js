/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Set as default sans font
      },
      colors: {
        'secondary-400': '#6C7278',
        'secondary-200': '#DCE4E8',
      },
    },
  },
  plugins: [],
};
