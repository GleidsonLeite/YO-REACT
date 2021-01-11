import React, { LiHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Item } from './style';

export interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  isActive: boolean;
  Title: string;
  id: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({
  isActive,
  Title,
  path,
  id,
  ...rest
}) => {
  return (
    <Item id={id} isActive={isActive} {...rest}>
      <Link to={path}>{Title}</Link>
    </Item>
  );
};

export default NavItem;
