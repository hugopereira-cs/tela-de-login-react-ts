/**
 * @fileoverview Componente de cabeçalho da aplicação.
 * Exibe um botão de logout (se autenticado), ícone de configuração (ainda não implementado) e botão de alternância de tema.
 */

import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { LogoutButton, Container, Wrapper } from './styles';
import { useAuth } from '../../context/AuthContext';
import { Settings } from 'lucide-react';

/**
 * Componente do cabeçalho da aplicação.
 * Exibe diferentes elementos dependendo do estado de autenticação:
 * - Se autenticado: exibe botão de logout e ícone de configuração
 * - Sempre: exibe botão de alternância de tema
 * @component
 * @returns {JSX.Element} Cabeçalho com elementos de navegação e controle
 * @example
 * <Header />
 */
export const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Container>
      <Wrapper>
        {isAuthenticated && (
          <>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
            <Settings size={24} />
          </>
        )}
        <ThemeToggleButton />
      </Wrapper>
    </Container>
  );
};
