/**
 * @fileoverview Contexto de tema da aplicação.
 * Gerencia o estado do tema (claro ou escuro) e fornece função para alterná-lo.
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from '../styles/themes';

/**
 * Dados disponíveis no contexto de tema.
 * @typedef {Object} ThemeContextData
 * @property {ThemeType} theme - Objeto do tema atual com cores e propriedades
 * @property {Function} toggleTheme - Função para alternar entre temas claro e escuro
 */
interface ThemeContextData {
  theme: ThemeType;
  toggleTheme: () => void;
}

/**
 * Contexto React para gerenciamento de tema.
 * @type {React.Context<ThemeContextData>}
 */
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

/**
 * Provedor de contexto de tema.
 * Envolve a aplicação e fornece o tema aos componentes via styled-components.
 * Inicia com tema escuro por padrão.
 * @component
 * @param {Object} props - Props do componente
 * @param {ReactNode} props.children - Componentes filhos a serem envolvidos
 * @returns {JSX.Element} Provedor com contexto de tema
 */
export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  /**
   * Estado do tema atual. Inicia com darkTheme.
   * @type {[ThemeType, Function]}
   */
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(darkTheme);

  /**
   * Alterna entre tema claro e escuro.
   * Se o tema atual é light, muda para dark. Se é dark, muda para light.
   */
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

/**
 * Hook personalizado para acessar o contexto de tema.
 * Fornece o tema atual e a função para alterná-lo.
 * Deve ser utilizado dentro de um AppThemeProvider.
 * @returns {ThemeContextData} Dados do contexto de tema (theme e toggleTheme)
 * @throws {Error} Se utilizado fora de um AppThemeProvider
 * @example
 * const { theme, toggleTheme } = useAppTheme();
 */
export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme deve ser usado dentro de um AppThemeProvider');
  }
  return context;
};
