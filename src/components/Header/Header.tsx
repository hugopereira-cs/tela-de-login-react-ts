import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { LogoutButton, Container, Wrapper } from './styles';
import { useAuth } from '../../context/AuthContext';
import { Settings } from 'lucide-react';

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
