/**
 * @fileoverview Estilos globais da aplicação.
 * Define reset de CSS, fontes padrão, cores de fundo e animações globais.
 */

import { createGlobalStyle } from 'styled-components';

/**
 * Estilos globais aplicados a toda a aplicação.
 * Define:
 * - Reset de margin e padding
 * - Fonte padrão (Nunito)
 * - Box-sizing
 * - Cores de fundo e texto baseadas no tema
 * - Animação de rotação (spin)
 */
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    box-sizing:  border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    transition: all 0.25s linear; // Muda o tema de forma suave
  }

  input, button, textarea, h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito', sans-serif;
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
