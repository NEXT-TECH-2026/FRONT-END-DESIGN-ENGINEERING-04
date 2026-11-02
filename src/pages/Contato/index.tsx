
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormularioContato = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const campo =
  "w-full rounded-xl border border-[#d3e2da] bg-white px-4 py-3 text-sm text-[#254c43] outline-none transition placeholder:text-[#94a69e] focus:border-[#448577] focus:ring-2 focus:ring-[#448577]/15";

export default function Contato() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormularioContato>();

  useEffect(() => {
    document.title = "SoulPass - Contato";
  }, []);

  function enviarFormulario() {
    setMensagemEnviada(true);
  }

  return (
    <main className="bg-[#f6f8f6] px-5 py-12 sm:px-8 lg:py-20">
      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">

        {/* Apresentação */}
        <div className="flex flex-col justify-between rounded-[30px] border border-[#d7e8dc] bg-[#e7f1eb] p-8 sm:p-10 lg:p-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#598579]">
              SoulPass • Contato
            </span>

            <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-[#204c40] sm:text-5xl">
              Vamos
              <br />
              conversar?
            </h1>

            <p className="mt-6 max-w-sm text-base leading-8 text-[#587168]">
              Tem alguma dúvida, sugestão ou gostaria de
              conhecer melhor o SoulPass?
              Nossa equipe está aqui para ouvir você.
            </p>
          </div>

          <div className="mt-16 border-t border-[#c9ded1] pt-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#337465]">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8A8.5 8.5 0 0 1 12.5 20a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold text-[#28584b]">
                  Sua opinião importa
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#668076]">
                  Cada sugestão nos ajuda a construir uma
                  experiência melhor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="rounded-[30px] border border-[#e0e9e3] bg-white p-6 shadow-sm sm:p-9 lg:p-11">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#204c40]">
              Envie sua mensagem
            </h2>
            <p className="mt-2 text-sm text-[#71847b]">
              Preencha os campos abaixo para continuar.
            </p>
          </div>

          {mensagemEnviada && (
            <div
              role="status"
              aria-live="polite"
              className="mb-6 rounded-xl border border-[#bbdfc9] bg-[#ecf8ef] p-4 text-sm leading-6 text-[#276747]"
            >
              Formulário validado com sucesso! Esta funcionalidade está em demonstração e o envio de mensagens ainda não está disponível.
            </div>
          )}

          <form
            noValidate
            onChange={() => setMensagemEnviada(false)}
            onSubmit={handleSubmit(
              enviarFormulario,
              () => setMensagemEnviada(false)
            )}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-sm font-medium text-[#355b50]"
                >
                  Nome completo
                </label>

                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  className={campo}
                  aria-invalid={!!errors.nome}
                  aria-describedby={
                    errors.nome ? "erro-nome" : undefined
                  }
                  {...register("nome", {
                    required: "O nome é obrigatório.",
                    minLength: {
                      value: 3,
                      message: "Mínimo de 3 caracteres.",
                    },
                  })}
                />

                {errors.nome && (
                  <p id="erro-nome" role="alert" className="mt-2 text-xs text-red-600">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#355b50]"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className={campo}
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? "erro-email" : undefined
                  }
                  {...register("email", {
                    required: "O e-mail é obrigatório.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Digite um e-mail válido.",
                    },
                  })}
                />

                {errors.email && (
                  <p id="erro-email" role="alert" className="mt-2 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="assunto"
                className="mb-2 block text-sm font-medium text-[#355b50]"
              >
                Assunto
              </label>

              <input
                id="assunto"
                type="text"
                placeholder="Sobre o que deseja falar?"
                className={campo}
                aria-invalid={!!errors.assunto}
                aria-describedby={
                  errors.assunto ? "erro-assunto" : undefined
                }
                {...register("assunto", {
                  required: "O assunto é obrigatório.",
                  minLength: {
                    value: 3,
                    message: "Mínimo de 3 caracteres.",
                  },
                })}
              />

              {errors.assunto && (
                <p id="erro-assunto" role="alert" className="mt-2 text-xs text-red-600">
                  {errors.assunto.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm font-medium text-[#355b50]"
              >
                Mensagem
              </label>

              <textarea
                id="mensagem"
                rows={6}
                placeholder="Conte para nós como podemos ajudar..."
                className={`${campo} resize-y`}
                aria-invalid={!!errors.mensagem}
                aria-describedby={
                  errors.mensagem ? "erro-mensagem" : undefined
                }
                {...register("mensagem", {
                  required: "A mensagem é obrigatória.",
                  minLength: {
                    value: 10,
                    message: "Mínimo de 10 caracteres.",
                  },
                })}
              />

              {errors.mensagem && (
                <p id="erro-mensagem" role="alert" className="mt-2 text-xs text-red-600">
                  {errors.mensagem.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#17675b] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#125347] focus:outline-none focus:ring-2 focus:ring-[#17675b] focus:ring-offset-2"
            >
              Enviar mensagem
            </button>

            <p className="text-center text-xs leading-5 text-[#84958c]">
              Formulário demonstrativo para fins acadêmicos.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
