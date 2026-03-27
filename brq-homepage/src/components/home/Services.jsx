import '../../styles/home/Services.scss';

import IA from "./../../assets/images/ia.png"
import PD from "./../../assets/images/produtos_digitais.png"
import DA from "./../../assets/images/data_analytics.png"
import M from "./../../assets/images/modernizacao.png"

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <h2 className="services-title">Nossos Serviços</h2>
                <div className="services-grid">
                    <div className="card">
                        <img src={IA} alt="Inteligência Artificial" />
                        <h3>Inteligência Artificial</h3>
                        <p>Soluções avançadas de IA para o seu negócio.</p>
                    </div>
                    <div className="card">
                        <img src={PD} alt="Produtos Digitais" />
                        <h3>Produtos Digitais</h3>
                        <p>Desenvolvemos apps e plataformas.</p>
                    </div>
                    <div className="card">
                        <img src={DA} alt="Data & Analytics" />
                        <h3>Data & Analytics</h3>
                        <p>Insights e análise de dados estratégicos.</p>
                    </div>
                    <div className="card">
                        <img src={M} alt="Modernização" />
                        <h3>Modernização</h3>
                        <p>Transformação e evolução de sistemas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}