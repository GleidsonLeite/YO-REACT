import React, { useEffect, useState } from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';
import { useRole } from '../hooks/Role';
import verifyIfIsUserLogged from '../utils/verifuIfIsUserLogged';

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

  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  useEffect(() => {
    const isUserLoggedInApplication = verifyIfIsUserLogged();
    setIsUserLogged(isUserLoggedInApplication);
    if (!isUserLoggedInApplication) {
      setIsUserLogged(false);
      signOut();
    }
  }, [signOut]);

  const { isUserAdmin: isAdmin } = useRole();

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
