/**
 * @fileoverview Componente de botão para alternância de tema.
 */

import { useAppTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { ToggleButton } from './styles';

/**
 * Componente de botão para alternância entre tema claro e escuro.
 * Exibe um ícone de sol quando em tema escuro, e um ícone de lua quando em tema claro.
 * Ao clicar, alterna entre os dois temas.
 * @component
 * @returns {JSX.Element} Botão de alternância de tema com ícone
 * @example
 * <ThemeToggleButton />
 */
export const ThemeToggleButton = () => {
  const { toggleTheme } = useAppTheme();

  /**
   * Verifica se o tema atual é escuro pelo atributo 'title' do tema.
   * @type {boolean}
   */
  const isDarkMode = useAppTheme().theme.title === 'dark';

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </ToggleButton>
  );
};
