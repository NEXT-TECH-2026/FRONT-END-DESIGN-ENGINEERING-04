import { NavLink } from "react-router";

const links = [
    { to: "/", label: "Home" },
    { to: "/equipe", label: "Equipe" },
    { to: "/sobre", label: "Sobre" },
    { to: "/conteudo", label: "Conteúdo" },
    { to: "/contato", label: "Contato" },
];

export default function MenuCabecalho({ onNavigate }: { onNavigate?: () => void }) {
    return (
        <nav aria-label="Navegação principal">
            <ul className="flex list-none flex-col gap-2 xl:flex-row xl:items-center xl:gap-6 2xl:gap-10">
                {links.map(({ to, label }) => (
                    <li key={to}>
                        <NavLink
                            to={to}
                            end={to === "/"}
                            onClick={onNavigate}
                            className={({ isActive }) => `block rounded-full px-6 py-5 text-[1.6rem] whitespace-nowrap transition-colors hover:bg-[#edf4ef] hover:text-[#234b43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#507e7e] xl:px-3 xl:py-4 xl:text-[1.5rem] ${isActive ? "bg-[#edf4ef] text-[#234b43]" : "text-[#202b28]"}`}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
