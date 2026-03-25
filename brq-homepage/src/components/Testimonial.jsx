import '../styles/Testimonial.scss';
import personImg from '../assets/images/testimonial.png';

export default function Testimonial() {
    return (
        <section className="testimonial">
            <div className="container testimonial-content">
                <div className="testimonial-text">
                    <blockquote className="testimonial-quote">
                        "Graças à BRQ, conseguimos acelerar nossa transformação digital com resultados incríveis."
                    </blockquote>
                    <p className="testimonial-author">
                        Diretor de Tecnologia - Cliente Financeiro
                    </p>
                </div>
                <div className="testimonial-image">
                    <img src={personImg} alt="Cliente satisfeito" />
                </div>
            </div>
        </section>
    );
}