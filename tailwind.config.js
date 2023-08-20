/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js,njk,md}"],
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  theme: {
    fontFamily: {
      'display': ['"Exo 2"', ...defaultTheme.fontFamily.sans],
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'intv-dark': '#0e141c',
        'intv-dark-accent': '#182b39',
        'intv-bright': '#2E95CA',
        'intv-bright-accent': '#2AB7B7',
        'pure-red': 'rgb(255, 0, 0)',
        'pure-green': 'rgb(0, 255, 0)',
        'pure-blue': 'rgb(0, 0, 255)',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      transitionDuration: {
        'DEFAULT': '150ms',
      }
    }
  },
}

