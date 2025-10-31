// src/components/Features.jsx
import { motion } from "framer-motion";
import { Leaf, Wrench, MapPin, Heart } from "lucide-react"; // Wrench = Handcraft

const features = [
  { icon: Leaf, color: "text-olive-600", title: "100% naturelles", desc: "Sans additifs ni conservateurs" },
  { icon: Wrench, color: "text-earth", title: "Fabriquées artisanalement", desc: "Par des mains expertes" },
  { icon: MapPin, color: "text-gold", title: "Origine béninoise", desc: "Terroir authentique" },
  { icon: Heart, color: "text-red-500", title: "Saveurs authentiques", desc: "Tradition et passion" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-beige">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-center mb-16 text-earth"
        >
          Pourquoi choisir <span className="text-red-600">KHALIS EPICES</span> ?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition">
                <f.icon size={36} className={`${f.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-earth">{f.title}</h3>
              <p className="text-neutral/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
