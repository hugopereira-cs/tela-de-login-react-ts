/**
 * @fileoverview Estilos globais da aplicação.
 * Define reset moderno, tipografia limpa e transições suaves de tema.
 */

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    transition: background-color 0.25s ease, color 0.25s ease;
    line-height: 1.5;
    overflow-x: hidden;
  }

  ::selection {
    background-color: ${({ theme }) => theme.brand};
    color: ${({ theme }) => theme.brandText};
  }

  input, button, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
