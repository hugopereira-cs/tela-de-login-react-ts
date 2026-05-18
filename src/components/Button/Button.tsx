/**
 * @fileoverview Componente de botão reutilizável.
 * Renderiza um botão HTML com suporte a estado de carregamento e desabilitado.
 */

import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

/**
 * Componente de botão customizado.
 * Exibe um texto ou estado de carregamento no interior do botão.
 * Quando em estado de carregamento, exibe "Carregando..." em vez do texto.
 * Desabilita automaticamente quando está carregando ou quando a prop disabled é true.
 * @component
 * @param {ButtonProps} props - Props do componente
 * @param {string} props.title - Texto do botão
 * @param {'button' | 'submit' | 'reset'} props.type - Tipo HTML do botão
 * @param {boolean} [props.disabled] - Se o botão está desabilitado
 * @param {boolean} [props.isLoading] - Se está em estado de carregamento
 * @param {Function} [props.onClick] - Callback ao clicar no botão
 * @returns {JSX.Element} Botão estilizado
 * @example
 * <Button title="Enviar" type="submit" isLoading={false} />
 */
export const Button = ({ title, type, disabled, isLoading, onClick }: ButtonProps) => {
  return (
    <ButtonContainer type={type} disabled={disabled || isLoading} onClick={onClick}>
      {isLoading ? 'Carregando...' : title}
    </ButtonContainer>
  );
};
