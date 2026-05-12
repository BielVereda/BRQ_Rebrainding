import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Carrers from "./components/Carrers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacity from "./pages/Privacity";
import Terms from "./pages/Terms_Of_Use";
import LearnMore from "./pages/LearnMore";

import "./styles/global.scss";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Clients />
              <Carrers />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/privacity" element={<Privacity />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </Router>
  );
}