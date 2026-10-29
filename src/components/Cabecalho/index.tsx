import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDemoAuth } from "../../contexts/demoAuth";
import MenuCabecalho from "../Menu/MenuCabecalho";
import logoSoulPass from "../../img/SoulPass-logo.jpg";

function SetaAcesso() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-9 w-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18 18 6M6 6h12v12" />
        </svg>
    );
}

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);
    const botaoMenu = useRef<HTMLButtonElement>(null);
    const { usuario, sair: encerrarSessao } = useDemoAuth();
    const navigate = useNavigate();

    function fecharMenu() {
        setMenuAberto(false);
    }

    function sair() {
        encerrarSessao();
        fecharMenu();
        navigate("/login");
    }

    return (
        <header
            className="sticky top-6 z-40 mx-auto mt-6 w-[calc(100%-3.2rem)] max-w-[165rem] rounded-[3.2rem] border border-[var(--navigation-border)] bg-[var(--header-surface)] shadow-[0_16px_45px_rgba(31,62,62,0.06)] backdrop-blur-[18px] sm:top-8 sm:mt-8 sm:w-[calc(100%-6.4rem)] xl:rounded-full"
            onKeyDown={(evento) => {
                if (evento.key === "Escape" && menuAberto) {
                    fecharMenu();
                    botaoMenu.current?.focus();
                }
            }}
        >
            <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:absolute focus:left-8 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#1e4d4d] focus:px-6 focus:py-4 focus:text-white">
                Pular para o conteúdo
            </a>

            <div className="flex min-h-[8.8rem] items-center justify-between gap-6 px-6 py-4 sm:px-10 xl:grid xl:min-h-[11rem] xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-8 xl:px-8 xl:py-6">
                <Link
                    to="/"
                    onClick={fecharMenu}
                    className="block shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#507e7e] xl:justify-self-start"
                >
                    <img
                        src={logoSoulPass}
                        alt="SoulPass - Página inicial"
                        width={2752}
                        height={1536}
                        className="h-[5.6rem] w-[16rem] object-cover brightness-110 contrast-[1.15] mix-blend-multiply sm:h-[6.4rem] sm:w-[18rem]"
                    />
                </Link>

                <div className="hidden xl:block xl:justify-self-center">
                    <MenuCabecalho onNavigate={fecharMenu} />
                </div>

                {usuario ? (
                    <div className="hidden min-w-0 items-center justify-self-end gap-5 xl:flex">
                        <span title={usuario.nome} className="max-w-[10rem] truncate text-[1.4rem] text-[#3a5353]">
                            Olá, {usuario.nome}
                        </span>
                        <Link to="/solucao-simulacao" className="flex min-h-[5.6rem] shrink-0 items-center rounded-full bg-[#dceae3] px-8 text-[1.5rem] text-[#234b43] transition-colors hover:bg-[#cbded2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#507e7e]">
                            Minha simulação
                        </Link>
                        <button type="button" onClick={sair} className="min-h-[5.6rem] cursor-pointer rounded-full bg-[#e0ede7] px-9 text-[1.6rem] text-[#234b43] transition-colors hover:bg-[#cedfd6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#507e7e]">
                            Sair
                        </button>
                    </div>
                ) : (
                    <div className="hidden shrink-0 items-center justify-self-end gap-5 xl:flex">
                        <Link to="/login" className="flex min-h-[5.6rem] items-center rounded-full px-6 text-[1.6rem] text-[#234b43] transition-colors hover:bg-[#edf4ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#507e7e]">
                            Entrar
                        </Link>
                        <Link to="/cadastro" className="group flex items-center gap-2 rounded-full text-[#234b43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#507e7e]">
                            <span className="flex min-h-[5.6rem] items-center rounded-full bg-[#dceae3] px-9 text-[1.6rem] transition-colors group-hover:bg-[#cbded2]">
                                Criar conta
                            </span>
                            <span className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-full bg-[#dceae3] transition-colors group-hover:bg-[#cbded2]">
                                <SetaAcesso />
                            </span>
                        </Link>
                    </div>
                )}

                <button
                    ref={botaoMenu}
                    type="button"
                    onClick={() => setMenuAberto((aberto) => !aberto)}
                    className="flex h-[4.8rem] w-[4.8rem] shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#d6e3df] bg-[#f2f7f4] text-[#234b43] transition-colors hover:bg-[#e0ede7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#507e7e] xl:hidden"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    aria-controls="menu-mobile"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        {menuAberto ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M5 7h14M5 12h14M5 17h14" />}
                    </svg>
                </button>
            </div>

            {menuAberto && (
                <div id="menu-mobile" className="mx-6 flex max-h-[65dvh] flex-col gap-6 overflow-y-auto overscroll-contain border-t border-[#e6edec] py-6 sm:mx-10 xl:hidden">
                    <MenuCabecalho onNavigate={fecharMenu} />
                    {usuario ? (
                        <div className="flex flex-col gap-4 border-t border-[#e6edec] pt-6">
                            <div className="flex flex-wrap items-center justify-between gap-4 px-6">
                                <span className="min-w-0 break-words text-[1.5rem] text-[#3a5353]">Olá, {usuario.nome}</span>
                                <button type="button" onClick={sair} className="min-h-[4.8rem] cursor-pointer rounded-full px-8 text-[1.6rem] text-[#234b43] hover:bg-[#edf4ef] focus-visible:outline-2 focus-visible:outline-[#507e7e]">Sair</button>
                            </div>
                            <Link to="/solucao-simulacao" onClick={fecharMenu} className="flex min-h-[5.2rem] items-center justify-between rounded-full bg-[#dceae3] px-8 text-[1.6rem] text-[#234b43] hover:bg-[#cbded2] focus-visible:outline-2 focus-visible:outline-[#507e7e]">
                                Minha simulação
                                <SetaAcesso />
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <Link to="/login" onClick={fecharMenu} className="flex min-h-[5.2rem] items-center justify-center rounded-full border border-[#d6e3df] px-8 text-[1.6rem] text-[#234b43] hover:bg-[#edf4ef] focus-visible:outline-2 focus-visible:outline-[#507e7e]">
                                Entrar
                            </Link>
                            <Link to="/cadastro" onClick={fecharMenu} className="flex min-h-[5.2rem] items-center justify-between rounded-full bg-[#dceae3] px-8 text-[1.6rem] text-[#234b43] transition-colors hover:bg-[#cbded2] focus-visible:outline-2 focus-visible:outline-[#507e7e]">
                                Criar conta
                                <SetaAcesso />
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}
