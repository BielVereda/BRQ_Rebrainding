import '../styles/Services.scss';

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <h2 className="services-title">Nossas Especializações</h2>
                <div className="services-grid">
                    <div className="card">
                        <h3>Inteligência Artificial</h3>
                        <p>Soluções avançadas de IA para o seu negócio.</p>
                    </div>
                    <div className="card">
                        <h3>Produtos Digitais</h3>
                        <p>Desenvolvemos apps e plataformas.</p>
                    </div>
                    <div className="card">
                        <h3>Data & Analytics</h3>
                        <p>Insights e análise de dados estratégicos.</p>
                    </div>
                    <div className="card">
                        <h3>Modernização</h3>
                        <p>Transformação e evolução de sistemas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}