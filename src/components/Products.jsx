import { motion } from "framer-motion";
import { products } from "../data";

const WA_LINK =
  "https://wa.me/22966665226?text=Bonjour%20KHALIS%20NATURE%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20épices.";

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 bg-[#faf6f0]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-earth mb-12"
        >
          Nos <span className="text-red-600">Produits</span> & Packs
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6"
            >
              {/* --- Image --- */}
              <img
                src={p.img}
                alt={p.name}
                className="w-full flex-grow h-75 rounded object-cover mx-auto mb-6 transform transition-transform duration-300 hover:scale-110"
              />

              {/* --- Nom & Description --- */}
              <h3 className="text-2xl font-semibold text-earth mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>

              {/* --- Prix & Promo --- */}
              <div className="mb-6">
                {p.promo ? (
                  <div>
                    <p className="text-lg font-bold text-red-600">{p.promo}</p>
                    <p className="text-sm text-gray-500 line-through">{p.price}</p>
                  </div>
                ) : (
                  <p className="text-lg font-semibold text-earth">{p.price}</p>
                )}
              </div>

              {/* --- CTA (Bouton d’action) --- */}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-olive/90 transition-colors"
              >
                {p.cta || "Contacter sur WhatsApp"}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
