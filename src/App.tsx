import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppThemeProvider } from './context/ThemeContext';
import GlobalStyles from './global';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/index';
import { Welcome } from './pages/Welcome/index';
import { Register } from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import { Home } from './pages/Home';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute';
import { Toaster } from 'sonner';
import { Loader } from 'lucide-react';

const AppRoutes = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gap: '15px'
        }}>
        <h1>Carregando...</h1>
        <div style={{ animation: 'spin 1s linear infinite' }}>
          <Loader size={48} />
        </div>
      </div>
    );
  }

  return (
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
  );
};

export default function App() {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <GlobalStyles />
        <Toaster position="top-center" richColors />
        <AppRoutes />
      </AuthProvider>
    </AppThemeProvider>
  );
}
