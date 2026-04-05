export interface FormLoginProps {{
  email: string;
  password: string;
}

export const defaultValues: FormLoginProps = {
  email: '',
  password: ''
};