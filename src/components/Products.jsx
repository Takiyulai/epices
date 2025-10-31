// src/components/Products.jsx
import { motion } from "framer-motion";
import { products } from "../data";
import { ShoppingBag } from "lucide-react";
import piment from "../assets/images/product1.png";
import gingembre from "../assets/images/product2.png";
import vodoun from "../assets/images/product3.jpg";

const WA_LINK = "https://wa.me/22966665226?text=Bonjour%20khalis-epices%2C%20je%20souhaite%20commander%20vos%20épices.";

export default function Products() {
  // Associe les images aux produits
  const productsWithImages = [
    { ...products[0], img: piment },
    { ...products[1], img: gingembre },
    { ...products[2], img: vodoun },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-beige to-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display mb-6 text-earth"
        >
          Découvrez nos trésors aromatiques
        </motion.h2>
        <p className="text-neutral-700 max-w-2xl mx-auto mb-16">
          Chaque épice est une invitation au voyage, une touche d’authenticité
          soigneusement sélectionnée pour sublimer vos plats.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productsWithImages.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-earth mb-2">{p.name}</h3>
                <p className="text-neutral-600 italic">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}