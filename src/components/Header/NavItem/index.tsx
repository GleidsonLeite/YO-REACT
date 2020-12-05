import React, { LinkHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type AnchorProps = LinkHTMLAttributes<HTMLAnchorElement>;

const NavItem: React.FC<LinkProps> = ({ children, ...rest }) => (
  <li className="nav-item">
    <Link {...rest}>{children}</Link>
  </li>
);

export default NavItem;
