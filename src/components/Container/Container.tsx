/**
 * @fileoverview Componente container que envolve conteúdo em um wrapper estilizado.
 */

import { ContainerProps } from './types';
import * as S from './styles';

/**
 * Componente container que centraliza e estiliza seu conteúdo.
 * Serve como wrapper para páginas e seções principais da aplicação.
 * @component
 * @param {ContainerProps} props - Props do componente
 * @param {ReactNode} props.children - Conteúdo filho a ser envolvido
 * @returns {JSX.Element} Container estilizado com conteúdo
 * @example
 * <Container>
 *   <h1>Bem-vindo</h1>
 * </Container>
 */
export const Container = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
};
