/**
 * @fileoverview Tipos para o componente Input.
 */

import { Control, FieldPath, FieldValues } from 'react-hook-form';

/**
 * Props do componente Input.
 * Estende os atributos padrão de input HTML, mas utiliza react-hook-form para validação.
 * @typedef {Object} InputProps
 * @template T - Tipo genérico que extends FieldValues (tipo do formulário)
 * @property {Control<T>} control - Objeto de controle do react-hook-form
 * @property {FieldPath<T>} name - Nome do campo no formulário
 * @property {string} [errorMessage] - Mensagem de erro a exibir abaixo do input
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 */
export interface InputProps<T extends FieldValues> extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'name'
> {
  control: Control<T>;
  name: FieldPath<T>;
  errorMessage?: string;
}
