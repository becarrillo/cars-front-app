const autoprefixer = require('autoprefixer');
const tailwindcss = require("tailwindcss");

module.exports = {
  content: [
    "src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fucsia-md': '#e63946'
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
}
