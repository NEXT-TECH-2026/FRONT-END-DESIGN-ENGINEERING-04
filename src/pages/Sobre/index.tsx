import { useEffect } from "react"
import bus_pic from "../../img/bus_pic.jpg"
import sobre_bus from "../../img/sobre-bus.jpg"
import sobre_trem from "../../img/sobre-trem.jpg"
import sobre_metro from "../../img/sobre-metro.jpg"
import roadmap from "../../img/roadmap.png"
import frontEndIcon from "../../img/frontEndIcon.png"
import html5Icon from "../../img/html5Icon.png"
import css3Icon from "../../img/css3-icon.png"
import javaIcon from "../../img/javaIcon.png"
import jsIcon from "../../img/javascriptIcon.png"
import pythonIcon from "../../img/pythonIcon.png"
import backEndIcon from "../../img/back-end-icon.png"
import metodologiasIcon from "../../img/metodologias-icon.png"
import oracleIcon from "../../img/oracle-icon.png"
import agileIcon from "../../img/agil-icon.png"
import futureIcon from "../../img/futuro-icon.png"

export default function Sobre(){

  useEffect(() => {
      document.title = "SoulPass - Sobre";
  }, []);

    return (
    <>
    {/* === seção sobre nos, contextualizando o usuario === */}
      <section className="mx-auto my-20 w-[94%] box-border rounded-[3rem] bg-[#F5F7F7] p-16 max-md:my-12 max-md:w-[95%] max-md:rounded-[2rem] max-md:p-8 max-[480px]:rounded-[1.5rem] max-[480px]:p-6">
        <h1 
            className="mb-12 font-[Georgia] font-bold text-[4rem] text-[#243636] max-md:w-full max-md:pt-0 max-md:text-[2.8rem] max-[480px]:text-[2.2rem]"
        >Sobre Nos</h1>
        <div className="flex items-start gap-12 max-md:flex-col max-md:items-center max-md:gap-8">
          <div className="flex-[2] space-y-4 text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#3a5353] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem]">
            <p >
              Nossa plataforma une tecnologia, sustentabilidade e impacto social para transformar pequenas atitudes em grandes mudanças para o meio ambiente.
              </p>
            <p>
              Por meio de um sistema inteligente de recompensas, incentivamos ações sustentáveis no dia a dia. A cada atitude consciente, os usuários acumulam pontos que podem ser convertidos em benefícios reais, como passagens de transporte público.
              </p>
            <p>
              Mais do que recompensar comportamentos positivos, buscamos promover uma mobilidade urbana mais acessível, eficiente e sustentável, incentivando o uso do transporte coletivo e contribuindo diretamente para a redução da emissão de gases poluentes, como o monóxido de carbono.
              </p>
            <p>
              Acreditamos que a transformação das cidades começa pelas escolhas das pessoas. Por isso, criamos um ecossistema inovador que conecta cidadãos, tecnologia e responsabilidade ambiental em uma única experiência.
              </p>
            <p>
              Nosso propósito é construir cidades mais inteligentes, modernas e sustentáveis, onde cada ação consciente gera impacto positivo para a sociedade e para o planeta.</p>
          </div>
          <div className="flex flex-1 justify-center max-md:w-full">
            <img
              className="w-full max-w-[350px] rounded-[2rem] object-cover max-md:max-w-full"
              src={bus_pic}
              alt="Ônibus do transporte público em área urbana representando mobilidade sustentável."
            />
          </div>
        </div>
      </section> 

      {/* === Seção como funciona, apresentando o funcionamento da solução === */}
      <section className="mx-auto my-20 box-border w-[95%] rounded-[5rem] bg-[#507e7e] p-16 max-md:my-12 max-md:w-[95%] max-md:rounded-[2rem] max-md:p-8 max-[480px]:rounded-[1.5rem] max-[480px]:p-6">
        <h1 
          className="w-1/2 pb-8 pt-16 font-[Georgia] font-bold text-[4rem] text-white max-md:w-full max-md:mb-8 max-md:pt-0 max-md:text-[2.8rem] max-[480px]:text-[2.2rem]"
        >Como Nossa Plataforma Funciona?</h1>
        <div className="w-full text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#E8E8E8] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem]">
          <p>
            Nossa plataforma foi criada para incentivar hábitos mais sustentáveis e contribuir para a redução da emissão de carbono na atmosfera, promovendo o uso consciente do transporte público.</p>
          <p>
            O funcionamento é simples os usuários realizam atividades e interações dentro da plataforma que geram pontos acumulativos. Esses pontos podem ser convertidos em créditos para transporte público, proporcionando mais economia, praticidade e incentivo à mobilidade sustentável.</p>
        </div>
        <div>
          <h2 className="w-1/2 pb-8 pt-16 font-[Georgia] font-bold text-[3rem] text-[#F2F2F2] max-md:w-full max-md:pt-8 max-md:text-[2.2rem] max-[480px]:text-[1.8rem]"
          >Como ganhar pontos?</h2>
          <p
            className="w-full text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#E8E8E8] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem]"
          >Os pontos podem ser obtidos através de diferentes ações disponibilizadas pela plataforma, como:</p>
          <ul className="mt-12 mb-12 flex flex-wrap gap-8 list-none p-0">
            <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
              <h3 className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]"
              >Participação em campanhas</h3>
              <p className="w-full text-[1.6rem] font-['Archivo_Black',sans-serif] text-justify text-[#666] max-md:text-[1.5rem] max-[480px]:text-[1.4rem]">
                Os usuários poderão participar de campanhas sustentáveis promovidas pela plataforma, realizando ações e desafios que incentivam hábitos mais conscientes e geram pontos como recompensa.</p>
            </li>
            <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
              <h3 className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]"
              >Realização de tarefas e atividades</h3>
              <p className="w-full text-[1.6rem] font-['Archivo_Black',sans-serif] text-justify text-[#666] max-md:text-[1.5rem] max-[480px]:text-[1.4rem]">
                A plataforma disponibilizará tarefas e atividades interativas que incentivam o engajamento dos usuários com práticas sustentáveis no dia a dia.</p>
            </li>
            <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
              <h3 className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]"
              >Engajamento com parceiros</h3>
              <p className="w-full text-[1.6rem] font-['Archivo_Black',sans-serif] text-justify text-[#666] max-md:text-[1.5rem] max-[480px]:text-[1.4rem]">
                Empresas e instituições parceiras poderão oferecer benefícios, desafios e oportunidades para que os usuários acumulem pontos através da interação com seus serviços e iniciativas.</p>
            </li>
            <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
              <h3 className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]"
              >Uso de serviços integrados</h3>
              <p className="w-full text-[1.6rem] font-['Archivo_Black',sans-serif] text-justify text-[#666] max-md:text-[1.5rem] max-[480px]:text-[1.4rem]">
                Os usuários também poderão ganhar pontos ao utilizar serviços integrados à plataforma, promovendo uma experiência mais conectada, prática e sustentável.
              </p>
            </li >
            <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
              <h3 className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]"
              >Participação em iniciativas sustentáveis</h3>
              <p className="w-full text-[1.6rem] font-['Archivo_Black',sans-serif] text-justify text-[#666] max-md:text-[1.5rem] max-[480px]:text-[1.4rem]">
                A plataforma incentivará a participação em ações voltadas à sustentabilidade, mobilidade urbana e conscientização ambiental, recompensando atitudes positivas para a sociedade e o meio ambiente.
              </p>
            </li>
            <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
              <h3 className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]">Entre outras oportunidades disponíveis no sistema</h3>
              <p className="w-full text-[1.6rem] font-['Archivo_Black',sans-serif] text-justify text-[#666] max-md:text-[1.5rem] max-[480px]:text-[1.4rem]">
                Além das funcionalidades principais, a plataforma contará com novas oportunidades e recursos que permitirão aos usuários continuarem acumulando pontos e participando ativamente do ecossistema SoulPass.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="w-1/2 pb-8 pt-16 font-[Georgia] font-bold text-[3rem] text-[#F2F2F2] max-md:w-full max-md:pt-8 max-md:text-[2.2rem] max-[480px]:text-[1.8rem]">Como usar os pontos?</h2>
          
          <p className="w-full text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#E8E8E8] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem]">
          Os pontos acumulados podem ser trocá-los por passagens nos principais de transporte público.
          </p>
          <ul className="mt-12 mb-12 flex flex-wrap gap-8 list-none p-0">
           <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
             <h3 
              className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]"
             >Ônibus</h3>
             <div className="flex justify-center">
                <img
                  className="w-full max-w-[350px] rounded-[2rem] object-cover max-md:max-w-full"
                  src={sobre_bus}
                  alt="imagem representando os onibus nos transportes publicos"/>
              </div>
            </li>
            <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
              <h3 
                className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]"
              >Trens</h3>
              <div>
                <img
                  className="w-full max-w-[350px] rounded-[2rem] object-cover max-md:max-w-full"
                  src={sobre_trem}
                  alt="imagem representando os trens nos transportes publicos"/>
              </div>
            </li>
            <li className="flex w-[calc(33.333%-2rem)] flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:w-full max-md:p-8 max-[480px]:p-6">
              <h3 
                className="w-full font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:text-[1.8rem] max-[480px]:text-[1.6rem]"
              >Metrôs</h3>
              <div>
                <img
                  className="w-full max-w-[350px] rounded-[2rem] object-cover max-md:max-w-full"
                  src={sobre_metro}
                  alt="imagem representando os metros nos transportes publicos"/>
              </div>
            </li>
          </ul>
          <p className="w-full text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#E8E8E8] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem]">
            Todo o processo é rápido, simples e digital, permitindo que os usuários utilizem seus benefícios de maneira prática, segura e sustentável.
          </p>
        </div>
      </section>

      {/* === Seção mostrando as tecnologias usadas para o desenvolvimento da solução === */}
      <section className="mx-auto my-20 w-[94%] rounded-[3rem] bg-[#F5F7F7] p-16 max-md:my-12 max-md:w-[95%] max-md:rounded-[2rem] max-md:p-8 max-[480px]:rounded-[1.5rem] max-[480px]:p-6">
        <h1 className="mb-12 font-[Georgia] font-bold text-[4rem] text-[#243636] max-md:mb-8 max-md:text-[2.8rem] max-[480px]:text-[2.2rem]"
        >Tecnologias</h1>
        <p className="w-full text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#3a5353] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem]">
          Tecnologias usados no projeto.
        </p>
        <div>
          <ul className="mt-12 mb-12 grid grid-cols-1 gap-8 list-none p-0">
            <li className="flex flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 max-md:p-8 max-[480px]:p-6">
              <h3 className="flex w-full items-center gap-2 font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:flex-wrap max-md:text-[1.8rem] max-[480px]:text-[1.6rem]">
                <img
                  className="h-[50px] w-[50px]"
                  src={frontEndIcon}
                  alt="imagem representando o front-end"/>
                Site - Front-End
              </h3>
              <ul className="flex flex-wrap items-center gap-8 list-none p-0 max-md:flex-col max-md:gap-6">
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  <img
                    className="h-[50px] w-[50px] max-md:h-10 max-md:w-10 max-[480px]:h-8 max-[480px]:w-8"           
                    src={html5Icon}
                    alt="imagem da linguagem de programação html5"/>
                  HTML 5
                </li>
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  <img
                    className="h-[50px] w-[50px] max-md:h-10 max-md:w-10 max-[480px]:h-8 max-[480px]:w-8"
                    src={css3Icon}
                    alt="imagem da linguagem de programação css3"/>
                  CSS 3
                </li>
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  <img
                    className="h-[50px] w-[50px] max-md:h-10 max-md:w-10 max-[480px]:h-8 max-[480px]:w-8"
                    src={jsIcon}
                    alt="imagem da linguagem de programação JavaScript"/>
                  JavaScript
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:p-8 max-[480px]:p-6">
              <h3 className="flex w-full items-center gap-2 font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:flex-wrap max-md:text-[1.8rem] max-[480px]:text-[1.6rem]">
                <img
                  className="h-[50px] w-[50px]"
                  src={backEndIcon}
                  alt="imagem representando o back-end"/>
                  Sistema - Back-End
              </h3>
              <ul className="flex flex-wrap items-center gap-8 p-0 m-0 list-none max-md:flex-col max-md:gap-6">
                <li  className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  <img
                    className="h-[50px] w-[50px] max-md:h-10 max-md:w-10 max-[480px]:h-8 max-[480px]:w-8"
                    src={javaIcon}
                    alt="imagem da linguagem de programação java"/>
                  Java
                </li>
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  <img
                    className="h-[50px] w-[50px] max-md:h-10 max-md:w-10 max-[480px]:h-8 max-[480px]:w-8"
                    src={pythonIcon}
                    alt="imagem da linguagem de programação python"/>
                    Python
                </li>
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  <img
                    className="h-[50px] w-[50px] max-md:h-10 max-md:w-10 max-[480px]:h-8 max-[480px]:w-8"
                    src={oracleIcon}
                    alt="imagem da empresa oracle representando a ferramenta data modeler"/>
                    Oracle Data Modeler
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:p-8 max-[480px]:p-6">
              <h3 className="flex w-full items-center gap-2 font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:flex-wrap max-md:text-[1.8rem] max-[480px]:text-[1.6rem]">
                <img
                  className="h-[50px] w-[50px]"
                  src={metodologiasIcon}
                  alt="imagem representando as metodologias"/>
                  Metodologias e Organização
              </h3>
              <ul className="flex flex-wrap items-center gap-8 p-0 m-0 list-none max-md:flex-col max-md:gap-6">
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  <img
                    className="h-[50px] w-[50px] max-md:h-10 max-md:w-10 max-[480px]:h-8 max-[480px]:w-8"
                    src={agileIcon}
                    alt="imagem exemplificando o uso da metodologia agil"/>
                    Metodologia Agil
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-8 rounded-[1.5rem] border border-[#d7d6d6] bg-white p-12 box-border max-md:p-8 max-[480px]:p-6">
              <h3 className="flex w-full items-center gap-2 font-[Georgia] font-bold text-[2rem] text-[#0A383E] max-md:flex-wrap max-md:text-[1.8rem] max-[480px]:text-[1.6rem]">
                <img
                  className="h-[50px] w-[50px]"
                  src={futureIcon}
                  alt="imagem representando as futuras integrações"/>
                  Futuras Integrações
              </h3>
              <ul className="flex list-disc flex-col gap-8 p-0 m-0">
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  Integração com os sistemas dos Metros, Trens e Onibus
                </li>
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  Integração com os sistemas e banco de dados da SPTrans
                </li>
                <li className="flex items-center gap-2 text-[2rem] text-[#3a5353] max-md:text-[1.6rem] max-[480px]:text-[1.4rem]">
                  Integração com os sistemas de recarga da SPTrans
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>


      {/* === apresentação do roadmap proposto para as etapas do projeto === */}
      <section className="mx-auto my-20 box-border w-[95%] rounded-[5rem] bg-[#507e7e] p-16 max-md:my-12 max-md:w-[95%] max-md:rounded-[2rem] max-md:p-8 max-[480px]:rounded-[1.5rem] max-[480px]:p-6">
            <div>
              <h1 
                className="mb-8 pt-16 font-[Georgia] font-bold text-[4rem] text-white max-md:w-full max-md:mb-8 max-md:pt-0 max-md:text-[2.8rem] max-[480px]:text-[2.2rem]"
              >Roadmap</h1>
                <p className="w-full text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#E8E8E8] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem] ">
                  A SoulPass foi idealizada para evoluir gradualmente, ampliando funcionalidades, integrações e impacto sustentável ao longo do desenvolvimento da plataforma.
                </p>
                <div className="mt-16 mb-16 flex justify-center max-md:mt-8 max-md:mb-8">
                    <img
                      className="w-full max-w-full rounded-[2rem] object-cover"
                      src={roadmap}
                      alt="Roadmap da plataforma SoulPass contendo as etapas de planejamento, desenvolvimento, implementação, integração e expansão do sistema."/>
                </div>
            </div>
        </section>

      {/* === Seção apresentando a missão da Soul Pass === */}
        <section className="mx-auto my-20 box-border w-[94%] rounded-[3rem] bg-[#F5F7F7] p-16 max-md:my-12 max-md:w-[95%] max-md:rounded-[2rem] max-md:p-8 max-[480px]:rounded-[1.5rem] max-[480px]:p-6">
            <div>
                <h1 
                  className="mb-12 font-[Georgia] font-bold text-[4rem] text-[#243636] max-md:w-full max-md:mb-8 max-md:pt-0 max-md:text-[2.8rem] max-[480px]:text-[2.2rem]"
                >Nossa Missão</h1>
                <p 
                  className="w-full text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#3a5353] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem]">
                    Nossa missão é incentivar a adoção de práticas mais sustentáveis no dia a dia, estimulando o uso do
                    transporte público como alternativa para reduzir a emissão de gases poluentes e o impacto ambiental
                    causado pelos deslocamentos urbanos.
                </p>
                <p 
                  className="w-full text-[2rem] font-['Archivo_Black',sans-serif] leading-[2.5rem] [word-spacing:1px] indent-[2em] text-justify text-[#3a5353] max-md:text-[1.6rem] max-md:leading-[2.2rem] max-md:indent-[1.2rem] max-[480px]:text-[1.4rem] max-[480px]:leading-[2rem] max-[480px]:indent-[1rem]">
                    Acreditamos que pequenas ações podem gerar grandes mudanças. Ao transformar participação e
                    engajamento em benefícios reais, contribuímos para cidades mais sustentáveis, acessíveis e com
                    melhor qualidade de vida para todos.
                </p>
            </div>
        </section>
    </>
  );
}