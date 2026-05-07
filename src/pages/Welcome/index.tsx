import { ButtonContainer, Container, Title, WelcomeContainer, CardContainer } from './styles';

export const Welcome = () => {
  return (
    <Container>
      <WelcomeContainer>
        <Title>Olá, seja muito bem-vindo à Minha Plataforma!</Title>
      </WelcomeContainer>
      <CardContainer>
        <ButtonContainer>
          {/* Aqui você pode adicionar botões ou links para navegar para outras partes do seu portfólio */}
        </ButtonContainer>
      </CardContainer>
    </Container>
  );
};
