import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ReactNode } from 'react';

/**
 * Componente de rota pública que redireciona usuários autenticados para a página inicial, caso tentem acessar uma rota pública.
 */

export const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  // Se o usuário estiver autenticado e tenta acessar uma rota pública, ele é mandado para a home
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};
