import { Button } from '../Welcome/styles';
import {
  BackToLogin,
  CardContainer,
  Column,
  Container,
  InputContainer,
  RegisterContainer,
  Spacing,
  Subtitle,
  Title
} from './styles';
import { useNavigate } from 'react-router-dom';

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
