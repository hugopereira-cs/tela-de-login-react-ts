/**
 * @fileoverview Tipos para o componente Button.
 */

/**
 * Props do componente Button.
 * @typedef {Object} ButtonProps
 * @property {string} title - Texto exibido no botão
 * @property {'button' | 'submit' | 'reset'} type - Tipo HTML do botão
 * @property {boolean} [disabled=false] - Se o botão está desabilitado
 * @property {boolean} [isLoading=false] - Se o botão está em estado de carregamento
 * @property {Function} [onClick] - Função chamada ao clicar no botão
 */
export interface ButtonProps {
  title: string;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
