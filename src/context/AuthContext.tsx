import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: { email: string; password: string }) => void;
  register: (data: { name: string; email: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const users: User[] = [];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = (credentials: { email: string; password: string }) => {
    const foundUser = users.find(u => u.email === credentials.email);
    if (foundUser) {
      setUser(foundUser);
      navigate('/');
    } else {
      alert('Usuario no encontrado');
    }
  };

  const register = (data: { name: string; email: string; password: string }) => {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name,
      email: data.email,
    };
    users.push(newUser);
    setUser(newUser);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}