import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppThemeProvider } from './context/ThemeContext';
import GlobalStyles from './global';
import { Header } from './components/Header/Header';

import { Login } from './pages/Login/index';
import { Welcome } from './pages/Welcome/index';
import { Register } from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import { Home } from './pages/Home';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute';

export default function App() {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Welcome />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            {/* Adicione outras rotas aqui, se necessário */}
          </Routes>
        </Router>
      </AuthProvider>
    </AppThemeProvider>
  );
}
