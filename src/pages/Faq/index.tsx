import { useEffect } from "react";
import PerguntasFrequentes from "../../components/PerguntasFrequentes";

export default function Faq() {
    useEffect(() => {
        document.title = "SoulPass - FAQ";
    }, []);

    return (
        <section className="mx-auto w-[90%] max-w-[96rem] py-20 sm:py-28">
            <p className="mb-4 text-center text-[1.2rem] font-semibold tracking-[0.18em] text-[#507e7e] uppercase">Ajuda SoulPass</p>
            <h1 className="mb-5 text-center text-[3.2rem] font-semibold text-[#234b43] sm:text-[4rem]">Perguntas frequentes</h1>
            <p className="mx-auto mb-14 max-w-[58rem] text-center text-[1.6rem] leading-[2.7rem] text-[#536a61]">Conheça a proposta do projeto e encontre respostas para experimentar o SoulPass.</p>
            <PerguntasFrequentes />
        </section>
    );
}
