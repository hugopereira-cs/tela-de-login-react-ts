import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

export const Button = ({ title, type, disabled, onClick }: ButtonProps) => {
  return (
    <ButtonContainer type={type} disabled={disabled} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};
