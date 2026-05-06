import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './pages/Login/index';
import GlobalStyles from './global';
import { AppThemeProvider } from './context/ThemeContext';
import { ThemeToggleButton } from './components/ThemeToggleButton/ThemeToggleButton';

const Main = () => {
  return (
    <AppThemeProvider>
      <GlobalStyles />
      <ThemeToggleButton />
      <App />
    </AppThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
