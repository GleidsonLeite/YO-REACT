import React, { useCallback, useState } from 'react';
import { MdExitToApp, MdHome, MdDashboard, MdPerson } from 'react-icons/md';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { uuid } from 'uuidv4';
import NavList from './NavList';
import NavItem, { NavItemProps } from './NavList/NavItem';

import { Container, Content, ProfilePhoto, Nav, ReturnToHome } from './style';

const SideBar: React.FC = () => {
  const [isContentHidden, setIsContentHidden] = useState(true);

  const handleBurguerOnClick = useCallback(() => {
    setIsContentHidden(!isContentHidden);
  }, [isContentHidden]);

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
      path: '/dashboard2/main',
      Icon: <GiReceiveMoney />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2/main',
      Icon: <GiPayMoney />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2/main',
      Icon: <MdPerson />,
    },
    {
      isActive: false,
      id: uuid(),
      path: '/dashboard2/main',
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
                  {...navItem}
                  onClick={() => {
                    handleOnAnyItemClick(navItem.id);
                  }}
                />
              );
            })}
          </NavList>
        </Nav>
        <ReturnToHome>
          <MdExitToApp />
        </ReturnToHome>
      </Content>
    </Container>
  );
};

export default SideBar;
