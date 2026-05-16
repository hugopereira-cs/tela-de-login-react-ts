import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

export const Button = ({ title, type, disabled, isLoading, onClick }: ButtonProps) => {
  return (
    <ButtonContainer type={type} disabled={disabled || isLoading} onClick={onClick}>
      {isLoading ? 'Carregando...' : title}
    </ButtonContainer>
  );
};
