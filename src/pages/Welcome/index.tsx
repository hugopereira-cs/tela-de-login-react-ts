/**
 * @fileoverview Página de bem-vindo (página inicial pública).
 * Exibe uma tela de boas-vindas com botões para login e registro.
 */

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

/**
 * Página de bem-vindo da aplicação.
 * Exibe uma mensagem de boas-vindas e botões para acessar login ou registro.
 * Esta é a primeira página vista por usuários não autenticados.
 * @component
 * @returns {JSX.Element} Página de boas-vindas com botões de navegação
 * @example
 * <Route path="/" element={<Welcome />} />
 */
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
