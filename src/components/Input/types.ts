import { Control, FieldPath } from 'react-hook-form';
import { FormLoginProps } from '../../pages/Login/types';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  control: Control<FormLoginProps>;
  name: FieldPath<FormLoginProps>;
  errorMessage?: string;
}
