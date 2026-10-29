import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import PerguntasFrequentes from "../PerguntasFrequentes";

export default function AjudaRapida() {
    const [aberto, setAberto] = useState(false);
    const dialogo = useRef<HTMLDialogElement>(null);
    const botaoAjuda = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!aberto) return;
        const overflowAnterior = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = overflowAnterior; };
    }, [aberto]);

    function abrirAjuda() {
        if (!dialogo.current?.open) {
            dialogo.current?.showModal();
            setAberto(true);
        }
    }

    function fecharAjuda() {
        dialogo.current?.close();
    }

    return (
        <>
            <button
                ref={botaoAjuda}
                type="button"
                onClick={abrirAjuda}
                aria-haspopup="dialog"
                aria-controls="ajuda-rapida"
                aria-expanded={aberto}
                className="fixed right-6 bottom-8 z-50 flex min-h-[6.4rem] cursor-pointer items-center gap-4 rounded-full border border-[#709c87] bg-[#356c55] py-3 pr-6 pl-3 text-left text-white shadow-[0_8px_30px_rgba(5,25,16,0.24)] transition-colors hover:bg-[#28573f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ebea3] sm:right-10 sm:bottom-[6rem] sm:min-h-[7.2rem] sm:gap-5 sm:pr-8"
            >
                <span aria-hidden="true" className="flex h-[4.4rem] w-[4.4rem] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[2.4rem] font-semibold">?</span>
                <span>
                    <span className="block text-[1.4rem] font-semibold sm:text-[1.5rem]">Precisa de ajuda?</span>
                    <span className="block text-[1.2rem] text-[#d5e7dc] sm:text-[1.3rem]">Veja as respostas</span>
                </span>
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 shrink-0"><path d="m7 4 6 6-6 6" /></svg>
            </button>

            <dialog
                ref={dialogo}
                id="ajuda-rapida"
                aria-labelledby="ajuda-titulo"
                aria-describedby="ajuda-descricao"
                onClose={() => {
                    setAberto(false);
                    botaoAjuda.current?.focus({ preventScroll: true });
                }}
                onClick={(evento) => { if (evento.target === evento.currentTarget) fecharAjuda(); }}
                className="fixed inset-auto right-6 bottom-[10rem] m-0 max-h-[calc(100dvh-12rem)] w-[calc(100%-3.2rem)] max-w-[42rem] overflow-hidden rounded-3xl border-0 bg-white p-0 text-[#234b43] shadow-[0_20px_80px_rgba(5,25,16,0.3)] backdrop:bg-[#061411]/45 backdrop:backdrop-blur-[2px] open:flex open:flex-col sm:right-10 sm:bottom-[15rem] sm:max-h-[calc(100dvh-17rem)]"
            >
                <div className="flex min-h-0 flex-col">
                    <div className="flex shrink-0 items-start justify-between gap-5 bg-[#173b2d] px-7 py-7 text-white">
                        <div>
                            <p className="mb-2 text-[1.1rem] font-semibold tracking-[0.18em] text-[#a4c8b3] uppercase">Ajuda SoulPass</p>
                            <h2 id="ajuda-titulo" className="text-[2rem] font-semibold">Como podemos ajudar?</h2>
                            <p id="ajuda-descricao" className="mt-2 text-[1.3rem] text-[#c1d6ca]">Respostas rápidas sobre o projeto.</p>
                        </div>
                        <button type="button" autoFocus onClick={fecharAjuda} aria-label="Fechar ajuda" className="flex h-[3.6rem] w-[3.6rem] shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-8 w-8"><path d="m5 5 10 10M5 15 15 5" /></svg>
                        </button>
                    </div>
                    <div className="min-h-0 overflow-y-auto overscroll-contain bg-[#f5f8f6] p-6">
                        <PerguntasFrequentes compacto />
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-[#e4ece7] bg-white px-7 py-5 text-[1.3rem]">
                        <Link to="/faq" onClick={fecharAjuda} className="rounded-md py-2 font-medium text-[#356c55] hover:underline focus-visible:outline-2 focus-visible:outline-[#507e7e]">Ver todas as perguntas</Link>
                        <Link to="/contato" onClick={fecharAjuda} className="rounded-full bg-[#e0ede5] px-5 py-3 font-semibold text-[#234b43] hover:bg-[#ccdfd3] focus-visible:outline-2 focus-visible:outline-[#507e7e]">Falar com a equipe</Link>
                    </div>
                </div>
            </dialog>
        </>
    );
}
