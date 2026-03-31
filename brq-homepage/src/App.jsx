import Navbar from './components/Navbar';
import Hero from './components/home/Hero';
import Clients from './components/home/Clients';
import Services from './components/home/Services';
import Testimonial from './components/home/Testimonial';
import Footer from './components/home/Footer';

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