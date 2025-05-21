/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // ✅ ensure it covers your files
  ],
  theme: {
    extend: {
      transitionProperty: {
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [],
}
