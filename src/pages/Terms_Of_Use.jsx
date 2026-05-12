import "../styles/pages/terms.scss";
import '../styles/home/footer.scss';

import { Link } from 'react-router-dom';
import "../styles/navbar.scss";
import logo from "/assets/images/logo.png";

export default function Terms() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link to="/"><img src={logo} alt="BRQ Logo" className="logo" /></Link>
                </div>
            </nav>

            <div className="page terms">
                <section className="page-header">
                    <h1>Termos de Uso</h1>
                    <p>
                        Estes termos estabelecem as regras para utilização dos serviços e conteúdos
                        oferecidos pela BRQ Digital Solutions.
                    </p>
                </section>

                <section className="page-content">
                    <h2>Aceitação dos Termos</h2>
                    <p>
                        Ao acessar nosso site ou utilizar nossos serviços, você concorda com os termos
                        aqui descritos.
                    </p>

                    <h2>Uso Permitido</h2>
                    <p>
                        O conteúdo disponibilizado é destinado apenas para fins informativos e comerciais,
                        sendo proibida sua reprodução sem autorização.
                    </p>

                    <h2>Responsabilidades</h2>
                    <p>
                        A BRQ não se responsabiliza por danos decorrentes do uso indevido das informações
                        ou serviços disponibilizados.
                    </p>

                    <h2>Alterações</h2>
                    <p>
                        Reservamo-nos o direito de modificar estes termos a qualquer momento, sendo
                        recomendada a consulta periódica desta página.
                    </p>
                </section>
            </div>

            <footer className="footer">
                <div className="container footer-content">
                    <p>© 2026 BRQ Digital Solutions. Todos os direitos reservados.</p>
                    <ul className="footer-links">
                        <li><Link to="/privacity">Política de Privacidade</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}