import MenuRodape from "../Menu/MenuRodape";

export default function Rodape() {
    return (
        <footer className="bg-[#dbd9d9] py-20">
            <div className="mx-auto grid w-[90%] max-w-[120rem] grid-cols-[2fr_1fr] gap-20 pb-20 max-md:flex max-md:flex-col max-md:gap-12">

                <div className="flex-[2]">
                    <h2 className="pb-8 text-[3rem] font-['Georgia',serif] font-bold text-[var(--cabecalho-color)]">
                        SoulPass
                    </h2>

                    <p className="text-[1.6rem] font-['Inter',sans-serif] text-[#4e4d4d]">
                        O SoulPass propõe uma nova forma de utilizar pontos digitais, transformando recompensas em benefícios reais para o cotidiano.
                    </p>
                </div>

                <div className="max-md:flex max-md:flex-col max-md:items-center">
                    <h4 className="pb-8 text-[1.7rem] font-['Inter',sans-serif] font-bold text-[var(--cabecalho-color)]">
                        Páginas
                    </h4>

                    <MenuRodape />
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#b0b0b0] pt-8 text-[var(--cabecalho-color)]">
                <p className="mx-auto pt-8 text-[1.7rem]">
                    &copy; 2026 SoulPass. Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
}