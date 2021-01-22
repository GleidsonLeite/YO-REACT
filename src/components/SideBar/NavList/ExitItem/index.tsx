import React, { LiHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';

import { Item } from '../NavItem/style';

export interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  isActive: boolean;
  Icon: IconBaseProps;
  id: string;
  path: string;
}

const ExitItem: React.FC<NavItemProps> = ({
  isActive,
  Icon,
  path,
  id,
  ...rest
}) => {
  return (
    <Link to={path}>
      <Item id={id} isActive={isActive} {...rest}>
        <div>{Icon}</div>
      </Item>
    </Link>
  );
};

export default ExitItem;
