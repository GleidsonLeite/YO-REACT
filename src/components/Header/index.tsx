import React, { useCallback, useEffect, useState } from 'react';

import { Logo, Nav, NavLinks, Container } from './styles';

import NavItem from './NavItem';
import Burguer from './Burguer';
import { useAuth } from '../../hooks/Auth';
import { useRole } from '../../hooks/Role';

import LogoImage from '../../assets/img/YO_LOGO.svg';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPageOnTop, setIsPageOnTop] = useState(true);
  const { user, signOut } = useAuth();

  const [isUserLogged, setIsUserLogged] = useState(typeof user !== 'undefined');
  const { role } = useRole();
  const handleBurguerOnClick = useCallback(() => {
    setIsClicked(!isClicked);
  }, [isClicked]);

  const getPageHeight = useCallback(() => {
    const { scrollY } = window;
    setIsPageOnTop(scrollY === 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', getPageHeight);
    return () => {
      window.removeEventListener('scroll', getPageHeight);
    };
  });

  const handleLogout = useCallback(() => {
    signOut();
    setIsUserLogged(false);
  }, [signOut]);

  return (
    <Container>
      <Nav isOnTop={isPageOnTop}>
        <Logo>
          <img src={LogoImage} alt="YO-LOGO" />
        </Logo>

        <NavLinks isClicked={isClicked}>
          <NavItem to="/" isHidden={isClicked}>
            Home
          </NavItem>

          {!isUserLogged && (
            <>
              <NavItem to="/signIn" isHidden={isClicked}>
                Entrar
              </NavItem>
              <NavItem to="/signUp" isHidden={isClicked}>
                Cadastre-se
              </NavItem>
            </>
          )}

          {isUserLogged && (
            <>
              {role.permission_value === 32 && (
                <>
                  <NavItem to="/admin" isHidden={isClicked}>
                    Admin
                  </NavItem>
                  <NavItem to="/closeInvestment" isHidden={isClicked}>
                    Ciclo
                  </NavItem>
                </>
              )}

              <NavItem to="/dashboard" isHidden={isClicked}>
                Dashboard
              </NavItem>

              <NavItem to="/" isHidden={isClicked} onClick={handleLogout}>
                Sair
              </NavItem>
            </>
          )}
        </NavLinks>

        <Burguer isClicked={isClicked} onClick={handleBurguerOnClick} />
      </Nav>
    </Container>
  );
};
export default Header;
