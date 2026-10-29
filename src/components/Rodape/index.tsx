import { Link } from "react-router";
import { useDemoAuth } from "../../contexts/demoAuth";
import logoSoulPass from "../../img/SoulPass-logo.jpg";
import MenuRodape from "../Menu/MenuRodape";
import Parceiros from "../Parceiros";

export default function Rodape() {
    const { usuario } = useDemoAuth();
    const ano = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-[var(--navigation-border)] bg-[var(--navigation-surface)] text-[var(--navigation-text)]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_28%_0%,rgba(170,207,182,0.18),transparent_60%)]" />
            <div className="relative mx-auto w-[90%] max-w-[165rem] pt-16 sm:pt-20 lg:pt-24">
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-14 sm:gap-x-16 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-x-20 lg:pb-20">
                    <div className="col-span-2 min-w-0 sm:col-span-1">
                        <Link to="/" aria-label="SoulPass — página inicial" className="-ml-6 inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)]">
                            <img src={logoSoulPass} alt="SoulPass" width={2752} height={1536} className="h-[7rem] w-[24rem] object-cover brightness-110 contrast-[1.15] mix-blend-multiply" />
                        </Link>
                        <p className="mt-6 max-w-[32rem] text-[1.5rem] leading-[2.7rem] text-[var(--navigation-muted)]">
                            Seu esforço abre novos caminhos. Transforme pontos em possibilidades para a sua mobilidade.
                        </p>
                        <Parceiros />
                    </div>

                    <div className="min-w-0 lg:pt-3">
                        <h2 className="mb-5 text-[1.6rem] font-semibold tracking-wide">Navegação</h2>
                        <MenuRodape />
                    </div>

                    <div className="min-w-0 lg:pt-3">
                        <h2 className="mb-5 text-[1.6rem] font-semibold tracking-wide">Explore o SoulPass</h2>
                        <MenuRodape secao="plataforma" />
                    </div>

                    <div className="col-span-2 min-w-0 sm:col-span-1 lg:pt-3">
                        <h2 className="mb-7 text-[1.6rem] font-semibold tracking-wide">Vamos conversar?</h2>
                        <p className="text-[1.5rem] leading-[2.7rem] text-[var(--navigation-muted)]">Tem uma dúvida ou uma ideia?<br />Conheça a equipe Nextech.</p>
                        <Link to="/contato" className="mt-8 inline-flex min-h-[5.2rem] items-center gap-5 rounded-full bg-[#609c76] px-8 py-4 text-[1.45rem] font-semibold text-[#081b10] transition-colors hover:bg-[#81b694] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)]">
                            Falar com a equipe
                            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="m5 15 10-10M5 5h10v10" /></svg>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-5 border-t border-[var(--navigation-border)] pt-7 pb-[11rem] text-[1.2rem] leading-[2rem] text-[var(--navigation-muted)] sm:pb-8 md:flex-row md:items-center md:justify-between md:gap-10">
                    <p>© {ano} SoulPass. Desenvolvido pela equipe Nextech.</p>
                    <nav aria-label="Links adicionais do rodapé" className="flex flex-wrap items-center gap-x-7 gap-y-3">
                        <Link to="/faq" className="rounded-md py-2 transition-colors hover:text-[var(--navigation-text)] focus-visible:outline-2 focus-visible:outline-[var(--primary-color)]">Perguntas frequentes</Link>
                        <Link to="/contato" className="rounded-md py-2 transition-colors hover:text-[var(--navigation-text)] focus-visible:outline-2 focus-visible:outline-[var(--primary-color)]">Contato</Link>
                        <Link to={usuario ? "/solucao-simulacao" : "/login"} className="rounded-md py-2 transition-colors hover:text-[var(--navigation-text)] focus-visible:outline-2 focus-visible:outline-[var(--primary-color)]">{usuario ? "Minha simulação" : "Acessar conta"}</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
