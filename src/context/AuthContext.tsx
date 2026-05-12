import { createContext, useState, useContext, ReactNode } from 'react';

/**
 * Contexto de autenticação para gerenciar o estado de login do usuário.
 * Fornece funções para login e logout, além de um estado booleano para indicar se o usuário está autenticado.gemin
 */
interface AuthContextData {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
