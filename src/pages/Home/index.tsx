import { useEffect } from "react";
import { Link } from 'react-router'
import hero from "../../img/hero.jpg";


export default function Home(){

    useEffect(() => {
            document.title = "SoulPass - Home";
        }, []);

    return (
    <div>
         <section className="py-16 md:py-32">
            <div className="mx-auto flex w-[90%] max-w-[124rem] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-24">
              <div className="flex-1">
                <h1 className="w-full pt-8 pb-8 text-[3.6rem] md:text-[5rem] leading-[1.2] font-['Inter',sans-serif] text-[var(--cabecalho-color)]"
                >Seu esforço agora te leva mais longe.</h1>
                <p className="w-full text-[2rem] leading-[3rem] font-['Inter',sans-serif] [word-spacing:8px] text-[#3a5353]"
                >Descubra uma nova forma de utilizar seus pontos Soul Up com benefícios voltados para mobilidade urbana e uso diário.</p>
                <Link
                  className="mt-12 lg:mt-20 inline-block w-fit rounded-[4rem] bg-[var(--cabecalho-color)] px-12 py-8 text-[1.5rem] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] text-[var(--text-white)] no-underline"
                  to="/Sobre"
                  >Saiba mais.</Link>
              </div>
              <div className="mb-0 w-full flex-1 overflow-hidden rounded-[3rem]">
                <img 
                  src={hero}
                  className="block h-[38rem] w-full object-cover"
                  alt="Veículo de transporte coletivo em uma rua arborizada"
                  />
              </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
          <div className="mx-auto w-[90%] max-w-[120rem] text-center">
                <h2 className="mb-4 text-[3.5rem] font-['Inter',sans-serif]"
                >Fluxo inteligente de resgate</h2>
                <p className="mb-24 text-[1.8rem] font-['Inter',sans-serif] text-[#666]"
                > Um processo pensado para ser invisível, rápido e eficiente.</p>
            </div>
            <div className="mx-0 flex flex-col items-center justify-center gap-16 px-8 sm:grid sm:grid-cols-2 lg:mx-[7rem] lg:grid-cols-4 lg:items-start lg:gap-12">
                <div className="flex max-w-[30rem] flex-1 flex-col items-center">
                    <div className="mb-16 flex h-36 w-36 items-center justify-center rounded-full border-[2.5px] border-[#8fa1ae] bg-white text-[3rem]"
                    >💰</div>
                    <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cabecalho-color)] text-[1.5rem] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] text-white"
                    >01</span>
                    <h2 className="pb-8 text-[2rem] font-['Inter',sans-serif]"
                    >Área de Resgate</h2>
                    <p className="text-[1.5rem] leading-[2.5rem] text-[#666]"
                    >Acesse a área de resgate no SoulPass e encontre a opção “Transporte” para
                        converter seus pontos em créditos de mobilidade.
                    </p>
                </div>
                <div className="flex max-w-[30rem] flex-1 flex-col items-center">
                    <div className="mb-16 flex h-36 w-36 items-center justify-center rounded-full border-[2.5px] border-[#8fa1ae] bg-white text-[3rem]"
                    >🚌</div>
                    <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cabecalho-color)] text-[1.5rem] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] text-white"
                    >02</span>
                    <h2 className="pb-8 text-[2rem] font-['Inter',sans-serif]"
                    >Transporte</h2>
                    <p className="text-[1.5rem] leading-[2.5rem] text-[#666]"
                    >Escolha o valor desejado para a conversão e visualize quanto você receberá de voucher.
                    </p>
                </div>
                <div className="flex max-w-[30rem] flex-1 flex-col items-center">
                    <div className="mb-16 flex h-36 w-36 items-center justify-center rounded-full border-[2.5px] border-[#8fa1ae] bg-white text-[3rem]"
                    >🏷️</div>
                    <span  className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cabecalho-color)] text-[1.5rem] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] text-white"
                    >03</span>
                    <h2 className="pb-8 text-[2rem] font-['Inter',sans-serif]"
                    >Voucher</h2>
                    <p className="text-[1.5rem] leading-[2.5rem] text-[#666]"
                    >Após confirmar a troca, seus pontos serão convertidos automaticamente em um voucher digital de transporte.
                    </p>
                </div>
                <div  className="flex max-w-[30rem] flex-1 flex-col items-center">
                    <div className="mb-16 flex h-36 w-36 items-center justify-center rounded-full border-[2.5px] border-[#8fa1ae] bg-white text-[3rem]"
                    >💳</div>
                    <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cabecalho-color)] text-[1.5rem] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] text-white"
                    >04</span>
                    <h2  className="pb-8 text-[2rem] font-['Inter',sans-serif]"
                    >Utilização do Voucher</h2>
                    <p  className="text-[1.5rem] leading-[2.5rem] text-[#666]"
                    >Utilize o voucher gerado na plataforma parceira integrada ao sistema para resgatar seu crédito de transporte.
                    </p>
                </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
          <div className="mx-auto w-[90%] max-w-[120rem]">
            <h2  
                className="pb-4 text-[3.5rem] font-['Inter',sans-serif]"
            >Vantagens</h2>
            <p 
                className="pb-20 text-[1.8rem] font-['Inter',sans-serif] text-[#666]"
            >Benefícios da conversão de pontos em mobilidade urbana.</p>
              <div className="grid max-w-[120rem] grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12">
                  <div 
                    className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-[var(--third-color)] text-[2rem]"
                  >🚌</div>
                        <h3
                             className="text-[2.5rem] font-bold font-['Inter',sans-serif]"
                        >Mobilidade urbana</h3>
                        <p
                             className="w-[90%] max-w-[100rem] text-[1.6rem] font-['Inter',sans-serif] text-[#666]"
                        >Transforme seus pontos em créditos de transporte e utilize benefícios reais para facilitar sua rotina e seus deslocamentos diários.</p>
                    </div>
                    <div className="flex flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12">
                        <div
                            className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-[var(--third-color)] text-[2rem]"
                        >⚡</div>
                        <h3
                            className="text-[2.5rem] font-bold font-['Inter',sans-serif]"
                        >Resgate Rápido</h3>
                        <p
                            className="w-[90%] max-w-[100rem] text-[1.6rem] font-['Inter',sans-serif] text-[#666]"
                        >Converta seus pontos em poucos passos com um processo simples, rápido
                            e totalmente integrado ao Soul Up.</p>
                    </div>
                    <div className="flex flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12">
                        <div 
                            className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-[var(--third-color)] text-[2rem]"
                        >🔗</div>
                        <h3 className="text-[2.5rem] font-bold font-['Inter',sans-serif]"
                        >Experiência Integrada</h3>
                        <p 
                            className="w-[90%] max-w-[100rem] text-[1.6rem] font-['Inter',sans-serif] text-[#666]"
                        >Faça todo o processo diretamente no aplicativo, sem complicações e
                            sem precisar acessar múltiplas plataformas.</p>
                    </div>
                    <div className="flex flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12">
                        <div
                            className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-[var(--third-color)] text-[2rem]"
                        >⬆️</div>
                        <h3
                            className="text-[2.5rem] font-bold font-['Inter',sans-serif]"
                        >Benefício Real</h3>
                        <p
                            className="w-[90%] max-w-[100rem] text-[1.6rem] font-['Inter',sans-serif] text-[#666]"
                        >Seus pontos deixam de ser apenas recompensas digitais e passam a gerar economia e praticidade no seu dia a dia.</p>
                    </div>
                </div>
            </div>
         </section>
         
    </div>
  );
}