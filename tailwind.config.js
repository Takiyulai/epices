/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: "#8B4513",
        olive: {
          400: "#7BA23F",
          500: "#6B8E23",
          600: "#5A7A1A",
        },
        gold: "#D4A017",
        beige: "#F5F5DC",
        neutral: "#3D3D3D",
        background: "#F8F1E9",
        accent: "#E5C07B",
        cta: {
          green: "#2C5F2D",
          terracotta: "#C17A47",
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};