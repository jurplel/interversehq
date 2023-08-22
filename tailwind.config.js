/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js,njk,md}"],
  plugins: [
    require('@tailwindcss/typography'),
    require('@kamona/tailwindcss-perspective'),
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
      'display': ['"Exo 2"', 'Poppins', ...defaultTheme.fontFamily.sans],
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        'intv-ultrablur': "url('/assets/img/intvultrablur3.jpg')",
        'qview': "linear-gradient(rgba(21,21,21,0.7), rgba(21,21,21,0.7)), url('../../qview/assets/img/rainbg.jpg')",
      },
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
        sm: '0 0.063rem 0.125rem var(--tw-shadow-color)',
        DEFAULT: '0 0.125rem 0.25rem var(--tw-shadow-color)',
        lg: '0 0.5rem 1rem var(--tw-shadow-color)',
        xl: '0 1rem 2rem var(--tw-shadow-color)',
        xl_0: '0 0 2rem var(--tw-shadow-color)',
      },
      boxShadow: {
        'intv': '0em 0.375em 0.75em #000',
      },
      transitionDuration: {
        'DEFAULT': '100ms',
      }
    }
  },
}

