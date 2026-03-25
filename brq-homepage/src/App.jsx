import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Testimonial />
      <Footer />
    </>
  );
}