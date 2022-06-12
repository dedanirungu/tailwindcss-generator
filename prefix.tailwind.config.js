/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src-prefix/**/*.{html,js}',],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}

