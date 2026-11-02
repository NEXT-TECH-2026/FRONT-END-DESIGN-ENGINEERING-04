import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useDemoAuth } from "../../contexts/demoAuth";
import imagemOnibus from "../../img/onibus-soulpass-natureza.jpg";
import logoSoulPass from "../../img/SoulPass-logo-transparente.png";

const campo = "w-full rounded-xl border border-[#d6e1d8] bg-[#f8faf8] px-5 py-4 text-[1.5rem] text-[#263b2d] outline-none placeholder:text-[#89958b] transition focus:border-[#6b9f78] focus:ring-2 focus:ring-[#6b9f78]/20";
const rotulo = "text-[1.4rem] font-medium text-[#34483a]";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { entrar, cadastrar } = useDemoAuth();
  const [abaLocal, setAbaLocal] = useState<{ chave: string; cadastro: boolean } | null>(null);
  const criandoConta = abaLocal?.chave === location.key
    ? abaLocal.cadastro
    : (location.state as { aba?: string } | null)?.aba === "cadastro";
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [cadastroConcluido, setCadastroConcluido] = useState(false);

  function mudarAba(cadastro: boolean) {
    setAbaLocal({ chave: location.key, cadastro });
    setErro("");
    setCadastroConcluido(false);
    setSenha("");
  }

  useEffect(() => {
    document.title = criandoConta ? "SoulPass - Cadastro" : "SoulPass - Login";
  }, [criandoConta]);

  function enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setErro("");
    if (criandoConta) {
      if (!nome.trim() || !email.trim() || !senha.trim()) {
        setErro("Preencha todos os campos.");
        return;
      }
      cadastrar({ nome, email, senha });
      setSenha("");
      setAbaLocal({ chave: location.key, cadastro: false });
      setCadastroConcluido(true);
      return;
    }
    if (entrar(email, senha)) {
      navigate("/solucao-simulacao", { replace: true });
    } else {
      setErro("Conta não encontrada ou dados incorretos. Confira seus dados ou crie uma conta.");
    }
  }

  return (
    <section className="grid min-h-[calc(100vh-11rem)] bg-[#f6f8f6] text-[#243b30] lg:grid-cols-[minmax(30rem,0.8fr)_minmax(52rem,1.2fr)]">
      <aside className="relative m-8 hidden min-h-[52rem] overflow-hidden rounded-[2.8rem] shadow-[0_18px_50px_rgba(20,50,35,0.18)] lg:block">
        <img src={imagemOnibus} alt="Ônibus SoulPass em meio à natureza" className="absolute inset-0 h-full w-full object-cover object-[42%_center]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />
        <div className="relative flex min-h-[52rem] flex-col justify-between p-12 xl:p-16">
          <Link to="/" aria-label="Voltar para a página inicial" className="w-fit rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <img src={logoSoulPass} alt="SoulPass" className="w-[18rem] brightness-0 invert" />
          </Link>
          <div className="max-w-[42rem]">
            <h2 className="mb-4 text-[4.2rem] font-bold leading-tight text-white [font-family:Georgia,serif]">{criandoConta ? "Comece uma nova jornada." : "Bom ter você de volta."}</h2>
            <p className="text-[1.7rem] leading-relaxed text-white">{criandoConta ? "Crie sua conta e transforme seus pontos em novos caminhos para sua mobilidade." : "Entre na sua conta e continue descobrindo novos caminhos para a sua mobilidade."}</p>
          </div>
          <p className="text-[1.2rem] text-white/75">© {new Date().getFullYear()} SoulPass</p>
        </div>
      </aside>

      <div className="flex min-h-[calc(100vh-11rem)] items-center justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="w-full max-w-[48rem] rounded-[2.8rem] border border-[#e1e9e2] bg-white px-8 py-12 shadow-[0_18px_50px_rgba(35,75,59,0.12)] sm:px-12 sm:py-14">
          <div className="mb-8 text-center">
            <Link to="/" className="mx-auto mb-8 inline-flex rounded-full border border-[#d6e1d8] bg-[#f8faf8] p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b9f78] lg:hidden" aria-label="Voltar para a página inicial">
              <img src={logoSoulPass} alt="SoulPass" className="h-10 w-10 object-contain" />
            </Link>
            <h1 className="text-[3.4rem] font-semibold tracking-tight text-[var(--navigation-text)]">Acesse sua conta</h1>
            <p className="mt-3 text-[1.5rem] text-[#68756b]">{criandoConta ? "Cadastre-se para começar no SoulPass." : "Entre para continuar no SoulPass."}</p>
          </div>

          <nav aria-label="Acesso à conta" className="mb-8 grid grid-cols-2 border-b border-[#d6e1d8] text-center text-[1.4rem] font-semibold uppercase">
            <button type="button" onClick={() => mudarAba(false)} aria-current={!criandoConta ? "page" : undefined} className={`cursor-pointer border-b-2 px-2 py-4 transition-colors focus-visible:outline-2 focus-visible:outline-[#6b9f78] ${!criandoConta ? "border-[#426e51] text-[#234b3b]" : "border-transparent text-[#85958a] hover:text-[#234b3b]"}`}>Entrar</button>
            <button type="button" onClick={() => mudarAba(true)} aria-current={criandoConta ? "page" : undefined} className={`cursor-pointer border-b-2 px-2 py-4 transition-colors focus-visible:outline-2 focus-visible:outline-[#6b9f78] ${criandoConta ? "border-[#426e51] text-[#234b3b]" : "border-transparent text-[#85958a] hover:text-[#234b3b]"}`}>Criar conta</button>
          </nav>

          {cadastroConcluido && !criandoConta && <p role="status" className="mb-6 rounded-xl bg-[#e2f2e6] px-5 py-4 text-[1.4rem] text-[#234b3b]">Conta de demonstração criada. Entre com seus dados nesta aba.</p>}
          {erro && <p role="alert" className="mb-6 rounded-xl bg-[#fff0ee] px-5 py-4 text-[1.4rem] text-[#9b3c32]">{erro}</p>}

          <form onSubmit={enviar} className="w-full">
            <fieldset className="flex flex-col gap-6 border-none">
              {criandoConta && <div className="flex flex-col gap-3">
                <label htmlFor="idNome" className={rotulo}>Nome</label>
                <input type="text" id="idNome" autoComplete="name" placeholder="Seu nome" required value={nome} onChange={(evento) => setNome(evento.target.value)} className={campo} />
              </div>}
              <div className="flex flex-col gap-3">
                <label htmlFor="idEmail" className={rotulo}>Email</label>
                <input type="email" id="idEmail" autoComplete="email" placeholder="seu@email.com" maxLength={150} required value={email} onChange={(evento) => setEmail(evento.target.value)} className={campo} />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="idSenha" className={rotulo}>Senha</label>
                <input type="password" id="idSenha" autoComplete={criandoConta ? "new-password" : "current-password"} placeholder={criandoConta ? "Crie uma senha" : "Digite sua senha"} required value={senha} onChange={(evento) => setSenha(evento.target.value)} className={campo} />
              </div>
              <button type="submit" className="mt-2 flex min-h-[5.4rem] w-full items-center justify-center gap-3 rounded-xl bg-[#b9e3c2] px-6 py-4 text-[1.6rem] font-semibold text-[#173b2b] transition hover:bg-[#d0f0d6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b9f78]">
                {criandoConta ? "Criar conta" : "Entrar"} <span aria-hidden="true">→</span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
