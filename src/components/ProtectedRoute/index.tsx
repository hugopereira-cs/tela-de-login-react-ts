/**
 * @fileoverview Componente de rota protegida.
 * Redireciona usuários não autenticados para a página de login.
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { JSX } from 'react';

/**
 * Componente de rota protegida que requer autenticação.
 * Se o usuário não estiver autenticado, redireciona para a página de login.
 * Caso contrário, renderiza o conteúdo protegido normalmente.
 * @component
 * @param {Object} props - Props do componente
 * @param {JSX.Element} props.children - Componente ou conteúdo a ser protegido
 * @returns {JSX.Element} Conteúdo protegido ou redirecionamento para login
 * @example
 * <Route
 *   path="/home"
 *   element={
 *     <ProtectedRoute>
 *       <Home />
 *     </ProtectedRoute>
 *   }
 * />
 */
export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
