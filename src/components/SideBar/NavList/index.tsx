import React from 'react';

import { List } from './style';

const NavList: React.FC = ({ children }) => {
  return <List>{children}</List>;
};

export default NavList;
