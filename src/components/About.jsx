// src/components/About.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import epice1 from "../assets/images/epice1.png";
import epice2 from "../assets/images/epice2.png";
import epice3 from "../assets/images/epice3.png";

export default function About() {
  const images = [epice1, epice2, epice3];
  const [current, setCurrent] = useState(0);

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-20 px-6 bg-beige">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* --- TEXTE --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-earth">
            À propos de KHALIS NATURE
          </h2>
          <p className="text-lg md:text-xl text-neutral/80 mb-6">
            Fondée au cœur du Bénin, KHALISEPICES perpétue l'art ancestral des épices. 
            Chaque mélange raconte une histoire, portée par des mains expertes et une passion 
            pour les saveurs authentiques.
          </p>
          <p className="text-lg md:text-xl text-neutral/80">
            Notre mission : vous offrir des épices naturelles qui réveillent vos plats et vos sens.
          </p>
        </motion.div>

        {/* --- CARROUSEL --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-lg h-96 overflow-hidden rounded-3xl shadow-2xl">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Transformation des épices ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* Points de navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-earth scale-125" : "bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Voir image ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}