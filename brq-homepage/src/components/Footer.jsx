import { Link } from 'react-router-dom';
import '../styles/home/footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>© 2026 BRQ Digital Solutions. Todos os direitos reservados.</p>
                <ul className="footer-links">
                    <li><a href="#contact">Contato</a></li>
                    <li><Link to="/privacity">Política de Privacidade</Link></li>
                    <li><Link to="/terms">Termos de Uso</Link></li>
                </ul>
            </div>
        </footer>
    );
}