import {
  ButtonContainer,
  Container,
  Title,
  WelcomeContainer,
  CardContainer,
  Subtitle,
  Button,
  Registred
} from './styles';

export const Welcome = () => {
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
          <Button>Cadastre-se</Button>
          <Registred>Já tem uma conta? Faça login</Registred>
          <Button>Login</Button>
        </ButtonContainer>
      </CardContainer>
    </Container>
  );
};
