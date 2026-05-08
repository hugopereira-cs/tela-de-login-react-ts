import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppThemeProvider } from './context/ThemeContext';
import GlobalStyles from './global';
import { Header } from './components/Header/Header';

import { Login } from './pages/Login/index';
import { Welcome } from './pages/Welcome/index';
import { Register } from './pages/Register';

export default function App() {
  return (
    <AppThemeProvider>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Adicione outras rotas aqui, se necessário */}
        </Routes>
      </Router>
    </AppThemeProvider>
  );
}
