import { Control } from 'react-hook-form';
import { FormLoginProps } from '../../pages/types';

export interface InputProps {
  control: Control<FormLoginProps>;
  name: "email" | "password";
  errorMessage?: string;
}
