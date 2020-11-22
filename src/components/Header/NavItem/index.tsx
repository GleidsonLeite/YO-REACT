import React, { LinkHTMLAttributes } from 'react';

type AnchorProps = LinkHTMLAttributes<HTMLAnchorElement>;

const NavItem: React.FC<AnchorProps> = ({ children, ...rest }) => (
  <li className="nav-item">
    <a {...rest}>{children}</a>
  </li>
);

export default NavItem;
