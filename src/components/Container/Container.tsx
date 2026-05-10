import { ContainerProps } from './types';
import * as S from './styles';

export const Container = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
};
