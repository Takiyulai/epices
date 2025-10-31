import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

const WA_NUMBER = "22997112233";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");

    const text = encodeURIComponent(
      `📬 Nouveau message depuis le site Suhaylah 🌿\n\n` +
      `👤 Nom : ${formData.name}\n` +
      `✉️ Email : ${formData.email}\n\n` +
      `💬 Message :\n${formData.message}\n\n` +
      `👉 Répondez-lui directement sur WhatsApp ou par email.`
    );

    const waUrl = `${WA_LINK}?text=${text}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#faf6f0]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* ---- FORMULAIRE ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-display text-earth mb-4 text-center">
            Contactez - Nous
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Envoyez un message — réponse en moins de 24h.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom complet"
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"
                  } focus:border-olive focus:outline-none transition`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-olive focus:outline-none transition`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"
                  } focus:border-olive focus:outline-none transition resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black hover:bg-olive/90 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-70 shadow-md"
            >
              {status === "sending" ? (
                "Préparation..."
              ) : (
                <>
                  <Send size={20} />
                  Envoyer via WhatsApp
                </>
              )}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center font-medium"
              >
                Message envoyé ! WhatsApp s’ouvre...
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* ---- CARTE D'INFO ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-gray-700 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-earth mb-4">
            Nos coordonnées
          </h3>

          <div className="flex items-start gap-4">
            <MapPin size={22} className="text-olive mt-1" />
            <p>
              <strong>Adresse :</strong> <br />
              Parakou, Bénin
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Phone size={22} className="text-olive mt-1" />
            <p>
              <strong>Contact :</strong> <br />
              +229 01 66 66 52 26 <br />
              +229 01 69 76 55 56
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Mail size={22} className="text-olive mt-1" />
            <p>
              <strong>Email :</strong> <br />
              khalisepices@gmail.com
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Clock size={22} className="text-olive mt-1" />
            <p>
              <strong>Horaires :</strong> <br />
              Lun – Sam : 8h00 → 19h00 <br />
              Dimanche : Fermé
            </p>
          </div>

          
        </motion.div>
      </div>
    </section>

  );
}
