/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right, #5A84C0 100%, #594ED2 100%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: '24px',
        h2: '16px',
        h3: '16px',
      },
      fontWeight: {
        medium: 500,
      },
    },
    colors: {
      'gray-00': '#F0F0F0',
      'gray-10': '#dfdfdf',
      'gray-20': '#9E9E9E',
      black: '#1C1C1C',
      white: '#FFFFFF',
    },
  },
  plugins: [],
}
