import "../styles/sections/cases.scss";

export default function Cases() {
    return (
        <section id="cases" className="cases">
            <div className="container">
                <h2>Cases</h2>
                <p>Histórias de sucesso de clientes que aceleraram sua transformação digital com a BRQ.</p>
                <div className="logos">
                    <img src="/assets/images/companies/logo_gol.png" alt="GOL" />
                    <img src="/assets/images/companies/logo_itau.png" alt="Itaú" />
                    <img src="/assets/images/companies/logo_nissan.png" alt="Nissan" />
                    <img src="/assets/images/companies/logo_pfizer.png" alt="Pfizer" />
                    <img src="/assets/images/companies/logo_porto.png" alt="Porto" />
                </div>
                <blockquote>
                    <footer>— Diretor de Tecnologia, Cliente Financeiro</footer>
                </blockquote>
            </div>
        </section>
    );
}