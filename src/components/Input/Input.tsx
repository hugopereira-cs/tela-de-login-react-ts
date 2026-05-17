import { InputWrapper, InputContainer, ToggleButton, ErrorMessage } from './styles';
import { InputProps } from './types';
import { Controller, FieldValues } from 'react-hook-form';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const Input = <T extends FieldValues>({
  control,
  name,
  errorMessage,
  type,
  ...rest
}: InputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  // Se o tipo original for 'password' e showPassword for true, type muda para 'text'
  const inputType = type === 'password' && showPassword ? 'text' : type;

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
