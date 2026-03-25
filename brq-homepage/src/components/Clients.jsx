import '../styles/Clients.scss';

export default function Clients() {
    return (
        <section className="clients">
            <div className="container">
                <h2 className="clients-title">Histórias de Sucesso</h2>
                <div className="clients-logos">
                    <img src="/src/assets/images/client1.png" alt="Santander" />
                    <img src="/src/assets/images/client2.png" alt="Vivo" />
                    <img src="/src/assets/images/client3.png" alt="Itaú" />
                    <img src="/src/assets/images/client4.png" alt="Google Cloud" />
                </div>
            </div>
        </section>
    );
}