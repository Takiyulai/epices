// src/data.js
import piment from "./assets/images/piment.jpg";
import crevettes from "./assets/images/crevettes.jpg";
import ail from "./assets/images/ail.jpg";
import melange from "./assets/images/melange.jpg";
import poisson from "./assets/images/poisson.jpg";
import pack1 from "./assets/images/pack1.png";
import pack2 from "./assets/images/pack2.jpg";
import pack3 from "./assets/images/pack3.jpg";

export const products = [
  {
    id: 1,
    name: "Piment Assaisonné",
    desc: "Un mélange relevé et équilibré de piments séchés et d'épices locales pour rehausser vos plats du quotidien.",
    price: "5000 FCFA",
    img: piment,
    cta: "Goûter maintenant",
  },
  {
    id: 2,
    name: "Poudre de Crevettes",
    desc: "Savoureuse et naturelle, elle ajoute une touche marine exquise à vos sauces et soupes.",
    price: "8000 FCFA",
    img: crevettes,
    cta: "Découvrir la saveur",
  },
  {
    id: 3,
    name: "Poudre d’Ail",
    desc: "De l’ail pur séché et moulu, idéal pour des plats parfumés et digestes.",
    price: "5000 FCFA",
    img: ail,
    cta: "Essayez dès aujourd’hui",
  },
  {
    id: 4,
    name: "Mélange d’Épices",
    desc: "Un assemblage artisanal de plusieurs épices béninoises pour des plats riches et savoureux.",
    price: "3000 FCFA",
    img: melange,
    cta: "Découvrir la saveur",
  },
  {
    id: 5,
    name: "Poudre de Poisson",
    desc: "Naturelle et riche en goût, elle intensifie la saveur de vos sauces et ragoûts.",
    price: "5000 FCFA",
    img: poisson,
    cta: "Goûter maintenant",
  },
  {
    id: 6,
    name: "Pack 1 – Saveurs Essentielles",
    desc: "Inclut Mélange d’Épices, Poisson moulu et Crevettes moulues. L’accord parfait pour une cuisine béninoise authentique.",
    price: "16 000 FCFA",
    promo: "15 300 FCFA",
    img: pack1,
    cta: "Obtenir ce pack",
  },
  {
    id: 7,
    name: "Pack 2 – Arômes Gourmets",
    desc: "Regroupe Crevettes moulues, Poisson moulu, Ail moulu et Mélange d’Épices. Un équilibre de goût et de fraîcheur.",
    price: "21 000 FCFA",
    promo: "19 500 FCFA",
    img: pack2,
    cta: "Découvrir ce pack",
  },
  {
    id: 8,
    name: "Pack 3 – L’Expérience Totale",
    desc: "Comprend Piment assaisonné, Mélange d’Épices, Poudre d’Ail, Crevettes moulues, Poisson moulu, Poivre moulu et Gingembre en poudre. Bénéficiez de 10% de réduction sur votre première commande.",
    price: "30 000 FCFA",
    promo: "10% de réduction sur la première commande",
    img: pack3,
    cta: "Profiter de l’offre",
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