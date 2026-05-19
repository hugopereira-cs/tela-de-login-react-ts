/**
 * @fileoverview Página de registro da aplicação.
 * Fornece formulário para criar nova conta de usuário.
 */

import { Button } from '../../components/Button/Button';
import { CardContainer, Column, RegisterContainer, Spacing, Subtitle, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '../../services/supabase';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import { RedirectText } from '../../components/RedirectText';
import { useState } from 'react';
import { toast } from 'sonner';

/**
 * Schema de validação do formulário de registro usando Zod.
 * Valida nome com mínimo de 3 caracteres, email válido, senha com mínimo de 6 caracteres
 * e verifica se as senhas coincidem.
 * @type {z.ZodObject}
 */
const schema = z
  .object({
    name: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
    email: z.string().min(1, 'Campo obrigatório').email('Email inválido'),
    password: z.string().min(6, 'A senha deve conter pelo menos 6 caracteres'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword']
  });

/**
 * Tipo infere do schema Zod para props do formulário de registro.
 * @typedef {Object} FormRegisterProps
 * @property {string} name - Nome completo do usuário
 * @property {string} email - Email do usuário
 * @property {string} password - Senha escolhida
 * @property {string} confirmPassword - Confirmação da senha
 */
type FormRegisterProps = z.infer<typeof schema>;

/**
 * Valores padrão do formulário de registro.
 * @type {FormRegisterProps}
 */
const defaultValues: FormRegisterProps = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

/**
 * Página de registro.
 * Permite que novos usuários criem uma conta fornecendo nome, email e senha.
 * Utiliza Supabase para criar novo usuário e salva o nome como metadata.
 * Redireciona para /login após registro bem-sucedido.
 * @component
 * @returns {JSX.Element} Formulário de registro
 * @example
 * <Route path="/register" element={<Register />} />
 */
export const Register = () => {
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
  } = useForm<FormRegisterProps>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange'
  });

  /**
   * Função chamada ao submeter o formulário.
   * Cria novo usuário e loga automaticamente usando Supabase. O nome é salvo nos metadados do usuário.
   * O nome é salvo nos metadados do usuário.
   * @async
   * @param {FormRegisterProps} formData - Dados validados do formulário
   */
  const onSubmit = async (formData: FormRegisterProps) => {
    try {
      setIsLoading(true); // Começa a carregar

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
        toast.error(`Erro ao cadastrar: ${error.message}`);
        return;
      }

      toast.success('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error(`Erro inesperado: ${error}`);
    } finally {
      // Evita que o botão fique em "Carregando..." para sempre
      setIsLoading(false); // Para de carregar, dando certo ou errado
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
            <Button title="Cadastrar" isLoading={isLoading} disabled={!isValid} type="submit" />
            <RedirectText text="Já tem conta?" linkText="Faça login" linkTo="/login" />
            <Spacing />
          </Column>
        </form>
      </RegisterContainer>
    </Container>
  );
};
