import "../styles/pages/learnmore.scss";
import '../styles/home/footer.scss';

import { Link } from 'react-router-dom';
import "../styles/navbar.scss";
import logo from "/assets/images/logo.png";

export default function LearnMore() {

    return (
        <>
        {/* Header */}
            <nav className="navbar">
                <div className="navbar-content">
                    <Link to="/"><img src={logo} alt="BRQ Logo" className="logo" /></Link>
                </div>
            </nav>

            {/* Conteúdo principal */}
            <div className="page learnmore">
                <section className="page-header">
                    <h1>Saiba Mais</h1>
                    <p>
                        Descubra em detalhes como a BRQ Digital Solutions transforma desafios em inovação
                        e ajuda empresas a se destacarem no mercado.
                    </p>
                </section>

                <section className="page-content">
                    <h2>Nossas Soluções</h2>
                    <p>
                        Oferecemos serviços completos em Inteligência Artificial, Produtos Digitais,
                        Data & Analytics e Modernização de sistemas.
                    </p>

                    <h2>Por que escolher a BRQ?</h2>
                    <p>
                        Nossa abordagem é centrada no cliente, com foco em resultados tangíveis,
                        inovação contínua e suporte especializado.
                    </p>

                    <h2>Entre em Contato</h2>
                    <p>
                        Quer saber mais? Fale com nossa equipe e descubra como podemos impulsionar
                        o futuro do seu negócio.
                    </p>
                </section>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <p>© 2026 BRQ Digital Solutions. Todos os direitos reservados.</p>
                    <ul className="footer-links">
                        <li><Link to="/privacity">Política de Privacidade</Link></li>
                        <li><Link to="/terms">Termos de Uso</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
