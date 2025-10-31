// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        {/* --- Titre --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-center mb-20 text-earth relative "
        >
          Ce que disent nos clients
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gold rounded-full"></span>
        </motion.h2>

        {/* --- Grille des témoignages --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
              className="bg-white/80 backdrop-blur-sm border border-gold/20 p-8 rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              {/* --- Étoiles --- */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="gold" className="text-gold fill-gold" />
                ))}
              </div>

              {/* --- Texte du témoignage --- */}
              <p className="text-lg italic text-neutral/70 mb-6 leading-relaxed">
                “{t.text}”
              </p>

              {/* --- Nom du client --- */}
              <p className="font-semibold text-earth text-center tracking-wide">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
