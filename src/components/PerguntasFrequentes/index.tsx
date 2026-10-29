import { perguntasFrequentes } from "../../data/perguntasFrequentes";

export default function PerguntasFrequentes({ compacto = false }: { compacto?: boolean }) {
    return (
        <div className={compacto ? "space-y-3" : "space-y-6"}>
            {perguntasFrequentes.map(({ id, pergunta, resposta }) => (
                <details key={id} className="group rounded-2xl border border-[#dce7e0] bg-white open:border-[#85ab98]">
                    <summary className={`flex min-h-[4.8rem] cursor-pointer list-none items-center justify-between gap-5 rounded-2xl text-left font-semibold text-[#234b43] transition-colors hover:bg-[#f1f6f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#507e7e] [&::-webkit-details-marker]:hidden ${compacto ? "px-5 py-4 text-[1.4rem]" : "px-8 py-7 text-[1.7rem]"}`}>
                        <span>{pergunta}</span>
                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 shrink-0 transition-transform group-open:rotate-45">
                            <path d="M10 4v12M4 10h12" />
                        </svg>
                    </summary>
                    <p className={`text-[#536a61] ${compacto ? "px-5 pb-5 text-[1.35rem] leading-[2.2rem]" : "px-8 pb-7 text-[1.6rem] leading-[2.7rem]"}`}>
                        {resposta}
                    </p>
                </details>
            ))}
        </div>
    );
}
