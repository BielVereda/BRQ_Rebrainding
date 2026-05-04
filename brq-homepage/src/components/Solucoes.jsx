import "../styles/sections/solucoes.scss";

export default function Solucoes() {
    return (
        <section id="solucoes" className="solucoes">
            <div className="container">
                <h2>Soluções</h2>
                <div className="cards">
                    <div className="card">
                        <h3>Inteligência Artificial</h3>
                        <ul>
                            <li>Automatização de processos complexos</li>
                            <li>Modelos preditivos para tomada de decisão</li>
                            <li>Integração com sistemas existentes</li>
                            <li>Suporte contínuo e evolução constante</li>
                        </ul>
                        <button className="cta-btn">Saiba mais</button>
                    </div>
                    <div className="card">
                        <h3>Transformação Digital</h3>
                        <p>
                            Estratégias completas para acelerar a inovação e modernizar processos de negócio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
