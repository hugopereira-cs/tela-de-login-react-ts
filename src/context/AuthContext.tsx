/**
 * @fileoverview Contexto de autenticação da aplicação.
 * Gerencia o estado de autenticação do usuário e fornece funções de logout.
 */

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { supabase } from '../services/supabase';
import { User } from '@supabase/supabase-js';

/**
 * Dados disponíveis no contexto de autenticação.
 * @typedef {Object} AuthContextData
 * @property {User | null} user - Objeto do usuário autenticado ou null se não autenticado
 * @property {boolean} isAuthenticated - Indica se o usuário está autenticado
 * @property {boolean} loading - Indica se o contexto está carregando o estado da sessão
 * @property {Function} logout - Função assíncrona para fazer logout do usuário
 */
interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  logout: () => Promise<void>;
}

/**
 * Contexto React para autenticação.
 * @type {React.Context<AuthContextData>}
 */
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/**
 * Provedor de contexto de autenticação.
 * Escuta mudanças de estado de autenticação do Supabase e fornece os dados aos componentes filhos.
 * @component
 * @param {Object} props - Props do componente
 * @param {ReactNode} props.children - Componentes filhos a serem envolvidos
 * @returns {JSX.Element} Provedor com contexto de autenticação
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se já existe uma sessão ativa ao carregar o app
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Escuta mudanças na autenticação (login/logout)
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  /**
   * Realiza o logout do usuário.
   * @async
   * @returns {Promise<void>}
   */
  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook personalizado para acessar o contexto de autenticação.
 * Deve ser utilizado dentro de um AuthProvider.
 * @returns {AuthContextData} Dados do contexto de autenticação
 * @throws {Error} Se utilizado fora de um AuthProvider
 * @example
 * const { user, isAuthenticated, logout } = useAuth();
 */
export const useAuth = () => useContext(AuthContext);
