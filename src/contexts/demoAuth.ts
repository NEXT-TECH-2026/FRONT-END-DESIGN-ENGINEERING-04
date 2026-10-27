import { createContext, useContext } from 'react';

export interface UsuarioDemo {
  nome: string;
  email: string;
}

export type ContaDemo = UsuarioDemo & { senha: string };

interface DemoAuthContextValue {
  usuario: UsuarioDemo | null;
  cadastrar: (conta: ContaDemo) => void;
  entrar: (email: string, senha: string) => boolean;
  sair: () => void;
}

export const DemoAuthContext = createContext<DemoAuthContextValue | null>(null);

export function useDemoAuth() {
  const contexto = useContext(DemoAuthContext);
  if (!contexto) throw new Error('useDemoAuth deve estar dentro de DemoAuthProvider.');
  return contexto;
}
