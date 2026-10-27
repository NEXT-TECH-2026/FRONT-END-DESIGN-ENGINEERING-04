import { useState } from "react";
import { useEffect } from "react";

export default function Faq() {

  useEffect(() => {
            document.title = "SoulPass - Faq";
  }, []);

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questions = [
    {
      question: "Como funciona a Soul Pass?",
      answer:
        "A Soul Pass permite que usuários acumulem pontos e troquem por créditos de transporte público.",
    },
    {
      question: "Como posso acumular pontos?",
      answer:
        "Os pontos são acumulados através das atividades realizadas dentro da plataforma.",
    },
    {
      question: "Como os vouchers funcionam?",
      answer:
        "Os vouchers possuem códigos únicos e podem ser utilizados para transporte público.",
    },
    {
      question: "A plataforma possui segurança?",
      answer:
        "Sim. O sistema possui mecanismos de segurança contra fraudes.",
    },
    {
      question: "Quem pode utilizar a Soul Pass?",
      answer:
        "A plataforma pode ser utilizada por estudantes, trabalhadores e usuários do transporte público em geral.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(
      openQuestion === index ? null : index
    );
  };

  return (
    <section className="mx-auto my-20 flex w-[80%] flex-col gap-8 pb-28">
      <h1 className="mb-16 pt-28 text-center text-[4rem] font-['Archivo_Black',sans-serif] text-[var(--text-primary)]"
      >Perguntas Frequentes</h1>

      <div className="flex flex-col gap-[6rem]">
        {questions.map((item, index) => (
        <div
          key={index}
          className="rounded-[1rem] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
            <button
              className="w-full cursor-pointer rounded-[1rem] border-none bg-white p-8 text-left text-[1.8rem] font-bold font-['Archivo_Black',sans-serif] text-[var(--cabecalho-color)] transition duration-300 hover:scale-[1.01]"
              type="button"
              aria-expanded={openQuestion === index}
              aria-controls={`resposta-${index}`}
              onClick={() => toggleQuestion(index)}>
              {item.question}
            </button>

            {openQuestion === index && (
              <div id={`resposta-${index}`} className="mt-4 rounded-[1rem] border-2 border-[var(--primary-color)] bg-white p-8">
                <p
                  className="text-[1.6rem] leading-[2.5rem] text-[var(--text-primary)]"
                >{item.answer}
                </p>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}