import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Sobre from "./components/Sobre";
import Solucoes from "./components/Solucoes";
import Services from "./components/Services";
import Cases from "./components/Cases";
import Testimonial from "./components/Testimonial";
import Carreiras from "./components/Carreiras";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

import "./styles/global.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Sobre />
      <Solucoes />
      <Services />
      <Cases />
      <Testimonial />
      <Carreiras />
      <Contato />
      <Footer />
    </>
  );
}