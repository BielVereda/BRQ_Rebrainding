import { useState, useEffect } from "react";
import "../../styles/home/clients.scss";

const clientsList = [
    { src: "../../../public/assets/images/logo_ab-inbev.png", alt: "AB InBev" },
    { src: "../../../public/assets/images/logo_alelo.png", alt: "Alelo" },
    { src: "../../../public/assets/images/logo_b3.png", alt: "B3" },
    { src: "../../../public/assets/images/logo_btg-pactual.png", alt: "BTG Pactual" },
    { src: "../../../public/assets/images/logo_cpfl.png", alt: "CPFL" },
    { src: "../../../public/assets/images/logo_electrolux.png", alt: "Electrolux" },
    { src: "../../../public/assets/images/logo_gol.png", alt: "Gol" },
    { src: "../../../public/assets/images/logo_itau.png", alt: "Itaú" },
    { src: "../../../public/assets/images/logo_nissan.png", alt: "Nissan" },
    { src: "../../../public/assets/images/logo_novo-nordisk.png", alt: "Novo Nordisk"},
    { src: "../../../public/assets/images/logo_pfizer.png", alt: "Pfizer" },
    { src: "../../../public/assets/images/logo_porto.png", alt: "Porto" },
    { src: "../../../public/assets/images/logo_rd-saude.png", alt: "RD Saúde"},
    { src: "../../../public/assets/images/logo_santander.png", alt: "Santander" },
    { src: "../../../public/assets/images/logo_syngenta.png", alt: "Syngenta" },
    { src: "../../../public/assets/images/logo_vibra.png", alt: "Vibra" },
    { src: "../../../public/assets/images/logo_visa.png", alt: "Visa" },
    { src: "../../../public/assets/images/logo_vitru.png", alt: "Vitru" },
];

// divide em grupos de 6
const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);

const clientGroups = chunkArray(clientsList, 6);

export default function Clients() {
    const [groupIndex, setGroupIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setGroupIndex((prev) => (prev + 1) % clientGroups.length);
                setFade(true);
            }, 1000);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="clients">
            <div className="container">
                <div className={`clients-logos ${fade ? "fade-in" : "fade-out"}`}>
                    {clientGroups[groupIndex].map((client, i) => (
                        <img key={i} src={client.src} alt={client.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
}