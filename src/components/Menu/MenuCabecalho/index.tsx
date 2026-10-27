import { NavLink } from "react-router";

export default function MenuCabecalho({ onNavigate }: { onNavigate?: () => void }){
    return(
        <nav aria-label="Navegação principal" onClick={onNavigate} className="flex items-center gap-12 list-none max-xl:w-full max-xl:flex-col max-xl:gap-5">
            <ul className="flex items-center gap-12 list-none max-xl:flex-col max-xl:gap-6">
                <li><NavLink 
                        className="text-[var(--text-black)] no-underline text-[1.7rem] px-4 py-2 font-['Inter',sans-serif] rounded-[2rem] transition duration-300 hover:bg-[#67939354] [&.active]:bg-[#67939354]"
                        to="/Equipe"
                    >Equipe</NavLink>
                </li>
                <li><NavLink 
                        className="text-[var(--text-black)] no-underline text-[1.7rem] px-4 py-2 font-['Inter',sans-serif] rounded-[2rem] transition duration-300 hover:bg-[#67939354] [&.active]:bg-[#67939354]"
                        to="/Sobre"
                    >Sobre</NavLink>
                </li>
                <li><NavLink 
                        className="text-[var(--text-black)] no-underline text-[1.7rem] px-4 py-2 font-['Inter',sans-serif] rounded-[2rem] transition duration-300 hover:bg-[#67939354] [&.active]:bg-[#67939354]"
                        to="/Conteudo"
                    >Conteúdo</NavLink>
                </li>
                <li><NavLink
                        className="text-[var(--text-black)] no-underline text-[1.7rem] px-4 py-2 font-['Inter',sans-serif] rounded-[2rem] transition duration-300 hover:bg-[#67939354] [&.active]:bg-[#67939354]"
                        to="/Solucao-Simulacao"
                    >Simulação</NavLink>
                </li>
                <li><NavLink 
                        className="text-[var(--text-black)] no-underline text-[1.7rem] px-4 py-2 font-['Inter',sans-serif] rounded-[2rem] transition duration-300 hover:bg-[#67939354] [&.active]:bg-[#67939354]"
                        to="/Cadastro"
                    >Cadastro</NavLink>
                </li>
                <li><NavLink 
                    className="text-[var(--text-black)] no-underline text-[1.7rem] px-4 py-2 font-['Inter',sans-serif] rounded-[2rem] transition duration-300 hover:bg-[#67939354] [&.active]:bg-[#67939354]"
                    to="/Faq"
                    >FAQ</NavLink>
                </li>
                <li><NavLink 
                        className="text-[var(--text-black)] no-underline text-[1.7rem] px-4 py-2 font-['Inter',sans-serif] rounded-[2rem] transition duration-300 hover:bg-[#67939354] [&.active]:bg-[#67939354]"
                        to="/Contato"
                    >Contato</NavLink>
                </li>
            </ul>
        </nav>
    );
}