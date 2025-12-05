import { createContext, useContext, useState } from 'react';
import type { ReactNode, FC } from 'react';
import type { User, UserRole, AuthContextType } from './types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users untuk demo
const mockUsers: Record<string, { password: string; user: User }> = {
  'admin@pesantren.com': {
    password: 'admin123',
    user: {
      id: '1',
      name: 'Admin Pesantren',
      email: 'admin@pesantren.com',
      role: 'admin',
    },
  },
  'teacher@pesantren.com': {
    password: 'teacher123',
    user: {
      id: '2',
      name: 'Ustadz Ahmad',
      email: 'teacher@pesantren.com',
      role: 'teacher',
    },
  },
  'parent@pesantren.com': {
    password: 'parent123',
    user: {
      id: '3',
      name: 'Bapak Hasan',
      email: 'parent@pesantren.com',
      role: 'parent',
    },
  },
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockUser = mockUsers[email];
    if (mockUser && mockUser.password === password && mockUser.user.role === role) {
      setUser(mockUser.user);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
