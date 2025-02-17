/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#656B2D',
          light: '#7A8036',
          dark: '#4D5122'
        },
        secondary: {
          DEFAULT: '#C8C2D5',
          light: '#D8D4E2',
          dark: '#B8B0C8'
        },
        accent: {
          DEFAULT: '#FFFF00',
          light: '#FFFF33',
          dark: '#CCCC00'
        },
        dark: '#3D3D3D'
      }
    },
  },
  plugins: [],
};