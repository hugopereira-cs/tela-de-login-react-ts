import {
  ButtonContainer,
  Title,
  WelcomeContainer,
  CardContainer,
  Subtitle,
  Button,
  Registred
} from './styles';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container/Container';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <WelcomeContainer>
        <Title>Olá, seja muito bem-vindo à Minha Plataforma!</Title>
        <Subtitle>
          Estamos felizes em tê-lo aqui. Explore nossos recursos e aproveite ao máximo sua
          experiência conosco.
        </Subtitle>
      </WelcomeContainer>
      <CardContainer>
        <Subtitle>Cadastre-se grátis e descubra tudo o que temos a oferecer!</Subtitle>
        <ButtonContainer>
          <Button title="Cadastre-se" onClick={() => navigate('/register')}>
            Cadastre-se
          </Button>
          <Registred>Já tem uma conta? Faça login</Registred>
          <Button title="Fazer Login" onClick={() => navigate('/login')}>
            Login
          </Button>
        </ButtonContainer>
      </CardContainer>
    </Container>
  );
};
