// postcss.config.cjs
const tailwindcss = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwindcss,    // ← this is the new Tailwind PostCSS plugin
    autoprefixer,
  ],
}



