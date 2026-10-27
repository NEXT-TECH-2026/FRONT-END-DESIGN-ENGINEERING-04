import logoFiap from "../../img/logoFiap.png";
import logoSoulUp from "../../img/logoSoulUp.jpg";

export default function Parceiros(){
    return(
        <section className="bg-[#15191a] py-24">
                    <div className="w-[90%] max-w-[120rem] mx-auto">
                        <p 
                            className="text-[1.9rem] text-[#b3c2c2] tracking-[3px] text-center pt-20 pb-16 font-['Sora',sans-serif]"
                        >EMPRESAS PARCEIRAS</p>
                        <div className="flex items-center justify-center py-16 gap-10 sm:gap-[15rem]">
                            <div className="flex items-center gap-4">
                                <img 
                                    className="w-20 h-20 object-contain"
                                    src={logoFiap}
                                    alt="Palavra FIAP com fundo rosa e letras brancas"/>
                                <span
                                    className="text-[#b3c2c2] text-[2rem] font-['Inter',sans-serif] tracking-[1.5px]"
                                >FIAP</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img
                                    className="w-20 h-20 object-contain"
                                    src={logoSoulUp} 
                                    alt="Letra S branca com fundo azul"/>
                                <span 
                                    className="text-[#b3c2c2] text-[2rem] font-['Inter',sans-serif] tracking-[1.5px]"
                                >Soul Up</span>
                            </div>
                        </div>
                    </div>
                </section>
    );

}