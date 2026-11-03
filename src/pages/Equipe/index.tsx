import { useEffect } from "react";

import allex from "../../img/Allex-foto.png";
import igor from "../../img/Foto-Igor.jpg";
import mateus from "../../img/Mateus-foto.jpeg";
import murilo from "../../img/Murilo-foto.jpeg";
import roberto from "../../img/Roberto-foto-2.png";

interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  linkedin: string;
  github: string;
}

const integrantes: Integrante[] = [
  {
    nome: "Allex Oliveira Costa",
    rm: "571648",
    turma: "1TDSPO",
    foto: allex,
    linkedin: "https://www.linkedin.com/in/allex-oliveiraa/",
    github: "https://github.com/allex1930"
  },
  {
    nome: "Igor Cinacchi Gracetti",
    rm: "573708",
    turma: "1TDSPO",
    foto: igor,
    linkedin: "https://www.linkedin.com/in/igor-gracetti-3a7657325/",
    github: "https://github.com/Gracetti"
  },
  {
    nome: "Mateus Isaque Maranhão",
    rm: "571365",
    turma: "1TDSPO",
    foto: mateus,
    linkedin: "https://www.linkedin.com/in/mateus-isaque/",
    github: "https://github.com/Mateus-Isaque"
  },
  {
    nome: "Murilo Santos da Cruz",
    rm: "572704",
    turma: "1TDSPO",
    foto: murilo,
    linkedin: "https://www.linkedin.com/in/murilo-cruz-b808363b3/",
    github: "https://github.com/MuriloSCruzz"
  },
  {
    nome: "Roberto Yong Sung Park",
    rm: "572229",
    turma: "1TDSPO",
    foto: roberto,
    linkedin: "https://www.linkedin.com/in/roberto-park-23063a184",
    github: "https://github.com/ropark-tech"
  }
];

export default function Equipe() {

  useEffect(() => {
    document.title = "SoulPass - Equipe";
  }, []);

  return (
<main className="min-h-screen bg-[#f6f8f6] px-5 py-12 sm:px-8 lg:py-20">
<div className="mx-auto max-w-6xl">
 
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
        {integrantes.map((integrante) => (
          <div
            key={integrante.rm}
            className="rounded-2xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <img
              src={integrante.foto}
              alt={`Foto de ${integrante.nome}`}
              className="mx-auto mb-5 h-32 w-32 rounded-xl object-cover"
            />

            <h2 className="mb-2 text-xl font-bold text-[#1e4d4d]">
              {integrante.nome}
            </h2>
            <p className="mb-5 text-gray-500">
              RM: {integrante.rm}<br />
              Turma: {integrante.turma}
            </p>
            <div className="flex justify-center gap-4">

              <a
                href={integrante.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#1e4d4d] transition hover:bg-[#1e4d4d] hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href={integrante.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#1e4d4d] transition hover:bg-[#1e4d4d] hover:text-white"
              >
                GitHub
              </a>

            </div>

          </div>
        ))}
      </section>

    </section>
  );
}