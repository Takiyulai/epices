// src/components/Footer.jsx
import { ShoppingBag, Instagram, Mail } from "lucide-react";

const WA_LINK = "https://wa.me/22966665226?text=Bonjour%20khalis-nature%2C%20je%20souhaite%20commander%20vos%20épices.";

export default function Footer() {
  return (
    <footer className="bg-earth text-beige py-12 px-6 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* --- Colonne gauche : logo + nom --- */}
        <div>
          <h3 className="text-3xl font-display font-bold">
            <span className="text-red-500">KHALIS</span>
            <span className="text-olive-600">NATURE</span>
          </h3>
          <p className="text-sm opacity-80 mt-2">
            Des épices naturelles pour éveiller vos sens.
          </p>
        </div>

        {/* --- Colonne centrale : icônes --- */}
        <div className="flex justify-center gap-6 text-gold">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <ShoppingBag size={26} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Instagram size={26} />
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            <Mail size={26} />
          </a>
        </div>

        {/* --- Colonne droite : bouton WhatsApp --- */}
        <div>
          <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex items-center gap-2 
          bg-red-700 text-white 
        px-6 py-3 rounded-full 
          font-semibold text-base 
          hover:bg-olive-600 
          transition shadow-md
          "
>
  <ShoppingBag size={16} />
  Commander sur WhatsApp
</a>

        </div>
      </div>

      {/* --- Bas du footer --- */}
      <div className="mt-10 text-center text-sm text-beige/80">
        © 2025{" "}
        <span className="font-semibold text-gold">
          KHALIS NATURE
        </span>
        . Tous droits réservés.
      </div>
    </footer>
  );
}
