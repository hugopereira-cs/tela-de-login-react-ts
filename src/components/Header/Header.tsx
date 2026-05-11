import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { Container } from './styles';
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Container>
      {isAuthenticated && <button onClick={logout}>Logout</button>}
      <ThemeToggleButton />
    </Container>
  );
};
