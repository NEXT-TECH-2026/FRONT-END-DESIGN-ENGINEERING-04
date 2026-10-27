import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

type FormularioContato = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

export default function Contato() {

  useEffect(() => {
            document.title = "SoulPass - Contato";
  }, []);

  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormularioContato>();

  function enviarFormulario() {
    setMensagemEnviada(true);
  }

  function formularioInvalido() {
    setMensagemEnviada(false);
  }

  return (
    <div className="bg-white px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-14 lg:pb-32 lg:pt-16">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-12">
          <h1 className="text-4xl font-semibold text-[#4f8585] sm:text-5xl">
            Entre em contato
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:mt-5 sm:text-lg">
            Tem alguma dúvida, sugestão ou quer saber mais sobre o SoulPass?
            Envie uma mensagem para nossa equipe.
          </p>
        </div>

        {mensagemEnviada && (
          <div
            role="status"
            aria-live="polite"
            className="mx-auto mb-6 max-w-4xl rounded-lg border border-[#4f8585] bg-[#eef6f6] px-4 py-4 text-center text-base font-medium text-[#376969] sm:px-6 sm:text-lg"
          >
            Campos validados nesta demonstração. A mensagem ainda não foi enviada; o envio depende da integração com o backend.
          </div>
        )}

        <form
          noValidate
          onChange={() => setMensagemEnviada(false)}
          onSubmit={handleSubmit(enviarFormulario, formularioInvalido)}
          className="mx-auto max-w-4xl space-y-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:space-y-6 sm:p-8 lg:p-10"
        >
          <div>
            <label
              htmlFor="nome"
              className="mb-2 block text-base font-medium text-gray-700 sm:text-lg"
            >
              Nome
            </label>

            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              aria-invalid={errors.nome ? "true" : "false"}
              aria-describedby={errors.nome ? "erro-nome" : undefined}
              {...register("nome", {
                required: "O nome é obrigatório.",
                minLength: {
                  value: 3,
                  message: "O nome deve ter pelo menos 3 caracteres.",
                },
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-[#4f8585] focus:ring-2 focus:ring-[#4f8585]/30 sm:px-5 sm:py-4 sm:text-lg"
            />

            {errors.nome && (
              <p
                id="erro-nome"
                role="alert"
                className="mt-2 text-sm text-red-600 sm:text-base"
              >
                {errors.nome.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-base font-medium text-gray-700 sm:text-lg"
            >
              E-mail
            </label>

            <input
              id="email"
              type="text"
              inputMode="email"
              placeholder="seuemail@exemplo.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "erro-email" : undefined}
              {...register("email", {
                required: "O e-mail é obrigatório.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um e-mail válido.",
                },
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-[#4f8585] focus:ring-2 focus:ring-[#4f8585]/30 sm:px-5 sm:py-4 sm:text-lg"
            />

            {errors.email && (
              <p
                id="erro-email"
                role="alert"
                className="mt-2 text-sm text-red-600 sm:text-base"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="assunto"
              className="mb-2 block text-base font-medium text-gray-700 sm:text-lg"
            >
              Assunto
            </label>

            <input
              id="assunto"
              type="text"
              placeholder="Sobre o que deseja falar?"
              aria-invalid={errors.assunto ? "true" : "false"}
              aria-describedby={errors.assunto ? "erro-assunto" : undefined}
              {...register("assunto", {
                required: "O assunto é obrigatório.",
                minLength: {
                  value: 3,
                  message: "O assunto deve ter pelo menos 3 caracteres.",
                },
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-[#4f8585] focus:ring-2 focus:ring-[#4f8585]/30 sm:px-5 sm:py-4 sm:text-lg"
            />

            {errors.assunto && (
              <p
                id="erro-assunto"
                role="alert"
                className="mt-2 text-sm text-red-600 sm:text-base"
              >
                {errors.assunto.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="mb-2 block text-base font-medium text-gray-700 sm:text-lg"
            >
              Mensagem
            </label>

            <textarea
              id="mensagem"
              rows={6}
              placeholder="Escreva sua mensagem..."
              aria-invalid={errors.mensagem ? "true" : "false"}
              aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
              {...register("mensagem", {
                required: "A mensagem é obrigatória.",
                minLength: {
                  value: 10,
                  message: "A mensagem deve ter pelo menos 10 caracteres.",
                },
              })}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-[#4f8585] focus:ring-2 focus:ring-[#4f8585]/30 sm:px-5 sm:py-4 sm:text-lg"
            />

            {errors.mensagem && (
              <p
                id="erro-mensagem"
                role="alert"
                className="mt-2 text-sm text-red-600 sm:text-base"
              >
                {errors.mensagem.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#4f8585] px-6 py-3 text-base font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#4f8585] focus:ring-offset-2 sm:py-4 sm:text-lg"
          >
            Enviar mensagem
          </button>
        </form>
      </section>
    </div>
  );
}
