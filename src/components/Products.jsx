import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { individualProducts, packs } from "../data";

const WA_LINK = "https://wa.me/22966665226?text=Bonjour%20KHALIS%20NATURE%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20épices.";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 h-full flex flex-col">
      <div className="relative">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-semibold text-earth mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{product.desc}</p>
      <div className="mb-6">
        {product.promo ? (
          <div>
            <p className="text-lg font-bold text-red-600">{product.promo}</p>
            <p className="text-sm text-gray-500 line-through">{product.price}</p>
          </div>
        ) : (
          <p className="text-lg font-semibold text-earth">{product.price}</p>
        )}
      </div>
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-[#C17A47] hover:bg-[#2C5F2D] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-colors text-center"
      >
        {product.cta || "Contacter sur WhatsApp"}
      </motion.a>
    </div>
  );
}

export default function Products() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="products" className="py-20 px-6 bg-[#faf6f0]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-earth mb-6 text-center"
        >
          Nos <span className="text-red-600">Épices</span>
        </motion.h2>

        {/* Carrousel des produits individuels */}
        <div className="relative mb-20">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container">
              {individualProducts.map((product) => (
                <div key={product.id} className="embla__slide">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition z-10"
          >
            <ChevronLeft size={24} className="text-earth" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition z-10"
          >
            <ChevronRight size={24} className="text-earth" />
          </button>
        </div>

        {/* Section des packs */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-earth mb-12 text-center mt-16"
        >
          Nos <span className="text-red-600">Packs</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packs.map((pack) => (
            <ProductCard key={pack.id} product={pack} />
          ))}
        </div>
      </div>
    </section>
  );
}