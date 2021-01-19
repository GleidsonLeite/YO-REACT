import React, { LiHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link, useHistory } from 'react-router-dom';

import { Item } from './style';

export interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  isActive: boolean;
  Icon: IconBaseProps;
  id: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({
  isActive,
  Icon,
  path,
  id,
  ...rest
}) => {
  return (
    <Item id={id} isActive={isActive} {...rest}>
      <div>{Icon}</div>
    </Item>
  );
};

export default NavItem;
