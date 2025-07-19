// postcss.config.js
module.exports = {
    plugins: {
      tailwindcss: {}, // <-- Use 'tailwindcss', NOT '@tailwindcss/postcss'
      autoprefixer: {},
    }
  }