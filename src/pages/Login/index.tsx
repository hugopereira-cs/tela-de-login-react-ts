/**
 * @fileoverview Página de login da aplicação.
 * Fornece formulário para autenticação de usuários existentes.
 */

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

/**
 * Schema de validação do formulário de login usando Zod.
 * Valida email como e-mail válido e senha com mínimo de 6 caracteres.
 * @type {z.ZodObject}
 */
const schema = z.object({
  email: z.string().min(1, 'Campo obrigatório').email('Email inválido'),
  password: z.string().min(6, 'Mínimo de 6 caracteres')
});

/**
 * Tipo infere do schema Zod para props do formulário de login.
 * @typedef {Object} FormLoginProps
 * @property {string} email - Email do usuário
 * @property {string} password - Senha do usuário
 */
type FormLoginProps = z.infer<typeof schema>;

/**
 * Valores padrão do formulário de login.
 * @type {FormLoginProps}
 */
const defaultValues: FormLoginProps = {
  email: '',
  password: ''
};

/**
 * Página de login.
 * Permite que usuários autentiquem-se fornecendo email e senha.
 * Utiliza Supabase para autenticação e mostra notificações de sucesso/erro.
 * Redireciona para /home após login bem-sucedido.
 * @component
 * @returns {JSX.Element} Formulário de login
 * @example
 * <Route path="/login" element={<Login />} />
 */
export const Login = () => {
  /**
   * Estado de carregamento durante a submissão do formulário.
   * @type {[boolean, Function]}
   */
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * Hook do react-hook-form para gerenciamento do formulário.
   * Integrado com Zod para validação em tempo real.
   */
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormLoginProps>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onChange'
  });

  /**
   * Função chamada ao submeter o formulário.
   * Envia credenciais para o Supabase e redireciona se bem-sucedido.
   * @async
   * @param {FormLoginProps} data - Dados validados do formulário
   */
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
