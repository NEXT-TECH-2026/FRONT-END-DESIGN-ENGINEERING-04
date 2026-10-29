import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDemoAuth } from "../../contexts/demoAuth";

export default function Login() {
  const navigate = useNavigate();
  const { entrar: entrarNaDemo } = useDemoAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    document.title = "SoulPass - Login";
  }, []);

  function entrar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (entrarNaDemo(email, senha)) {
      navigate("/solucao-simulacao", { replace: true });
    } else {
      setMostrarModal(true);
    }
  }

  return (
    <section className="min-h-screen bg-[#efefef] px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center rounded-[40px] bg-white px-8 py-14 shadow-md">

        {/* Cabeçalho do formulário */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h1 className="text-6xl font-bold text-[#1e4d4d]">
            SoulPass
          </h1>

          <p className="text-2xl font-medium text-[#274646]">
            Entre em sua conta
          </p>
        </div>

        <p className="mb-8 text-center text-lg text-[#3a5353]">
          Acesso de demonstração. Crie uma conta nesta aba antes de entrar.
          Os dados são apagados ao recarregar a página.
        </p>
        {/* Formulário */}
        <form onSubmit={entrar} className="w-full max-w-2xl">
          <fieldset className="flex flex-col gap-8 border-none">

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="idEmail"
                className="text-xl font-semibold tracking-wide text-[#274646]"
              >
                Email
              </label>

              <input
                type="email"
                id="idEmail"
                placeholder="seu@email.com"
                maxLength={150}
                required
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-[#f5f5f5] px-6 py-4 text-lg outline-none transition focus:border-[#1e4d4d]"
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="idSenha"
                className="text-xl font-semibold tracking-wide text-[#274646]"
              >
                Senha
              </label>

              <input
                type="password"
                id="idSenha"
                placeholder="Digite sua senha"
                required
                value={senha}
                onChange={(evento) => setSenha(evento.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-[#f5f5f5] px-6 py-4 text-lg outline-none transition focus:border-[#1e4d4d]"
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#1e4d4d] px-6 py-4 text-xl font-bold text-white transition hover:bg-[#3d6b6b]"
            >
              Entrar
            </button>

          </fieldset>
        </form>

        {/* Link para cadastro */}
        <p className="mt-8 text-lg">
          Ainda não tem uma conta?{" "}
          <Link
            to="/cadastro"
            className="font-semibold text-[#1e4d4d] hover:underline"
          >
            Criar uma conta
          </Link>
        </p>
      </div>

      {/* Modal de erro */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">

            <h2 className="mb-4 text-3xl font-bold text-[#1e4d4d]">
              Atenção!
            </h2>

            <p className="mb-2 text-lg">
              Conta de demonstração não encontrada ou dados incorretos.
            </p>

            <p className="mb-6 text-gray-500">
              Crie uma conta nesta aba e entre sem recarregar a página.
            </p>

            <button
              onClick={() => setMostrarModal(false)}
              className="rounded-2xl bg-[#1e4d4d] px-8 py-3 font-semibold text-white transition hover:bg-[#3d6b6b]"
            >
              Fechar
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
