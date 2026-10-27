import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDemoAuth } from "../../contexts/demoAuth";
import MenuCabecalho from "../Menu/MenuCabecalho";
import logoSoulPass from "../../img/SoulPass-logo.jpg";

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);
    
    const { usuario, sair: encerrarSessao } = useDemoAuth();
    const nomeUsuario = usuario?.nome;
    const navigate = useNavigate();

    function sair() {
        encerrarSessao();
        setMenuAberto(false);
        navigate("/login");
    }

    return (
        <header className="mt-8 border-b border-[#c0bfbf]" onKeyDown={(evento) => { if (evento.key === "Escape") setMenuAberto(false); }}>
            <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:inline-block focus:rounded-lg focus:bg-white focus:p-5 focus:text-[#1e4d4d]">Pular para o conteúdo</a>
            <div className="relative flex w-full items-center justify-between px-20 py-8 max-md:px-8">

                <Link
                    to="/"
                    onClick={() => setMenuAberto(false)}
                    className="block shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#507e7e]"
                >
                    <img
                        src={logoSoulPass}
                        alt="SoulPass - Página inicial"
                        width={2752}
                        height={1536}
                        className="h-[6rem] w-[18rem] rounded-lg object-cover sm:h-[7rem] sm:w-[20rem]"
                    />
                </Link>

                {/* Menu responsivo no desktop */}
                <div className="max-xl:hidden">
                    <MenuCabecalho onNavigate={() => setMenuAberto(false)} />
                </div>

                {/* Usuário / botão Entrar */}
                {nomeUsuario ? (
                    <div className="flex items-center gap-5 max-xl:hidden">
                        <span className="text-[1.5rem] font-['Inter',sans-serif] text-[var(--cabecalho-color)]">
                            Bem-vindo, {nomeUsuario}!
                        </span>

                        <button
                            onClick={sair}
                            className="rounded-[4rem] border-2 border-[var(--cabecalho-color)] px-8 py-4 text-[1.2rem] font-semibold text-[var(--cabecalho-color)] transition duration-300 hover:bg-[var(--cabecalho-color)] hover:text-white"
                        >
                            Sair
                        </button>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="inline-block rounded-[4rem] bg-[var(--cabecalho-color)] px-12 py-6 text-[1.5rem] font-['Inter',sans-serif] text-[var(--text-white)] no-underline transition duration-300 max-xl:hidden"
                    >
                        Entrar
                    </Link>
                )}

                {/* Botão hamburger */}
                <button
                    type="button"
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="hidden text-[2.8rem] text-[var(--cabecalho-color)] max-xl:block"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    aria-controls="menu-mobile"
                >
                    {menuAberto ? "✕" : "☰"}
                </button>
            </div>

            {/* Menu mobile */}
            {menuAberto && (
                <div id="menu-mobile" className="flex flex-col items-center gap-8 border-t border-[#c0bfbf] px-8 py-8 xl:hidden">
                    <MenuCabecalho onNavigate={() => setMenuAberto(false)} />

                    {nomeUsuario ? (
                        <div className="flex flex-col items-center gap-4">
                            <span className="text-[1.5rem] font-['Inter',sans-serif] text-[var(--cabecalho-color)]">
                                Bem-vindo, {nomeUsuario}!
                            </span>

                            <button
                                onClick={() => {
                                    sair();
                                    setMenuAberto(false);
                                }}
                                className="rounded-[4rem] border-2 border-[var(--cabecalho-color)] px-8 py-4 text-[1.2rem] font-semibold text-[var(--cabecalho-color)]"
                            >
                                Sair
                            </button>
                        </div>
                    ) : (
                        <Link
                            className="inline-block rounded-[4rem] bg-[var(--cabecalho-color)] px-12 py-6 text-[1.5rem] font-['Inter',sans-serif] text-[var(--text-white)] no-underline"
                            to="/login"
                            onClick={() => setMenuAberto(false)}
                        >
                            Entrar
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
}
