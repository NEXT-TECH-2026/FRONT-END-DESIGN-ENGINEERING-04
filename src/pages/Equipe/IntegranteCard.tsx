import type { Integrante } from "./integrantes";
 
interface IntegranteCardProps {
  integrante: Integrante;
}
 
export default function IntegranteCard({
  integrante,
}: IntegranteCardProps) {
  return (
<article className="group flex w-full flex-col items-center rounded-[26px] border border-[#e0e9e3] bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b7d5c4] hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">
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
  );
}