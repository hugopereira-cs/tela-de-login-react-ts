import { useAppTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { ToggleButton } from './styles';

export const ThemeToggleButton = () => {
  const { toggleTheme } = useAppTheme();

  const isDarkMode = useAppTheme().theme.title === 'dark';

  return (
    <ToggleButton
      onClick={toggleTheme}
      style={{ position: 'fixed', top: 10, right: 10, zIndex: 999 }}>
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </ToggleButton>
  );
};
