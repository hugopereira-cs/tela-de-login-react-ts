/**
 * @fileoverview Tipos para o componente Container.
 */

import { ReactNode } from 'react';

/**
 * Props do componente Container.
 * @typedef {Object} ContainerProps
 * @property {ReactNode} children - Conteúdo filho a ser envolvido pelo container
 */
export interface ContainerProps {
  children: ReactNode;
}
