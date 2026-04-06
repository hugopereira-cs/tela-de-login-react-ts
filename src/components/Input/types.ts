import { Control, FieldPath } from 'react-hook-form';
import { FormLoginProps } from '../../pages/Login/types';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  control: Control<any,any>;
  name: string;
  errorMessage?: string;
}
