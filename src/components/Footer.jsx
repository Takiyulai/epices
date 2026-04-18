import { ShoppingBag, Instagram, Mail } from "lucide-react";

const WA_LINK = "https://wa.me/22966665226?text=Bonjour%20khalis-nature%2C%20je%20souhaite%20commander%20vos%20%C3%A9pices.";

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-[#F5F5DC] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
          {/* Colonne gauche : logo + nom */}
          <div>
            <h3 className="text-3xl font-display font-bold">
              <span className="text-red-400">KHALIS</span>
              <span className="text-[#7BA23F]">NATURE</span>
            </h3>
            <p className="text-sm opacity-80 mt-2">
              Des épices naturelles pour éveiller vos sens.
            </p>
          </div>

          {/* Colonne centrale : icônes */}
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A017] hover:text-white transition"
            >
              <ShoppingBag size={26} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A017] hover:text-white transition"
            >
              <Instagram size={26} />
            </a>
            <a href="#" className="text-[#D4A017] hover:text-white transition">
              <Mail size={26} />
            </a>
          </div>

          {/* Colonne droite : bouton WhatsApp */}
          <div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C17A47] hover:bg-[#2C5F2D] text-white px-6 py-3 rounded-full font-semibold text-base transition shadow-md"
            >
              <ShoppingBag size={16} />
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Bas du footer avec crédits */}
        <div className="pt-8 text-center text-sm text-[#F5F5DC]/80 border-t border-[#F5F5DC]/20 space-y-2">
          <div>
            © 2026{" "}
            <span className="font-semibold text-[#D4A017]">KHALIS NATURE</span>. Tous droits réservés.
          </div>
          <div>
            Réalisée par{" "}
            <a
              href="https://takiyulai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A017] hover:text-white font-semibold transition underline decoration-transparent hover:decoration-white"
            >
              TakDev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}