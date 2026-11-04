import { Link } from "react-router";
import { useEffect } from "react";
import imagem_conteudo from "../../img/imagem_conteudo.png";
import { useDemoAuth } from "../../contexts/demoAuth";

export default function Conteudo(){
    const { usuario } = useDemoAuth();

    useEffect(() => {
          document.title = "SoulPass - Conteudo";
    }, []);

    return (
    
    <section className="bg-[#ededed] text-[#0f3823]">

      {/* === Conteudo sobre direcionando a simulação da solução === */}
      <section  className="mx-10 mt-10 flex flex-col items-center justify-between gap-[60px] rounded-[28px] border border-[#cfe6d4] bg-[#e0f4e4] px-[20px] py-[50px] md:px-[40px] lg:flex-row lg:px-[90px] lg:pt-[70px] lg:pb-[90px]">
        <div className="max-w-full lg:max-w-[520px]">
          <span className="mb-[24px] inline-block rounded-[30px] bg-white px-[18px] py-[8px] text-[11px] font-bold tracking-[1px] text-[#2f5f4a]">SUSTENTABILIDADE URBANA</span>
          <h1 className="mb-[26px] font-serif text-[36px] font-bold leading-[1.05] text-[#0b3822] md:text-[44px] lg:text-[56px] ">Mobilidade com recompensa</h1>
          <p className="mb-[30px] text-[16px] leading-[1.7] text-[#415846] lg:text-[18px]">
            Transforme seus pontos em créditos de transporte de forma rápida, prática e inteligente. O SoulPass conecta tecnologia e mobilidade urbana para tornar seus benefícios mais úteis no dia a dia, evitando preocupações com gastos para se locomover.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/solucao-simulacao"
              className="inline-block rounded-[999px] bg-[#3b7154] px-[28px] py-[14px] text-[15px] font-semibold text-white no-underline transition duration-300 hover:bg-[#2f5f4a]"
            >{usuario ? "Simular agora" : "Simular agora"}</Link>
          </div>
        </div>
        <div className="relative w-full max-w-full lg:max-w-[720px]">
          <img 
            className="block h-auto w-full rounded-[20px] object-cover lg:h-[430px]"
            src={imagem_conteudo}
            alt="Mobilidade urbana sustentável"/>
        </div>
      </section>
      
      {/* === conteudo sobre fluxo de conversão e resgate === */}
      <section className="bg-transparent px-[20px] py-[90px] md:px-[40px] lg:px-[90px]">
        <div className="mt-[30px] mb-[70px] text-center">
          <h2 className="mb-[14px] font-serif text-[38px] font-bold text-[#0b3822] lg:text-[52px]">Fluxo Inteligente</h2>
          <p className="mx-auto max-w-[600px] text-[16px] leading-[1.6] text-[#545454]">
            Transformando pontos em créditos de transporte de forma simples e prática.
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-[8px] mb-[70px]">
          <article className="min-h-[250px] w-full max-w-[300px] rounded-[20px] border border-[#cfe6d4] bg-white p-[28px]">
            <div className="mb-[36px] flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#e0f4e4] text-[24px] font-bold text-[#0b3822]">1</div>
            <h3 className="mb-[14px] text-[26px] text-[#143f2b]">Acumule</h3>
            <p className="text-[15px] leading-[1.6] text-[#415846]">
              Poupe pontos não utilizados para acumular e converter em vouchers de transporte público.
            </p>
          </article>
          
          <article className="min-h-[250px] w-full max-w-[300px] rounded-[20px] border border-[#3b7154] bg-[#3b7154] p-[28px] text-white lg:translate-y-[18px]">
            <div className="mb-[36px] flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.16)] text-[24px] font-bold">2</div>
            <h3 className="mb-[14px] text-[26px]">Converta</h3>
            <p className="text-[15px] leading-[1.6] text-[#e0f4e4]">
              Transforme seus pontos em vouchers de transporte de forma rápida e integrada ao SoulPass.
            </p>
          </article>

          <article className="min-h-[250px] w-full max-w-[300px] rounded-[20px] border border-[#cfe6d4] bg-white p-[28px]">
            <div className="mb-[36px] flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#e0f4e4] text-[24px] font-bold text-[#0b3822]">3</div>
            <h3 className="mb-[14px] text-[26px] text-[#143f2b]">Utilize</h3>
            <p className="text-[15px] leading-[1.6] text-[#415846]">
              Use os vouchers gerados para facilitar seus deslocamentos no transporte urbano, economizando seu dinheiro.
            </p>
          </article>
        </div>
      </section>

      {/* === Conteudo sobre os desafios da mobilidade urbana === */}
      <section className="mx-10 mb-10 rounded-[28px] bg-[#112921] px-[20px] py-[80px] text-white md:px-[40px] lg:px-[90px]">
        <div className="mb-[50px] flex flex-col items-center text-center justify-center gap-[30px] lg:flex-row">
          <div>
            <h2 className="mb-[20px] max-w-full font-serif text-[40px] font-bold leading-[0.95] text-[#e0f4e4] lg:max-w-[520px] lg:text-[52px]">Desafios da mobilidade urbana</h2>
            <p className="max-w-full text-[16px] leading-[1.5] text-[#bcd6c6] lg:max-w-[480px]">Desafios da mobilidade que o SoulPass busca simplificar.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
          <article className="min-h-[230px] rounded-[20px] border border-[rgba(224,244,228,0.18)] bg-[#1b3d31] p-[28px] lg:p-[30px]">
            <h3 className="mt-[30px] mb-[14px] text-[22px] leading-[1.25] text-[#e0f4e4] lg:text-[24px]">Pontos sem utilidade no dia a dia</h3>
            <p className="text-[15px] leading-[1.7] text-[#bcd6c6]">
              Muitos usuários acumulam pontos em plataformas digitais sem conseguir transformá-los em benefícios realmente úteis para sua rotina.
            </p>
          </article>

          <article className="min-h-[230px] rounded-[20px] border border-[rgba(224,244,228,0.18)] bg-[#1b3d31] p-[28px] lg:p-[30px]">
            <h3 className="mt-[30px] mb-[14px] text-[22px] leading-[1.25] text-[#e0f4e4] lg:text-[24px]">Processos demorados</h3>
            <p className="text-[15px] leading-[1.7] text-[#bcd6c6]">
              A conversão de benefícios costuma exigir vários aplicativos, etapas e processos pouco práticos para o usuário.
            </p>
          </article>

          <article className="min-h-[230px] rounded-[20px] border border-[rgba(224,244,228,0.18)] bg-[#1b3d31] p-[28px] lg:p-[30px]">
            <h3 className="mt-[30px] mb-[14px] text-[22px] leading-[1.25] text-[#e0f4e4] lg:text-[24px]">Falta de integração</h3>
            <p className="text-[15px] leading-[1.7] text-[#bcd6c6]">
              Os sistemas de recompensa atuais raramente se conectam diretamente com serviços de mobilidade urbana.
            </p>
          </article>

          <article className="min-h-[230px] rounded-[20px] border border-[rgba(224,244,228,0.18)] bg-[#1b3d31] p-[28px] lg:p-[30px]">
            <h3 className="mt-[30px] mb-[14px] text-[22px] leading-[1.25] text-[#e0f4e4] lg:text-[24px]">Necessidade de mobilidade acessível</h3>
            <p className="text-[15px] leading-[1.7] text-[#bcd6c6]">
              O transporte faz parte da rotina das pessoas, mas ainda existem poucas soluções que utilizam benefícios digitais para facilitar esse acesso.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}