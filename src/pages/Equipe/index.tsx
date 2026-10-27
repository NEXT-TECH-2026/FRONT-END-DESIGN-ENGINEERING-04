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
    <section className="bg-[#efefef] min-h-screen px-6 py-16">
      <div className="mx-auto mb-16 max-w-4xl text-center">

        <h1 className="mb-6 text-5xl font-bold text-[#1e4d4d]">
          Nossa Equipe
        </h1>

        <p className="text-lg leading-relaxed text-[#555]">
          Conheça os membros por trás do Soul Pass.
          Unidos pela paixão em transformar a mobilidade urbana
          em uma experiência inteligente, conectada e sustentável
          para o futuro das cidades.
        </p>

      </div>
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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