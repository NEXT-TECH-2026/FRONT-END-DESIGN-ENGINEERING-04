import { NavLink } from "react-router";
import { useDemoAuth } from "../../../contexts/demoAuth";

const estiloLink =
    "text-[1.5rem] font-['Inter',sans-serif] text-[#4e4d4d] hover:text-[var(--cabecalho-color)]";

export default function MenuRodape() {
    const { usuario } = useDemoAuth();
    return (
        <nav className="w-fit">
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
                <li>
                    <NavLink 
                        to="/" 
                        className={estiloLink}
                    >Home</NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/Equipe" 
                        className={estiloLink}
                    >Equipe</NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/Sobre" 
                        className={estiloLink}
                    >Sobre</NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/Conteudo" 
                        className={estiloLink}
                    >Conteudo</NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/Contato" 
                        className={estiloLink}
                    >Contato</NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/Login" 
                        className={estiloLink}
                    >Login</NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/Cadastro" 
                        className={estiloLink}
                    >Cadastro</NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/Faq" 
                        className={estiloLink}
                    >FAQ</NavLink>
                </li>

                {usuario && <li>
                    <NavLink 
                        to="/Solucao-Simulacao"
                        className={estiloLink}
                    >Simulação
                    </NavLink>
                </li>}
            </ul>
        </nav>
    );
}
