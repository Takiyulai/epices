// src/components/About.jsx
import { motion } from "framer-motion";
import suhaylah from "../assets/images/suhaylah.png";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-beige">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <img
            src={suhaylah}
            alt="Suhaylah"
            className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-2/3 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-earth">
            À propos de KHALISEPICES
          </h2>
          <p className="text-lg md:text-xl text-neutral/80 mb-6">
            Fondée au cœur du Bénin, KHALISEPICES perpétue l’art ancestral des épices. Chaque mélange raconte une histoire, portée par des mains expertes et une passion pour les saveurs authentiques.
          </p>
          <p className="text-lg md:text-xl text-neutral/80">
            Notre mission : vous offrir des épices naturelles qui réveillent vos plats et vos sens.
          </p>
        </motion.div>
      </div>
    </section>
  );
}