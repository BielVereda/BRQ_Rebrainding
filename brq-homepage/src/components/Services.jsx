import { useState } from "react";
import IA from "/assets/images/ia.png";
import PD from "/assets/images/produtos_digitais.png";
import DA from "/assets/images/data_analytics.png";
import M from "/assets/images/modernizacao.png";
import "../styles/home/services.scss";
import { Link } from "react-router-dom";

const servicesData = [
    {
        id: "ia",
        icon: IA,
        title: "Inteligência Artificial",
        description: "Soluções avançadas de IA para o seu negócio ",
        details: [
            "Automatização de processos complexos",
            "Modelos preditivos para tomada de decisão",
            "Integração com sistemas existentes",
            "Suporte contínuo e evolução constante"
        ]
    },
    {
        id: "pd",
        icon: PD,
        title: "Produtos Digitais",
        description: "Desenvolvemos apps e plataformas.",
        details: [
            "Design centrado no usuário",
            "Arquitetura escalável e segura",
            "Experiência mobile e web",
            "Entrega ágil e iterativa"
        ]
    },
    {
        id: "da",
        icon: DA,
        title: "Data & Analytics",
        description: "Insights e análise de dados estratégicos.",
        details: [
            "Dashboards interativos",
            "Modelagem de dados avançada",
            "Governança e qualidade de dados",
            "Estratégias baseadas em evidências"
        ]
    },
    {
        id: "m",
        icon: M,
        title: "Modernização",
        description: "Transformação e evolução de sistemas.",
        details: [
            "Migração para cloud",
            "Refatoração de aplicações legadas",
            "Adoção de arquiteturas modernas",
            "Redução de custos operacionais"
        ]
    }
];

export default function Services() {
    const [active, setActive] = useState("ia");
    const currentService = servicesData.find(s => s.id === active);

    return (
        <section id="services" className="services">
            <h2 className="services-title">Serviços</h2>
            <div className="container services-layout">
                <aside className="services-sidebar">
                    {servicesData.map(service => (
                        <button
                            key={service.id}
                            className={`sidebar-icon ${active === service.id ? "active" : ""}`}
                            onClick={() => setActive(service.id)}
                        >
                            <img src={service.icon} alt={service.title} />
                        </button>
                    ))}
                </aside>

                <div
                    className={`services-content active`}
                    style={{ "--bg-icon": `url(${currentService.icon})` }}
                >
                    <h2>{currentService.title}</h2>
                    <p>
                        {currentService.description} e também oferecemos soluções completas
                        que ajudam sua empresa a se destacar no mercado.
                    </p>
                    <ul className="services-list">
                        {currentService.details.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <button className="cta-btn">
                        <Link to="/learn-more">Saiba mais
                        <img src="/assets/images/arrow.svg" alt="arrow" /></Link>
                    </button>

                </div>
            </div>
        </section>
    );
}