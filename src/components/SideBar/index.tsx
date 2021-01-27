import React, { useCallback, useState } from 'react';
import { MdExitToApp, MdHome, MdDashboard, MdPerson } from 'react-icons/md';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { uuid } from 'uuidv4';
import { useHistory, useRouteMatch } from 'react-router-dom';
import NavList from './NavList';
import NavItem, { NavItemProps } from './NavList/NavItem';

import { Container, Content, ProfilePhoto, Nav } from './style';
import ExitItem from './NavList/ExitItem';

const SideBar: React.FC = () => {
  const history = useHistory();

  const [navItems, setNavItems] = useState<NavItemProps[]>([
    {
      isActive: true,
      id: uuid(),
      path: '/dashboard2/main',
      Icon: <MdHome />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2/Investments',
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
  ]);

  const handleOnAnyItemClick = useCallback(
    (data: string) => {
      setNavItems([
        ...navItems.map((navItem) => {
          return { ...navItem, isActive: navItem.id === data };
        }),
      ]);
    },
    [navItems],
  );

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
                    handleOnAnyItemClick(navItem.id);
                    history.push(navItem.path);
                  }}
                />
              );
            })}
            {/* {
      isActive: false,
      id: uuid(),
      path: '/',
      Icon: <MdExitToApp />,
    }, */}
            <ExitItem
              isActive={false}
              id={uuid()}
              path="/"
              Icon={<MdExitToApp />}
            />
          </NavList>
        </Nav>
      </Content>
    </Container>
  );
};

export default SideBar;
