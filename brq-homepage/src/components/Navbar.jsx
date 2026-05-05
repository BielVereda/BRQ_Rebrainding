import "../styles/navbar.scss";
import logo from "/assets/images/logo.png";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                {/* Logo à esquerda */}
                <img src={logo} alt="BRQ Logo" className="logo" />

                <ul className={`menu ${menuOpen ? "open" : ""}`}>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#clients">Casos de Sucesso</a></li>
                    <li><a href="#carrers">Carreiras</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>

                <button className="contact-btn"><a href="#contact">Fale Conosco</a></button>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>
        </nav>
    );
}