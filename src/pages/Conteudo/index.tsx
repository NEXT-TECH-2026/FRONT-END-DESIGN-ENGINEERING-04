import { Link } from "react-router";
import { useEffect } from "react";
import imagem_conteudo from "../../img/imagem_conteudo.png";

export default function Conteudo(){

    useEffect(() => {
          document.title = "SoulPass - Conteudo";
    }, []);

    return (
    
    <section className="bg-[#f3f3f3] text-[#143638]">

      {/* === Conteudo sobre direcionando a simulação da solução === */}
      <section  className="flex flex-col items-center justify-between gap-[60px] px-[20px] py-[50px] md:px-[40px] lg:flex-row lg:px-[90px] lg:pt-[70px] lg:pb-[90px]">
        <div className="max-w-full lg:max-w-[520px]">
          <span className="mb-[24px] inline-block rounded-[30px] bg-[#e7eceb] px-[18px] py-[8px] text-[11px] font-bold tracking-[1px] text-[#6e8b89]">SUSTENTABILIDADE URBANA</span>
          <h1 className="mb-[26px] text-[36px] leading-[0.95] text-[#143638] md:text-[44px] lg:text-[72px] ">Mobilidade com recompensa</h1>
          <p className="mb-[30px] text-[16px] leading-[1.7] text-[#375457] lg:text-[18px]">
            Transforme seus pontos em créditos de transporte de forma rápida, prática e inteligente. O SoulPass conecta tecnologia e mobilidade urbana para tornar seus benefícios mais úteis no dia a dia, facilitando o acesso ao transporte e criando uma experiência mais integrada, sustentável e acessível ao usuário.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/solucao-simulacao"
              className="inline-block rounded-[999px] bg-[#5e8f8e] px-[28px] py-[14px] text-[15px] font-semibold text-white no-underline transition duration-300 hover:bg-[#4d7b7a]"
            >Simular Agora</Link>
          </div>
        </div>
        <div className="relative w-full max-w-full lg:max-w-[720px]">
          <img 
            className="block h-auto w-full object-cover lg:h-[430px]"
            src={imagem_conteudo}
            alt="Mobilidade urbana sustentável"/>
        </div>
      </section>
      
      {/* === conteudo sobre fluxo de conversão e resgate === */}
      <section className="bg-[#f8f8f8] px-[20px] py-[90px] md:px-[40px] lg:px-[90px]">
        <div className="mb-[55px] text-center">
          <h2 className="mb-[14px] text-[38px] text-[#111] lg:text-[52px]">Fluxo Inteligente</h2>
          <p className="mx-auto max-w-[500px] text-[16px] leading-[1.6] text-[#666]">
            Transformando pontos em créditos de transporte de forma simples e prática.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[24px]">
          <article className="min-h-[250px] w-full max-w-[300px] rounded-[20px] bg-[#efefef] p-[28px]">
            <div className="mb-[36px] flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[rgba(84,135,135,0.18)] text-[24px] font-bold">1</div>
            <h3 className="mb-[14px] text-[26px]">Acumule</h3>
            <p className="text-[15px] leading-[1.6]">
              Utilize parceiros da Soul Up e acumule pontos que poderão ser convertidos em benefícios para sua mobilidade.
            </p>
          </article>
          
          <article className="min-h-[250px] w-full max-w-[300px] rounded-[20px] bg-[#4f7877] p-[28px] text-white shadow-[0_15px_30px_rgba(0,0,0,0.15)] lg:translate-y-[18px]">
            <div className="mb-[36px] flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.16)] text-[24px] font-bold">2</div>
            <h3 className="mb-[14px] text-[26px]">Converta</h3>
            <p className="text-[15px] leading-[1.6]">
              Transforme seus pontos em vouchers de transporte de forma rápida e integrada ao SoulPass.
            </p>
          </article>

          <article className="min-h-[250px] w-full max-w-[300px] rounded-[20px] bg-[#efefef] p-[28px]">
            <div className="mb-[36px] flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[rgba(84,135,135,0.18)] text-[24px] font-bold">3</div>
            <h3 className="mb-[14px] text-[26px]">Utilize</h3>
            <p className="text-[15px] leading-[1.6]">
              Use os vouchers gerados para facilitar seus deslocamentos no transporte urbano.
            </p>
          </article>
        </div>
      </section>

      {/* === Conteudo sobre os desafios da mobilidade urbana === */}
      <section className="bg-[#101818] px-[20px] py-[80px] text-white md:px-[40px] lg:px-[90px]">
        <div className="mb-[40px] flex flex-col items-start justify-between gap-[30px] lg:flex-row">
          <div>
            <h2 className="mb-[14px] max-w-full text-[40px] leading-[0.95] text-white lg:max-w-[520px] lg:text-[52px]">Desafios da mobilidade urbana</h2>
            <p className="max-w-full text-[16px] leading-[1.5] text-[#d6dddd] lg:max-w-[480px]">Desafios da mobilidade que o SoulPass busca simplificar.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
          <article className="min-h-[230px] rounded-[28px] border-[rgba(255,255,255,0.08)] bg-[#202929] p-[28px] lg:p-[30px]">
            <h3 className="mb-[14px] text-[22px] leading-[1.25] text-white lg:text-[24px]">Pontos sem utilidade no dia a dia</h3>
            <p className="text-[15px] leading-[1.7] text-[#dbe3e2]">
              Muitos usuários acumulam pontos em plataformas digitais sem conseguir transformá-los em benefícios realmente úteis para sua rotina.
            </p>
          </article>

          <article className="min-h-[230px] rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[#202929] p-[28px] lg:p-[30px]">
            <h3 className="mb-[14px] text-[22px] leading-[1.25] text-white lg:text-[24px]">Processos demorados</h3>
            <p className="text-[15px] leading-[1.7] text-[#dbe3e2]">
              A conversão de benefícios costuma exigir vários aplicativos, etapas e processos pouco práticos para o usuário.
            </p>
          </article>

          <article className="min-h-[230px] rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[#202929] p-[28px] lg:p-[30px]">
            <h3 className="mb-[14px] text-[22px] leading-[1.25] text-white lg:text-[24px]">Falta de integração</h3>
            <p className="text-[15px] leading-[1.7] text-[#dbe3e2]">
              Os sistemas de recompensa atuais raramente se conectam diretamente com serviços de mobilidade urbana.
            </p>
          </article>

          <article className="min-h-[230px] rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[#202929] p-[28px] lg:p-[30px]">
            <h3 className="mb-[14px] text-[22px] leading-[1.25] text-white lg:text-[24px]">Necessidade de mobilidade acessível</h3>
            <p className="text-[15px] leading-[1.7] text-[#dbe3e2]">
              O transporte faz parte da rotina das pessoas, mas ainda existem poucas soluções que utilizam benefícios digitais para facilitar esse acesso.
            </p>
            </article>
        </div>
      </section>
    </section>
  );
}