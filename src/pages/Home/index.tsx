import { useEffect } from "react";
import { Link } from 'react-router'
import hero from "../../img/hero.jpg";


export default function Home(){

    useEffect(() => {
            document.title = "SoulPass - Home";
        }, []);

    return (
    <div>
         <section className="px-4 pt-8 pb-12 sm:px-8 sm:pt-10 md:pb-20">
            <div className="relative mx-auto flex min-h-[52rem] w-full max-w-[165rem] items-center overflow-hidden rounded-[3rem] bg-[#193b36] sm:min-h-[62rem] lg:min-h-[68rem]">
              <img
                src={hero}
                alt="Ônibus circulando por uma rua arborizada"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#102b26]/90 via-[#163b33]/68 to-[#163b33]/10" />
              <div className="relative z-10 mx-auto w-[88%] max-w-[124rem] py-20">
                <div className="max-w-[78rem]">
                  <p className="mb-6 text-[1.3rem] font-semibold uppercase tracking-[0.24em] text-[#c4e5ce] sm:text-[1.5rem]">SoulPass · mobilidade que transforma</p>
                  <h1 className="max-w-[72rem] text-[4.8rem] font-bold leading-[1.04] tracking-[-0.035em] text-white [font-family:Georgia,serif] sm:text-[6.4rem] lg:text-[8rem]">
                    Seu esforço agora te leva mais longe.
                  </h1>
                  <p className="mt-8 max-w-[62rem] text-[1.8rem] leading-[1.7] text-white/90 sm:text-[2.1rem]">
                    Descubra uma nova forma de utilizar seus pontos Soul Up com benefícios voltados para mobilidade urbana e uso diário.
                  </p>
                  <Link
                    className="mt-10 inline-flex min-h-[5.6rem] w-fit items-center rounded-full bg-[#e2f2e6] px-9 text-[1.6rem] font-semibold text-[#234b3b] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    to="/sobre"
                  >Saiba mais</Link>
                </div>
              </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
          <div className="mx-auto mb-16 w-[90%] max-w-[120rem] text-center md:mb-24">
            <h2 className="mb-4 text-[4.2rem] font-bold text-[var(--navigation-text)] [font-family:Georgia,serif]">Fluxo inteligente de resgate</h2>
            <p className="text-[1.8rem] font-['Inter',sans-serif] text-[#666]">Um processo pensado para ser invisível, rápido e eficiente.</p>
          </div>
          <ol className="mx-auto grid w-[90%] max-w-[132rem] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              { numero: "01", icone: "💰", titulo: "Área de Resgate", descricao: "Acesse a área de resgate no SoulPass e encontre a opção “Transporte” para converter seus pontos em créditos de mobilidade." },
              { numero: "02", icone: "🚌", titulo: "Transporte", descricao: "Escolha o valor desejado para a conversão e visualize quanto você receberá de voucher." },
              { numero: "03", icone: "🏷️", titulo: "Voucher", descricao: "Após confirmar a troca, seus pontos serão convertidos automaticamente em um voucher digital de transporte." },
              { numero: "04", icone: "💳", titulo: "Utilização do Voucher", descricao: "Utilize o voucher gerado na plataforma parceira integrada ao sistema para resgatar seu crédito de transporte." },
            ].map((etapa, indice) => (
              <li key={etapa.numero} className="relative flex min-h-[24rem] flex-col rounded-[2rem] border border-[#c5decd] bg-[var(--navigation-surface)] p-7 font-['Inter',sans-serif] shadow-[0_12px_32px_rgba(35,75,59,0.08)] sm:min-h-[26rem] sm:p-8">
                {indice < 3 && <span aria-hidden="true" className="absolute -bottom-[3.4rem] left-1/2 z-10 flex -translate-x-1/2 rotate-90 items-center justify-center text-[var(--navigation-text)] sm:bottom-auto sm:-right-9 sm:left-auto sm:top-1/2 sm:translate-x-0 sm:rotate-0 lg:-right-10"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></span>}
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[1.4rem] font-semibold text-[var(--navigation-text)] shadow-sm">{etapa.numero}</span>
                  <span aria-hidden="true" className="text-[3.6rem]">{etapa.icone}</span>
                </div>
                <h3 className="mb-4 text-[2rem] font-semibold text-[var(--navigation-text)]">{etapa.titulo}</h3>
                <p className="text-[1.5rem] leading-[2.5rem] text-[var(--navigation-muted)]">{etapa.descricao}</p>
              </li>
            ))}
          </ol>
         </section>

         <section className="py-16 md:py-32">
          <div className="mx-auto w-[90%] max-w-[120rem]">
            <h2 className="pb-4 text-[4.2rem] font-bold text-[var(--navigation-text)] [font-family:Georgia,serif]">Vantagens</h2>
            <p 
                className="pb-20 text-[1.8rem] font-['Inter',sans-serif] text-[#666]"
            >Benefícios da conversão de pontos em mobilidade urbana.</p>
              <div className="grid max-w-[132rem] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icone: "🚌", titulo: "Mobilidade urbana", descricao: "Transforme seus pontos em créditos de transporte e facilite sua rotina e seus deslocamentos diários." },
                  { icone: "⚡", titulo: "Resgate rápido", descricao: "Converta seus pontos em poucos passos com um processo simples e integrado ao Soul Up." },
                  { icone: "🔗", titulo: "Experiência integrada", descricao: "Faça o processo diretamente no aplicativo, sem complicações ou múltiplas plataformas." },
                  { icone: "⬆️", titulo: "Benefício real", descricao: "Seus pontos passam a gerar economia e praticidade no seu dia a dia." },
                ].map((vantagem) => (
                  <article key={vantagem.titulo} className="flex min-h-[23rem] flex-col rounded-[2rem] border border-[#c5decd] bg-[var(--navigation-surface)] p-7 shadow-[0_12px_32px_rgba(35,75,59,0.08)] sm:p-8">
                    <span aria-hidden="true" className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[2.4rem]">{vantagem.icone}</span>
                    <h3 className="mb-3 text-[2rem] font-semibold text-[var(--navigation-text)]">{vantagem.titulo}</h3>
                    <p className="text-[1.5rem] leading-[2.5rem] text-[var(--navigation-muted)]">{vantagem.descricao}</p>
                  </article>
                ))}
              </div>
            </div>
         </section>
         
    </div>
  );
}
