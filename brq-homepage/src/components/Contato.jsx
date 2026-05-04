import "../styles/sections/contato.scss";

export default function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="container">
                <h2>Contato</h2>
                <p>Entre em contato conosco para saber como podemos ajudar sua empresa.</p>
                <form className="form">
                    <input type="text" placeholder="Seu nome" />
                    <input type="email" placeholder="Seu e-mail" />
                    <textarea placeholder="Sua mensagem"></textarea>
                    <button type="submit" className="cta-btn">Enviar</button>
                </form>
            </div>
        </section>
    );
}