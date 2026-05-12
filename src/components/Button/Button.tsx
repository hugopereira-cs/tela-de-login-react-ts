import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

export const Button = ({ title, type }: ButtonProps) => {
  return <ButtonContainer type={type}>{title}</ButtonContainer>;
};
