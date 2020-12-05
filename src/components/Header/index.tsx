import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/img/logo-white-1x.png';
import { useAuth } from '../../hooks/Auth';
import { useRole } from '../../hooks/Role';
import NavItem from './NavItem';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const { role } = useRole();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(typeof user !== 'undefined');
  useEffect(() => {
    if (typeof user !== 'undefined') {
      setIsUserLogged(true);
      setIsAdmin(role.permission_value === 32);
    }
  }, [role.permission_value, user, isAdmin]);
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="test">
            <img src={logoImg} width="120" alt="logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu" />
          </button>

          <div
            className="collapse navbar-collapse main-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <NavItem className="nav-link page-scroll" to="/">
                Inicio
              </NavItem>
              <NavItem className="nav-link page-scroll" to="testafeatures">
                Features
              </NavItem>
              <NavItem className="nav-link page-scroll" to="testafeatures">
                Pricing
              </NavItem>
              <NavItem className="nav-link page-scroll" to="testafeatures">
                Screenshots
              </NavItem>

              {isUserLogged && isAdmin && (
                <NavItem to="/admin" className="nav-ling">
                  Administração
                </NavItem>
              )}
              {isUserLogged && (
                <NavItem to="/dashboard" className="nav-ling">
                  Dashboard
                </NavItem>
              )}

              {isUserLogged && (
                <NavItem to="/investment" className="nav-ling">
                  Investir
                </NavItem>
              )}

              {isUserLogged ? (
                <NavItem
                  className="nav-link page-scroll"
                  to="/signIn"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </NavItem>
              ) : (
                <NavItem
                  className="nav-link page-scroll"
                  to="/signIn"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign In
                </NavItem>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
