// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Stats from "./components/Stats"; // Ajoute ça
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Stats /> {/* Ajoute ici */}
      <Testimonials />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}