// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/index.css", // Important
  ],
  theme: {
    extend: {
      colors: {
        earth: "#8B4513",
        olive: "#6B8E23",
        gold: "#D4A017",
        beige: "#F5F5DC",
        neutral: "#3D3D3D",
        background: "#F8F1E9", // couleur de fond du site
        accent: "#E5C07B",     // couleur secondaire (utile pour hover ou CTA)
        
      },
    }
  },
  plugins: [],
};