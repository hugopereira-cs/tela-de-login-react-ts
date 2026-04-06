import { InputContainer, ErrorMessage } from './styles';
import { InputProps } from './types';
import { Controller } from 'react-hook-form';

export const Input = ({ control, name, errorMessage, ...rest }: InputProps) => {
  return (
    <>
    <InputContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <input 
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        )}
      />
      </InputContainer>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};
