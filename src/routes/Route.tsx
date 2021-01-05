import React, { useEffect, useState } from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';
import { useRole, RoleData } from '../hooks/Role';
import { verifyExpiredToken } from '../utils/verifyExpiredToken';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isForAdmin?: boolean;
  isForUnactivated?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isForAdmin = false,
  isForUnactivated = false,
  component: Component,
  ...rest
}) => {
  const { user, signOut } = useAuth();
  const { role, getRoleFromApi, setRole } = useRole();
  const [isUserLogged, setIsUserLogged] = useState(typeof user !== 'undefined');
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsUserLogged(typeof user !== 'undefined');
    if (typeof user !== 'undefined') {
      (async function setRoleFromApi() {
        await getRoleFromApi(user);
      })();
      setIsAdmin(role.permission_value === 32);
    } else {
      setRole({} as RoleData);
      setIsAdmin(false);
    }
  }, [
    getRoleFromApi,
    isUserLogged,
    role.permission_value,
    setRole,
    signOut,
    user,
  ]);

  useEffect(() => {
    const token = localStorage.getItem('@YO:token');
    if (token) {
      const isTokenExpired = verifyExpiredToken(token);
      isTokenExpired && signOut();
      setIsUserLogged(false);
    }
  }, [signOut]);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (isPrivate) {
          if (isUserLogged) {
            if (!user.activated && isForUnactivated) {
              return <Component />;
            }
            if (user.activated && isForUnactivated) {
              return <Redirect to={{ pathname: '/dashboard' }} />;
            }
            if (!user.activated) {
              return <Redirect to={{ pathname: '/unactivated' }} />;
            }
            if (isForAdmin) {
              return isAdmin ? (
                <Component />
              ) : (
                <Redirect to={{ pathname: '/' }} />
              );
            }
            return <Component />;
          }
          return <Redirect to={{ pathname: '/signIn' }} />;
        }
        return <Component />;
      }}
    />
  );
};

export default Route;
