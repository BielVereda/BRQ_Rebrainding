import "../styles/pages/terms.scss";

export default function Terms() {
    return (
        <div className="page terms">
            <section className="page-header">
                <h1>Termos de Uso</h1>
                <p>
                    Estes termos estabelecem as regras para utilização dos serviços e conteúdos
                    oferecidos pela BRQ Digital Solutions.
                </p>
            </section>

            <section className="page-content">
                <h2>Aceitação dos Termos</h2>
                <p>
                    Ao acessar nosso site ou utilizar nossos serviços, você concorda com os termos
                    aqui descritos.
                </p>

                <h2>Uso Permitido</h2>
                <p>
                    O conteúdo disponibilizado é destinado apenas para fins informativos e comerciais,
                    sendo proibida sua reprodução sem autorização.
                </p>

                <h2>Responsabilidades</h2>
                <p>
                    A BRQ não se responsabiliza por danos decorrentes do uso indevido das informações
                    ou serviços disponibilizados.
                </p>

                <h2>Alterações</h2>
                <p>
                    Reservamo-nos o direito de modificar estes termos a qualquer momento, sendo
                    recomendada a consulta periódica desta página.
                </p>
            </section>
        </div>
    );
}