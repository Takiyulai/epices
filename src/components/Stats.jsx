// src/components/Stats.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "../data";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-6 bg-[#F8F1E9]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-earth mb-16"
        >
          Nos Chiffres
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Composant séparé pour gérer l'animation individuelle
function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Se déclenche à moitié visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-beige p-8 rounded-2xl shadow-md"
    >
      <div className="text-4xl md:text-5xl font-display text-earth font-bold">
        {isInView ? (
          <CountUp
            start={0}
            end={stat.end}
            duration={2.5}
            separator=","
            suffix={stat.suffix || ""}
          />
        ) : (
          0 // Avant que la carte soit visible
        )}
      </div>
      <p className="text-neutral text-lg mt-2">{stat.label}</p>
    </motion.div>
  );
}
