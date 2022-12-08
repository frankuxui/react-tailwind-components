/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/docs/**/*.{js,ts,jsx,tsx,md,mdx}',
    './pages/components/mdx/**/*.{js,ts,jsx,tsx,md,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {

      // Animation

      animation: {
        modal: 'modal 0.1s linear',
        striped: 'striped 2s linear infinite',
        ripple: 'ripple 550ms linear'
      },

      // Backgrounds

      backgroundImage: {
        striped: 'linear-gradient(45deg,rgb(255 255 255 / 15%) 25%,rgb(0 0 0 / 0%) 25%,rgb(0 0 0 / 0%) 50%,rgb(255 255 255 / 15%) 50%,rgb(255 255 255 / 15%) 75%,rgb(0 0 0 / 0%) 75%,rgb(0 0 0 / 0%))'
      },

      backgroundSize: {
        'striped-size': '2rem 2rem'
      },

      // Colors

      colors: {
        primary: colors.blue[700],
        'primary-light': colors.blue[100],
        'primary-dark': colors.blue[800],
        secondary: colors.slate[600],
        'secondary-light': colors.slate[200],
        'secondary-dark': colors.slate[700],
        'gray-base': colors.gray[200]
      },

      // Keyframes

      keyframes: {
        modal: {
          '0%': {
            transform: 'scale(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            opacity: 0
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        striped: {
          from: {
            backgroundPosition: '2rem 0'
          },
          to: {
            backgroundPosition: '0 0'
          }
        },
        ripple: {
          from: {
            transform: 'scale(0)'
          },
          to: {
            opacity: '0',
            transform: 'scale(2)'
          }
        }
      },

      // Screens

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
