import React from 'react';
import { LinkProps } from 'react-router-dom';
import { NavList, StyledLink } from './styles';

interface NavItemProps extends LinkProps {
  isHidden: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ children, isHidden, ...rest }) => (
  <NavList isHidden={isHidden}>
    <StyledLink {...rest}>{children}</StyledLink>
  </NavList>
);

export default NavItem;
