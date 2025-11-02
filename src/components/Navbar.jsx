// src/components/Navbar.jsx
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

const WA_LINK = "https://wa.me/22966665226?text=Bonjour%20khalis-nature%2C%20je%20souhaite%20commander%20vos%20épices.";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Avantages", href: "#features" },
    { name: "Épices", href: "#products" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-beige/95 backdrop-blur-sm shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-earth rounded-full flex items-center justify-center">
            <span className="text-white font-display text-lg font-bold">K</span>
          </div>
          <span className="font-display text-xl font-bold">
            <span className="text-red-500">KHALIS</span>
            <span className="text-olive-600">NATURE</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-earth hover:text-olive font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex items-center gap-2
            bg-red-500/90 hover:bg-orange-500
            text-white font-medium
            py-2.5 px-6 rounded-full
            text-sm transition-all duration-200 shadow-sm
            "
          >
            <ShoppingBag size={16} />
            Commander en ligne
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-earth"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-beige/98"
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-earth hover:text-olive font-medium py-2 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block bg-olive-600 hover:bg-olive-500
              text-white px-5 py-2 rounded-full text-center font-medium
              mt-4 flex items-center justify-center gap-2
              transition-colors duration-200 shadow-sm
            "
            onClick={() => setIsOpen(false)}
          >
            <ShoppingBag size={16} />
            Commander en ligne
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
