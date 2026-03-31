import "../styles/Navbar.scss";
import logo from "../assets/images/logo.png";
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
                    <li>Sobre</li>
                    <li>Soluções</li>
                    <li>Cases</li>
                    <li>Carreiras</li>
                    <li>Contato</li>
                </ul>

                <button className="contact-btn">Fale Conosco</button>
            </div>
        </nav>
    );
}
