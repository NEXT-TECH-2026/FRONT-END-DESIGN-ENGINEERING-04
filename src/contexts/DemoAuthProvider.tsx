import { useState, type ReactNode } from 'react';
import { DemoAuthContext, type ContaDemo, type UsuarioDemo } from './demoAuth';

// Protótipo em memória: substituir pela autenticação da API Java.
// Nenhuma credencial é gravada no armazenamento do navegador.
export function DemoAuthProvider({ children }: { children: ReactNode }) {
  const [conta, setConta] = useState<ContaDemo | null>(null);
  const [usuario, setUsuario] = useState<UsuarioDemo | null>(null);

  function cadastrar(novaConta: ContaDemo) {
    setConta({ ...novaConta, nome: novaConta.nome.trim(), email: novaConta.email.trim().toLowerCase() });
    setUsuario(null);
  }

  function entrar(email: string, senha: string) {
    if (!conta || conta.email !== email.trim().toLowerCase() || conta.senha !== senha) return false;
    setUsuario({ nome: conta.nome, email: conta.email });
    return true;
  }

  return (
    <DemoAuthContext.Provider value={{ usuario, cadastrar, entrar, sair: () => setUsuario(null) }}>
      {children}
    </DemoAuthContext.Provider>
  );
}
