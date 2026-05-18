/**
 * @fileoverview Componente de rota pública.
 * Redireciona usuários autenticados para a página inicial se tentarem acessar rotas públicas.
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ReactNode } from 'react';

/**
 * Componente de rota pública que previne usuários autenticados de acessar.
 * Se o usuário estiver autenticado e tentar acessar uma rota pública (login, registro, bem-vindo),
 * é redirecionado para a página inicial (/home).
 * Caso contrário (não autenticado), o conteúdo público é renderizado normalmente.
 * @component
 * @param {Object} props - Props do componente
 * @param {ReactNode} props.children - Componente ou conteúdo público
 * @returns {JSX.Element} Conteúdo público ou redirecionamento para home
 * @example
 * <Route
 *   path="/login"
 *   element={
 *     <PublicRoute>
 *       <Login />
 *     </PublicRoute>
 *   }
 * />
 */
export const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  // Se o usuário estiver autenticado e tenta acessar uma rota pública, ele é mandado para a home
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};
