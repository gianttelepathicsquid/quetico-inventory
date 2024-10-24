/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        quetico: {
          navy: '#0A1520',
          blue: '#33B1FF',
        }
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(.*)/, 
      pattern: /text-(.*)/,
      pattern: /border-(.*)/
    }
  ]
}
