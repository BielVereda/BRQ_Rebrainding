import '../styles/home/footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>© 2026 BRQ Digital Solutions. Todos os direitos reservados.</p>
                <ul className="footer-links">
                    <li><a href="#contact">Contato</a></li>

                    <li><a href="/privacidade">Política de Privacidade</a></li>
                    <li><a href="/termos">Termos de Uso</a></li>
                </ul>
            </div>
        </footer>
    );
}