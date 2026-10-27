import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { router } from './routes';
import { DemoAuthProvider } from './contexts/DemoAuthProvider';
import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DemoAuthProvider>
      <RouterProvider router={router} />
    </DemoAuthProvider>
  </StrictMode>,
);
