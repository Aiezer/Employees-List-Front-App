/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right, #5A84C0 100%, #594ED2 100%)',
      },
    },
    colors: {
      'gray-00': '#F0F0F0',
      'gray-10': '#dfdfdf',
      'gray-20': '#9E9E9E',
      black: '#1C1C1C',
    },
  },
  plugins: [],
}
