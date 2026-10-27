import Cabecalho from "../../components/Cabecalho"
import Rodape from "../../components/Rodape"
import Parceiros from "../../components/Parceiros"
import type { ReactNode } from "react";


interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Cabecalho />

      <main id="conteudo-principal" tabIndex={-1}>{children}</main>
      <Parceiros/>
      <Rodape />
    </div>
  );
};
