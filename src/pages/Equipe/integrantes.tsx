import allex from "../../img/Allex-foto.png";
import igor from "../../img/Foto-Igor.jpg";
import mateus from "../../img/Mateus-foto.jpeg";
import murilo from "../../img/Murilo-foto.jpeg";
import roberto from "../../img/Roberto-foto-2.png";
 
export interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  linkedin: string;
  github: string;
}
 
export const integrantes: Integrante[] = [
  {
    nome: "Allex Oliveira Costa",
    rm: "571648",
    turma: "1TDSPO",
    foto: allex,
    linkedin: "https://www.linkedin.com/in/allex-oliveiraa/",
    github: "https://github.com/allex1930",
  },
  {
    nome: "Igor Cinacchi Gracetti",
    rm: "573708",
    turma: "1TDSPO",
    foto: igor,
    linkedin: "https://www.linkedin.com/in/igor-gracetti-3a7657325/",
    github: "https://github.com/Gracetti",
  },
  {
    nome: "Mateus Isaque Maranhão",
    rm: "571365",
    turma: "1TDSPO",
    foto: mateus,
    linkedin: "https://www.linkedin.com/in/mateus-isaque/",
    github: "https://github.com/Mateus-Isaque",
  },
  {
    nome: "Murilo Santos da Cruz",
    rm: "572704",
    turma: "1TDSPO",
    foto: murilo,
    linkedin: "https://www.linkedin.com/in/murilo-cruz-b808363b3/",
    github: "https://github.com/MuriloSCruzz",
  },
  {
    nome: "Roberto Yong Sung Park",
    rm: "572229",
    turma: "1TDSPO",
    foto: roberto,
    linkedin: "https://www.linkedin.com/in/roberto-park-23063a184",
    github: "https://github.com/ropark-tech",
  },
];