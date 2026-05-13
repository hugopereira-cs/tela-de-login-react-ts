import { Button } from '../Welcome/styles';
import {
  BackToLoginText,
  CardContainer,
  Column,
  RegisterContainer,
  Spacing,
  Subtitle,
  Title
} from './styles';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '../../services/supabase';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input/Input';

const schema = z
  .object({
    name: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
    email: z.string().min(1, 'Campo obrigatório').email('Email inválido'),
    password: z.string().min(6, 'A senha deve conter pelo menos 6 caracteres'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'] // Indica que o erro está relacionado ao campo confirmPassword
  });

type FormRegisterProps = z.infer<typeof schema>;

const defaultValues: FormRegisterProps = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormRegisterProps>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange'
  });

  const onSubmit = async (formData: FormRegisterProps) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            display_name: formData.name // Salva o nome no metadata do usuário
          }
        }
      });

      if (error) {
        alert(`Erro ao cadastrar: ${error.message}`);
        return;
      }

      alert('Cadastro realizado com sucesso! Verifique seu email ou faça o login.');
      navigate('/login');
    } catch (error) {
      console.error(`Erro inesperado: ${error}`);
    }
  };

  return (
    <Container>
      <RegisterContainer>
        <CardContainer>
          <Title>Página de Registro</Title>
          <Subtitle>Registre-se para continuar</Subtitle>
        </CardContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Column>
            <Input
              name="name"
              placeholder="Nome"
              control={control}
              errorMessage={errors?.name?.message}
            />
            <Spacing />
            <Input
              name="email"
              placeholder="Email"
              control={control}
              errorMessage={errors?.email?.message}
            />
            <Spacing />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              control={control}
              errorMessage={errors?.password?.message}
            />
            <Spacing />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirmar senha"
              control={control}
              errorMessage={errors?.confirmPassword?.message}
            />
            <Spacing />
            <Button title="Cadastrar" disabled={!isValid} type="submit" />
            <BackToLoginText>Já tem uma conta? Faça login</BackToLoginText>
            <Spacing />
            <Button onClick={() => navigate('/login')}>Login</Button>
            <Spacing />
          </Column>
        </form>
      </RegisterContainer>
    </Container>
  );
};
