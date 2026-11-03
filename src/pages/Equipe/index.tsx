import { useEffect } from "react";
import { integrantes } from "./integrantes";
import IntegranteCard from "./IntegranteCard";
 
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
<IntegranteCard
                key={integrante.rm}
                integrante={integrante}
              />
            ))}
</div>
</section>
</div>
</main>
  );
}