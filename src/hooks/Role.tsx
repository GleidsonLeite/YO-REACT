import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import { UserData } from './Auth';

interface RoleData {
  id: string;
  name: string;
  permission_value: number;
}

interface RoleContextData {
  role: RoleData;
  setRole(role: RoleData): void;
  getRoleFromApi(user: UserData): void;
}

const RoleContext = createContext<RoleContextData>({} as RoleContextData);

export const RoleProvider: React.FC = ({ children }) => {
  const [role, setRole] = useState<RoleData>({} as RoleData);

  const getRoleFromApi = useCallback(async (user: UserData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
      },
    };
    const response = (await api.get(`/roles/${user.id}`, config)) as RoleData;
    setRole(response);
  }, []);

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        getRoleFromApi,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export function useRole(): RoleContextData {
  const context = useContext(RoleContext);

  if (!context) {
    throw new Error('useRole must be used within a AuthProvider');
  }

  const { role, setRole, getRoleFromApi } = context;

  return { role, setRole, getRoleFromApi };
}
