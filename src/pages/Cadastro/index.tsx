import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDemoAuth } from "../../contexts/demoAuth";

export default function Cadastro() {
  const navigate = useNavigate();
  const { cadastrar: cadastrarConta } = useDemoAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mostrarSucesso, setMostrarSucesso] = useState(false);
  const [mostrarErro, setMostrarErro] = useState(false);

  const [contador, setContador] = useState(5);

  useEffect(() => {
    document.title = "SoulPass - Cadastro";
  }, []);

  useEffect(() => {
    if (!mostrarSucesso) {
      return;
    }

    if (contador === 0) {
      navigate("/login");
      return;
    }

    const intervalo = setInterval(() => {
      setContador((valorAtual) => valorAtual - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [mostrarSucesso, contador, navigate]);

  function cadastrar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
      setMostrarErro(true);
      return;
    }

    cadastrarConta({ nome, email, senha });

    setContador(5);
    setMostrarSucesso(true);
  }

  return (
    <section className="min-h-screen bg-[#efefef] px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center rounded-[40px] bg-white px-8 py-14 shadow-md">

        {/* Cabeçalho */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h1 className="text-6xl font-bold text-[#1e4d4d]">
            SoulPass
          </h1>

          <p className="text-2xl font-medium text-[#274646]">
            Crie sua conta
          </p>
        </div>

        <p className="mb-8 text-center text-lg text-[#3a5353]">
          Demonstração local. A conta existe apenas nesta aba até recarregar a página.
          Use dados fictícios; o cadastro real será integrado à API Java.
        </p>
        {/* Formulário */}
        <form onSubmit={cadastrar} className="w-full max-w-2xl">
          <fieldset className="flex flex-col gap-8 border-none">

            {/* Nome */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="idNome"
                className="text-xl font-semibold tracking-wide text-[#274646]"
              >
                Nome
              </label>

              <input
                type="text"
                id="idNome"
                placeholder="Seu nome"
                required
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-[#f5f5f5] px-6 py-4 text-lg outline-none transition focus:border-[#1e4d4d]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="idEmailCad"
                className="text-xl font-semibold tracking-wide text-[#274646]"
              >
                Email
              </label>

              <input
                type="email"
                id="idEmailCad"
                placeholder="seu@email.com"
                required
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-[#f5f5f5] px-6 py-4 text-lg outline-none transition focus:border-[#1e4d4d]"
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="idSenhaCad"
                className="text-xl font-semibold tracking-wide text-[#274646]"
              >
                Senha
              </label>

              <input
                type="password"
                id="idSenhaCad"
                placeholder="Crie uma senha"
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
              Criar Conta
            </button>

          </fieldset>
        </form>

        {/* Link para login */}
        <p className="mt-8 text-lg">
          Já tem uma conta?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#1e4d4d] hover:underline"
          >
            Entrar
          </Link>
        </p>
      </div>

      {/* Modal de sucesso */}
      {mostrarSucesso && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">

            <h2 className="mb-4 text-3xl font-bold text-[#1e4d4d]">
              Perfeito!
            </h2>

            <p className="mb-4 text-lg">
              Sua conta de demonstração foi criada nesta aba.
            </p>

            <p className="text-gray-500">
              Redirecionando em {contador} segundos...
            </p>

          </div>
        </div>
      )}

      {/* Modal de erro */}
      {mostrarErro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">

            <h2 className="mb-4 text-3xl font-bold text-[#1e4d4d]">
              Atenção!
            </h2>

            <p className="mb-6 text-lg">
              Preencha todos os campos!
            </p>

            <button
              onClick={() => setMostrarErro(false)}
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
