/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/docs/**/*.{js,ts,jsx,tsx,md,mdx}',
    './pages/components/mdx/**/*.{md,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary: colors.blue[700],
        'primary-light': colors.blue[100],
        'primary-dark': colors.blue[800],
        secondary: colors.slate[600],
        'secondary-light': colors.slate[200],
        'secondary-dark': colors.slate[700],
        'gray-base': colors.gray[200]
      },
      screens: {
        sm: '640px', // => @media (min-width: 640px) { ... }
        md: '1024px', // => @media (min-width: 768px) { ... }
        lg: '1280px', // => @media (min-width: 1024px) { ... }
        xl: '1400px', // => @media (min-width: 1280px) { ... }
        xxl: '1920px' // => @media (min-width: 1920px) { ... }
      }
    }
  },
  plugins: []
}
