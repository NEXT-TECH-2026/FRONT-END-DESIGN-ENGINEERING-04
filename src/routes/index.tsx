import { createBrowserRouter, Navigate } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Conteudo from '../pages/Conteudo';
import Contato from '../pages/Contato';
import Equipe from '../pages/Equipe';
import Faq from '../pages/Faq';
import Login from '../pages/Login';
import Sobre from '../pages/Sobre';
import SolucaoSimulacao from '../pages/Solucao-Simulacao';
import NaoEncontrada from '../pages/NaoEncontrada';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cadastro', element: <Cadastro /> },
      { path: 'contato', element: <Contato /> },
      { path: 'conteudo', element: <Conteudo /> },
      { path: 'equipe', element: <Equipe /> },
      { path: 'faq', element: <Faq /> },
      { path: 'login', element: <Login /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'solucao-simulacao', element: <SolucaoSimulacao /> },
      // Compatibilidade com o endereço que aparecia no projeto antigo.
      { path: 'SolucaoSimulacao', element: <Navigate to="/solucao-simulacao" replace /> },
      { path: '*', element: <NaoEncontrada /> },
    ],
  },
]);
