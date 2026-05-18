/**
 * @fileoverview Página inicial (home) da aplicação.
 * Exibida apenas para usuários autenticados.
 */

import { HomeContainer, HomeText, Title } from './styles';
import { Container } from '../../components/Container/Container';
import { useAuth } from '../../context/AuthContext';

/**
 * Página inicial (home) da aplicação.
 * Exibe uma mensagem de boas-vindas personalizada com o nome ou email (nickname, antes da '@') do usuário autenticado.
 * É protegida pela rota ProtectedRoute e só é acessível a usuários autenticados.
 * @component
 * @returns {JSX.Element} Página inicial personalizada para o usuário
 * @example
 * <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
 */
export const Home = () => {
  const { user } = useAuth();

  /**
   * Determina o nome a exibir na página.
   * Prioridade:
   * 1. display_name dos metadados do usuário (nome fornecido no registro)
   * 2. Email do usuário (apenas a parte antes do @)
   * 3. "Usuário" como valor padrão
   * @type {string}
   */
  const userName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'Usuário';

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
