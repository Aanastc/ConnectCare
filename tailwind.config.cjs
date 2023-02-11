/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans serif']
      },
      fontWeight: {
        normal: '400',
        bold: '700'
      }
    }
  },
  plugins: []
}
