const {spacing} = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      pink: colors.fuchsia,
      green: colors.emerald,
      purple: colors.violet,
    },
    extend: {
      fontFamily: {
        sans: [ 'Inter var', ...defaultTheme.fontFamily.sans ],
        mono: [ 'JetBrainsMono var', defaultTheme.fontFamily.mono ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: {color: theme('colors.blue.400')}
            },
            'h1,h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'transparent',
              padding: 0,
              margin: 0,
              borderRadius: 0
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: {color: theme('colors.blue.400')}
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: {borderColor: theme('colors.gray.700')},
            ol: {
              li: {
                '&:before': {color: theme('colors.gray.500')}
              }
            },
            ul: {
              li: {
                '&:before': {backgroundColor: theme('colors.gray.500')}
              }
            },
            strong: {color: theme('colors.gray.300')},
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: [ 'dark' ]
  },
  plugins: [ require('@tailwindcss/typography') ]
};
