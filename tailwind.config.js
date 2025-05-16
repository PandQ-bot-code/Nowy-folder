/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        konrad: {
          blue: "#007BFF",
          light: "#F5F9FF",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
