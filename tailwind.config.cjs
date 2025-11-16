// tailwind.config.cjs
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
    './src/**/*.css',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#b0402d',
        accent2: '#f0ebe6'
      }
    }
  },
  plugins: []
};
