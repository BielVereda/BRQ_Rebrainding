import "../styles/navbar.scss";
import logo from "/assets/images/logo.png";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <img src={logo} alt="BRQ Logo" className="logo" />

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <ul className={`menu ${menuOpen ? "open" : ""}`}>
                    <li><a href="#clients">Casos de Sucesso</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#carrers">Carreiras</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>

                <button className="contact-btn">Fale Conosco</button>
            </div>
        </nav>
    );
}
