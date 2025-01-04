/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Set as default sans font
      },
      colors: {
        'primary-400': '#59B29F',
        'primary-500': '#2B7F75',

        'secondary-200': '#DCE4E8',
        'secondary-400': '#6C7278',
      },
    },
  },
  plugins: [],
};
