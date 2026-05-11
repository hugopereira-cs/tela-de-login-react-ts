import { HomeContainer, HomeText, Title } from './styles';
import { Container } from '../../components/Container/Container';

export const Home = () => {
  return (
    <Container>
      <HomeContainer>
        <Title>Bem vindo a área de usuário!</Title>
        <HomeText>
          Esta é a página inicial do usuário, onde você pode acessar suas informações e
          configurações.
        </HomeText>
      </HomeContainer>
    </Container>
  );
};
