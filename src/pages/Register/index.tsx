import { Button } from '../Welcome/styles';
import {
  BackToLogin,
  CardContainer,
  Column,
  InputContainer,
  RegisterContainer,
  Spacing,
  Subtitle,
  Title
} from './styles';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container/Container';

// TODO: Implementar a funcionalidade de registro, integrando com o Supabase para criar uma nova conta de usuário. Atualmente, a página de registro é apenas um layout sem funcionalidade.

export const Register = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <RegisterContainer>
        <CardContainer>
          <Title>Página de Registro</Title>
          <Subtitle>Registre-se para continuar</Subtitle>
        </CardContainer>
        <Column>
          <InputContainer>
            <input placeholder="Nome" />
          </InputContainer>
          <Spacing />
          <InputContainer>
            <input placeholder="Email" />
          </InputContainer>
          <Spacing />
          <InputContainer>
            <input placeholder="Senha" />
          </InputContainer>
          <Spacing />
          <Button>Cadastrar</Button>
          <BackToLogin>Já tem uma conta? Faça login</BackToLogin>
          <Spacing />
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Spacing />
        </Column>
      </RegisterContainer>
    </Container>
  );
};
