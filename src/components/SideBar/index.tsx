import React, { useEffect, useState } from 'react';
import { MdExitToApp, MdHome, MdDashboard, MdPerson } from 'react-icons/md';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { uuid } from 'uuidv4';
import { useHistory, useRouteMatch } from 'react-router-dom';
import NavList from './NavList';
import NavItem, { NavItemProps } from './NavList/NavItem';

import { Container, Content, ProfilePhoto, Nav } from './style';

const SideBar: React.FC = () => {
  const history = useHistory();

  const [navItems, setNavItems] = useState<NavItemProps[]>([
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2',
      Icon: <MdHome />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2/Withdraws',
      Icon: <GiReceiveMoney />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2/Deposits',
      Icon: <GiPayMoney />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2/Profile',
      Icon: <MdPerson />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2/Support',
      Icon: <BiSupport />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/',
      Icon: <MdExitToApp />,
    },
  ]);

  const { path } = useRouteMatch();
  useEffect(() => {
    setNavItems([
      ...navItems.map((navItem) => {
        return { ...navItem, isActive: navItem.path === path };
      }),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <Container>
      <Content>
        <ProfilePhoto>
          <MdDashboard />
        </ProfilePhoto>
        <Nav>
          <NavList>
            {navItems.map((navItem) => {
              return (
                <NavItem
                  key={navItem.id}
                  {...navItem}
                  onClick={() => {
                    history.push(navItem.path);
                  }}
                />
              );
            })}
          </NavList>
        </Nav>
      </Content>
    </Container>
  );
};

export default SideBar;
