import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { LogoutButton, Container, Wrapper } from './styles';
import { useAuth } from '../../context/AuthContext';
import { Settings } from 'lucide-react';

// TODO: Criar mecanismo para que, quando o logout acontecer, o usuário seja redirecionado para a tela de login. Atualmente, o logout apenas limpa a sessão, mas o usuário permanece na mesma página.

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
