/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
      },
    },
  },
  variants: {},
  plugins: [],
}

