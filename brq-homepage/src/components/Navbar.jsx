import '../styles/Navbar.scss';
import logo from '../assets/images/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <img src={logo} alt="BRQ Logo" className="logo" />
                <ul className="menu">
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