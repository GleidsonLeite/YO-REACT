import React from 'react';

import logoImg from '../../assets/img/logo-white-1x.png';
import NavItem from './NavItem';

const Header: React.FC = () => (
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
            <NavItem className="nav-link page-scroll" href="testafeatures">
              Inicio
            </NavItem>
            <NavItem className="nav-link page-scroll" href="testafeatures">
              Features
            </NavItem>
            <NavItem className="nav-link page-scroll" href="testafeatures">
              Pricing
            </NavItem>
            <NavItem className="nav-link page-scroll" href="testafeatures">
              Screenshots
            </NavItem>
            <NavItem className="nav-link page-scroll" href="testafeatures">
              Contact
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
export default Header;
