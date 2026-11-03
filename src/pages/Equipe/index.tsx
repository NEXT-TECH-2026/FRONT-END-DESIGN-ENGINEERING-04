
import { useEffect } from "react";
import { integrantes } from "./integrantes";

export default function Equipe() {
  useEffect(() => {
    document.title = "SoulPass - Equipe";
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f8f6] px-5 py-12 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Apresentação */}
        <section className="mb-12 rounded-[30px] border border-[#d7e8dc] bg-[#e7f1eb] px-7 py-12 text-center sm:px-12 lg:py-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#598579]">
            SoulPass • Nossa equipe
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#204c40] sm:text-5xl">
            Pessoas que transformam ideias em soluções.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#587168]">
            Somos uma equipe de estudantes de Análise e Desenvolvimento
            de Sistemas da FIAP, unidos pelo propósito de transformar
            a mobilidade urbana por meio da tecnologia, inovação
            e sustentabilidade.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#448577]" />
        </section>

        {/* Integrantes */}
        <section aria-labelledby="equipe-titulo">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#598579]">
              Quem faz acontecer
            </span>

            <h2
              id="equipe-titulo"
              className="mt-3 text-3xl font-semibold text-[#204c40] sm:text-4xl"
            >
              Conheça nosso time
            </h2>

            <p className="mt-3 text-base text-[#71847b]">
              Os integrantes responsáveis pelo desenvolvimento do SoulPass.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {integrantes.map((integrante) => (
              <article
                key={integrante.rm}
                className="group flex w-full flex-col items-center rounded-[26px] border border-[#e0e9e3] bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b7d5c4] hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
              >
                <div className="mb-6 rounded-[24px] bg-[#e7f1eb] p-2">
                  <img
                    src={integrante.foto}
                    alt={`Foto de ${integrante.nome}`}
                    className="h-36 w-36 rounded-[18px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="min-h-[3rem] text-xl font-semibold leading-snug text-[#204c40]">
                  {integrante.nome}
                </h3>

                <span className="mt-3 rounded-full bg-[#edf5ef] px-4 py-2 text-xs font-semibold text-[#337465]">
                  FIAP • {integrante.turma}
                </span>

                <p className="mt-4 text-sm text-[#71847b]">
                  RM: {integrante.rm}
                </p>

                <div className="mt-auto flex w-full justify-center gap-3 pt-7">
                  <a
                    href={integrante.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${integrante.nome}`}
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-[#cbded2] bg-[#f6faf7] px-4 py-3 text-sm font-semibold text-[#28584b] transition-colors hover:bg-[#e7f1eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#448577]"
                  >
                    LinkedIn
                  </a>

                  <a
                    href={integrante.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${integrante.nome}`}
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-[#28584b] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#337465] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#448577]"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}