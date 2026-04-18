import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import heroBg from "../assets/images/hero-bg.jpg";

const WA_LINK = "https://wa.me/22966665226?text=Bonjour%20khalis-nature%2C%20je%20souhaite%20commander%20vos%20%C3%A9pices.";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center py-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay plus sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-7xl font-display font-black mb-6 leading-tight uppercase"
        >
          Dévouvrez des épices qui <br />
          <span className="text-[#D4A017]">réveillent vos plats</span> 
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base md:text-xl mb-8 max-w-2xl mx-auto font-medium drop-shadow-lg px-4"
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
          className="inline-flex items-center gap-3 bg-[#C17A47] hover:bg-[#2C5F2D] text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 mb-2 md:mb-0"
        >
          <ShoppingBag size={22} />
          Commander maintenant
        </motion.a>
      </div>
    </motion.section>
  );
}