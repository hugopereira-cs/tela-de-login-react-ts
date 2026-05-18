/**
 * @fileoverview Componente de input com suporte a validação e alternância de visibilidade de senha.
 * Integrado com react-hook-form para gerenciamento de formulários.
 */

import { InputWrapper, InputContainer, ToggleButton, ErrorMessage } from './styles';
import { InputProps } from './types';
import { Controller, FieldValues } from 'react-hook-form';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

/**
 * Componente de input customizado com suporte a validação e toggle de senha.
 * Utiliza react-hook-form para gerenciamento centralizado de estado do formulário.
 * Exibe ícone de olho/olho fechado quando o tipo é 'password', permitindo alternar visibilidade.
 * Mostra mensagem de erro abaixo do input quando `errorMessage` é fornecida.
 * @component
 * @template T - Tipo genérico que extends FieldValues (tipo do formulário)
 * @param {InputProps<T>} props - Props do componente
 * @param {Control<T>} props.control - Objeto de controle do react-hook-form
 * @param {FieldPath<T>} props.name - Nome do campo no formulário
 * @param {string} [props.errorMessage] - Mensagem de erro a exibir
 * @param {string} [props.type] - Tipo HTML do input (default: 'text')
 * @param {Object} [props.rest] - Outros atributos HTML como placeholder, disabled, etc
 * @returns {JSX.Element} Input estilizado com validação
 * @example
 * <Input
 *   control={control}
 *   name="email"
 *   type="email"
 *   placeholder="Seu email"
 *   errorMessage={errors.email?.message}
 * />
 */
export const Input = <T extends FieldValues>({
  control,
  name,
  errorMessage,
  type,
  ...rest
}: InputProps<T>) => {
  /**
   * Estado para controlar se a senha está visível.
   * @type {[boolean, Function]}
   */
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Determina o tipo do input. Se for 'password' e showPassword for true, usa 'text'.
   * @type {string}
   */
  const inputType = type === 'password' && showPassword ? 'text' : type;

  /**
   * Alterna entre mostrar e esconder a senha.
   */
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <InputWrapper>
        <InputContainer hasError={!!errorMessage}>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                type={inputType}
                {...rest}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
              />
            )}
          />
          {/* Só mostra o botão de olho se o tipo original do input for 'password' */}
          {type === 'password' && (
            <ToggleButton type="button" onClick={handleTogglePassword}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </ToggleButton>
          )}
        </InputContainer>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      </InputWrapper>
    </>
  );
};
