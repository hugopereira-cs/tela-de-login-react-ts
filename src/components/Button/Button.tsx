import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

export const Button = ({ title, onClick }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
}