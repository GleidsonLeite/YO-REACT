/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

export interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  resume: string;
  activated: boolean;
  amount: string;
  role_id: string;
  id: string;
  identity_slip: string;
  cpf: string;
  address_id: string;
  frontIdentityFile: string;
  selfieIdentityFile: string;
  backIdentityFile: string;
}

interface AuthState {
  token: string;
  user: UserData;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserData;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: UserData): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  // Verificando se já foi preenchido
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@YO:token');
    const user = localStorage.getItem('@YO:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { token, user } = response.data;

    // Armazenando dados em localStorage
    localStorage.setItem('@YO:token', token);
    localStorage.setItem('@YO:user', JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@YO:token');
    localStorage.removeItem('@YO:user');
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback((user: UserData) => {
    const token = localStorage.getItem('@YO:token');
    localStorage.setItem('@YO:token', token as string);
    localStorage.setItem('@YO:user', JSON.stringify(user));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
