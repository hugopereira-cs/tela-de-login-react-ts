import { HomeContainer, HomeText, Title } from './styles';
import { Container } from '../../components/Container/Container';
import { useAuth } from '../../context/AuthContext';

export const Home = () => {
  const { user } = useAuth();

  const userName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'Usuário'; // Exibe o nome de usuário ou nick do email (antes da @) ou "Usuário"

  return (
    <Container>
      <HomeContainer>
        <Title>Bem vindo {userName}!</Title>
        <HomeText>
          Esta é a página inicial do usuário, onde você pode acessar suas informações e
          configurações.
        </HomeText>
      </HomeContainer>
    </Container>
  );
};
