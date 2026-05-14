import { HomeContainer, HomeText, Title } from './styles';
import { Container } from '../../components/Container/Container';

// TODO: Adicionar uma forma de mostrar o nome da pessoa logada detro do HomeText ou do Title
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
