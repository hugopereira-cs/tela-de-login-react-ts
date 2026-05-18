/**
 * @fileoverview Arquivo de entrada da aplicação React. Responsável por renderizar o componente raiz (App) no DOM.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
