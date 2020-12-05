import React, { useEffect, useState } from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';
import { useRole } from '../hooks/Role';
import api from '../services/api';
import { verifyExpiredToken } from '../utils/verifyExpiredToken';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  isAdmin?: boolean;
  forActivated?: boolean;
  component: React.ComponentType;
}

/**
 * Regras aqui
 *
 * Pagina Privada | Usuário autenticado | usuario autenticado
 * true/true/true = OK
 * true/true/false = Redirecionar para unactivated
 * true/false/true = Não existe
 * true/false/false = Redirecionar para login
 * false/true/true = OK
 * false/true/false = OK
 * false/false/true = Não existe
 * false/false/false = OK
 */

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isAdmin = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const { getRoleFromApi, role, setRole } = useRole();

  const [permissionValue, setPermissionValue] = useState(role.permission_value);
  const [isLoading, setIsLoading] = useState(true);
  const userIsLogged = typeof user !== 'undefined';
  const activated = userIsLogged ? user.activated : false;

  const isTokenExpired = verifyExpiredToken(
    localStorage.getItem('@YO:token') as string,
  );

  if (isTokenExpired) {
    localStorage.clear();
  }

  useEffect(() => {
    if (userIsLogged && activated && isLoading) {
      const getData = async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          },
        };
        try {
          const response = await api.get(`/roles/${user.role_id}`, config);
          const { permission_value } = response.data;
          setRole(response.data);
          setPermissionValue(permission_value);
          // getRoleFromApi(user);
          // setPermissionValue(role.permission_value);
          console.log(role.permission_value);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  }, [
    activated,
    isLoading,
    role.permission_value,
    user,
    userIsLogged,
    isAdmin,
  ]);
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (isPrivate) {
          if (userIsLogged) {
            if (isAdmin) {
              if (isLoading) {
                return <div className="App">Loading...</div>;
              }
              return permissionValue === 32 ? (
                <Component />
              ) : (
                <Redirect to={{ pathname: '/' }} />
              );
            }
            return activated ? (
              <Component />
            ) : (
              <Redirect to={{ pathname: '/unactivated' }} />
            );
          }
          return <Redirect to={{ pathname: '/signIn' }} />;
        }

        return <Component />;
      }}
    />
  );
};

export default Route;
