import "../styles/pages/privacity.scss";
import '../styles/home/footer.scss';

import { Link } from 'react-router-dom';
import "../styles/navbar.scss";
import logo from "/assets/images/logo.png";

export default function Privacity() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link to="/"><img src={logo} alt="BRQ Logo" className="logo" /></Link>
                </div>
            </nav>

            <div className="page privacidade">
                <section className="page-header">
                    <h1>Política de Privacidade</h1>
                    <p>
                        Esta política descreve como a BRQ Digital Solutions coleta, utiliza e protege
                        as informações pessoais dos usuários.
                    </p>
                </section>

                <section className="page-content">
                    <h2>Coleta de Dados</h2>
                    <p>
                        Coletamos informações fornecidas diretamente pelos usuários, como nome, e-mail
                        e mensagens enviadas através de formulários de contato.
                    </p>

                    <h2>Uso das Informações</h2>
                    <p>
                        As informações coletadas são utilizadas para melhorar nossos serviços,
                        responder às solicitações e oferecer suporte personalizado.
                    </p>

                    <h2>Proteção</h2>
                    <p>
                        Adotamos medidas de segurança para proteger os dados contra acesso não autorizado,
                        alteração ou divulgação.
                    </p>

                    <h2>Direitos dos Usuários</h2>
                    <p>
                        Você pode solicitar a exclusão ou atualização de seus dados a qualquer momento
                        entrando em contato com nossa equipe.
                    </p>
                </section>
            </div>

            <footer className="footer">
                <div className="container footer-content">
                    <p>© 2026 BRQ Digital Solutions. Todos os direitos reservados.</p>
                    <ul className="footer-links">
                        <li><Link to="/terms">Termos de Uso</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}