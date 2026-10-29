import type { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useDemoAuth } from '../contexts/demoAuth';

export default function AcessoSimulacao({ children }: { children: ReactNode }) {
  const { usuario } = useDemoAuth();

  // Controle de navegação do protótipo; a API real também deverá validar a sessão.
  return usuario ? children : <Navigate to="/login" replace />;
}
