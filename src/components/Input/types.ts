import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface InputProps<T extends FieldValues> extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'name'
> {
  control: Control<T>;
  name: FieldPath<T>;
  errorMessage?: string;
}
