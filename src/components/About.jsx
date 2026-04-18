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
    <section id="about" className="py-20 px-6 bg-[#F5F5DC]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* --- TEXTE --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-[#8B4513]">
            À propos de KHALIS NATURE
          </h2>
          <p className="text-base md:text-xl text-[#3D3D3D]/80 mb-6">
            Fondée au cœur du Bénin, KHALISEPICES perpétue l'art ancestral des épices. 
            Chaque mélange raconte une histoire, portée par des mains expertes et une passion 
            pour les saveurs authentiques.
          </p>
          <p className="text-base md:text-xl text-[#3D3D3D]/80">
            Notre mission : vous offrir des épices naturelles qui réveillent vos plats et vos sens.
          </p>
        </motion.div>

        {/* --- CARROUSEL CORRIGÉ --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex justify-center"
        >
          <div className="relative w-full max-w-lg h-64 sm:h-80 md:h-96 overflow-hidden rounded-3xl shadow-2xl">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Transformation des épices ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
            {/* Points de navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-[#8B4513] scale-125" : "bg-white/60 hover:bg-white/80"
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