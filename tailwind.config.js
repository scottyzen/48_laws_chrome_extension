/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
      colors: {
        "custom-dark": "#1e1e1e",
        "custom-darker": "#2b2b2b",
        "custom-light": "#f0e6d2",
      },
    },
  },
  plugins: [],
};
