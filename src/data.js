// src/data.js
export const products = [
  {
    id: 1,
    name: "Piment Royal",
    desc: "Piment rouge séché, intense et parfumé.",
    img: null, // On remplacera par l'import dans Products.jsx
  },
  {
    id: 2,
    name: "Gingembre en Poudre",
    desc: "Racine fraîche broyée, chaleur douce.",
    img: null,
  },
  {
    id: 3,
    name: "Curcuma",
    desc: "Épices secrètes pour plats traditionnels.",
    img: null,
  },
];

export const testimonials = [
  { name: "Aminata D.", text: "Ces épices ont transformé ma cuisine !" },
  { name: "Jean-Paul K.", text: "Authenticité garantie. Je recommande." },
  { name: "Aisha O.", text: "La saveur est au top, J'aime bien." }
];

export const stats = [
  { end: 250, label: "clients satisfaits", suffix: "+" },
  { end: 5, label: "ans d’expérience" },
  { end: 100, label: "naturel", suffix: "%" },
];