import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Container } from '../../components/Container/Container';

import { LoginContainer, Column, Spacing, Title } from './styles';
import { supabase } from '../../services/supabase';
import { RedirectText } from '../../components/RedirectText';
import { useState } from 'react';
import { toast } from 'sonner';

const schema = z.object({
  email: z.string().min(1, 'Campo obrigatório').email('Email inválido'),
  password: z.string().min(6, 'Mínimo de 6 caracteres')
});

type FormLoginProps = z.infer<typeof schema>;

const defaultValues: FormLoginProps = {
  email: '',
  password: ''
};

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormLoginProps>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (data: FormLoginProps) => {
    try {
      setIsLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });

      if (error) {
        toast.error('Erro ao fazer login: ' + error.message);
        return;
      }

      toast.success('Login realizado com sucesso!');
      navigate('/home');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Column>
            <Title>Login</Title>
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
            <Button
              title={isValid ? 'Entrar' : '🚫'}
              isLoading={isLoading}
              disabled={!isValid}
              type="submit"
            />
            <Spacing />
            <RedirectText text="Não tem conta?" linkText="Cadastre-se" linkTo="/register" />
          </Column>
        </form>
      </LoginContainer>
    </Container>
  );
};
