import "../styles/sections/contact.scss";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-content">
                <h2 className="contact-title">Entre em Contato</h2>
                <p className="contact-text">
                    Preencha o formulário abaixo e nossa equipe retornará em breve.
                </p>

                <form className="contact-form">
                    <input type="text" placeholder="Seu nome" />
                    <input type="email" placeholder="Seu e-mail" />
                    <textarea placeholder="Sua mensagem"></textarea>
                    <button type="submit" className="cta-btn">Enviar</button>
                </form>
            </div>
        </section>
    );
}
