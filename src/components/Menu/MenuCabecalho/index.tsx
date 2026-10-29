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
                            className={({ isActive }) => `group block rounded-sm px-6 py-5 text-[1.6rem] whitespace-nowrap transition-colors hover:text-[#234b43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#507e7e] xl:px-3 xl:py-4 xl:text-[1.5rem] ${isActive ? "text-[#234b43]" : "text-[#202b28]"}`}
                        >
                            {({ isActive }) => (
                                <span className={`relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-current after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-reduce:after:transition-none ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`}>
                                    {label}
                                </span>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
