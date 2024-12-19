/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        almostBlack: "#0E0E0E",
        lighterBlack: "#1E1E1E",
        lightBlack: "#333333",
        grey: "#999999",
      },
    },
  },
  plugins: [],
};
