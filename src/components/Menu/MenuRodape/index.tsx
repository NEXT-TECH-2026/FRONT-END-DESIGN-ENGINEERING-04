import { NavLink } from "react-router";
import { useDemoAuth } from "../../../contexts/demoAuth";

interface MenuRodapeProps {
    secao?: "navegacao" | "plataforma";
}

const navegacao = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre o projeto" },
    { to: "/equipe", label: "Nossa equipe" },
    { to: "/contato", label: "Contato" },
];

export default function MenuRodape({ secao = "navegacao" }: MenuRodapeProps) {
    const { usuario } = useDemoAuth();
    const plataforma = [
        { to: "/conteudo", label: "Como funciona" },
        ...(usuario
            ? [{ to: "/solucao-simulacao", label: "Minha simulação" }]
            : [{ to: "/login", label: "Entrar na conta" }, { to: "/login", label: "Criar conta", aba: "cadastro" }]),
        { to: "/faq", label: "Perguntas frequentes" },
    ];
    const links = secao === "navegacao" ? navegacao : plataforma;

    return (
        <nav aria-label={secao === "navegacao" ? "Navegação do rodapé" : "Explore o SoulPass"}>
            <ul className="flex list-none flex-col">
                {links.map(({ to, label, ...opcoes }) => (
                    <li key={`${to}-${label}`}>
                        <NavLink
                            to={to}
                            state={"aba" in opcoes ? { aba: opcoes.aba } : undefined}
                            end={to === "/"}
                            className={({ isActive }) => `inline-flex min-h-[4.4rem] items-center rounded-md py-2 text-[1.5rem] leading-[2.4rem] transition-colors hover:text-[var(--navigation-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] ${isActive ? "text-[var(--navigation-text)] font-medium" : "text-[var(--navigation-link)]"}`}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
