import "../styles/Hero.scss";
import heroImg from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Building What Matters</h1>
          <p className="hero-subtitle">
            Transformamos desafios em inovação para impulsionar os negócios do
            futuro.
          </p>
          <div className="hero-buttons">
            <button className="btn-orange">Nossas Soluções</button>
            <button className="btn-outline">Conheça a BRQ</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-glow"></div>
          <img src={heroImg} alt="Gráfico 3D" className="hero-graphic" />
        </div>
      </div>
    </section>
  );
}