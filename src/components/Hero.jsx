// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import heroBg from "../assets/images/hero-bg.jpg";

const WA_LINK = "https://wa.me/22966665226?text=Bonjour%20khalis-epices%2C%20je%20souhaite%20commander%20vos%20épices.";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundColor: "#ccc", // Fallback
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4"
        >
          Des épices qui racontent une histoire.
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Transformées artisanalement au Bénin, nos épices sont des invitations à cuisiner avec mémoire, émotion et puissance.
        </motion.p>
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="
            inline-flex items-center gap-3 
            bg-gradient-to-r from-red-500 to-orange-400
            hover:from-orange-400 hover:to-red-500
            text-white font-semibold 
            py-4 px-8 rounded-full 
            text-lg transition-all duration-300
            shadow-lg hover:shadow-xl
            transform hover:-translate-y-1 hover:scale-105
          "
        >
          <ShoppingBag size={22} />
          Commander maintenant
        </motion.a>
      </div>
    </motion.section>
  );
}
