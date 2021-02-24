import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import getConfigToRequestWithToken from '../utils/getConfigToRequestWithToken';
import { UserData } from './Auth';

export interface RoleData {
  id: string;
  name: string;
  permission_value: number;
}

interface RoleContextData {
  role: RoleData;
  isUserAdmin: boolean;
  setIsUserAdmin(isUserAdmin: boolean): void;
  setRole(role: RoleData): void;
}

const RoleContext = createContext<RoleContextData>({} as RoleContextData);

export const RoleProvider: React.FC = ({ children }) => {
  const [role, setRole] = useState<RoleData>({} as RoleData);
  const getRoleFromApi = useCallback(async (user: UserData) => {
    const config = getConfigToRequestWithToken({});

    const response = await api.get(`roles/${user.role_id}`, config);
    const { id, name, permission_value } = response.data;
    setRole({ id, name, permission_value });
  }, []);

  const [isUserAdmin, setIsUserAdmin] = useState<boolean>(false);
  const verifyIfIsAdmin = useCallback(async () => {
    const config = getConfigToRequestWithToken({});
    const isAdmin = (await api.get('/roles/verifyIfIsAdmin/', config)).data;
    setIsUserAdmin(isAdmin);
    console.log(isAdmin);
  }, []);

  useEffect(() => {
    verifyIfIsAdmin();
  }, [verifyIfIsAdmin]);

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        isUserAdmin,
        setIsUserAdmin,
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

  return context;
}
