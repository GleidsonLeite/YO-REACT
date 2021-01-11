import React, { useCallback, useState } from 'react';
import { MdPerson, MdExitToApp } from 'react-icons/md';
import { uuid } from 'uuidv4';
import Burguer from './Burguer';
import NavList from './NavList';
import NavItem, { NavItemProps } from './NavList/NavItem';

import { Container, Content, ProfilePhoto, Nav, ReturnToHome } from './style';

const SideBar: React.FC = () => {
  const [isContentHidden, setIsContentHidden] = useState(false);

  const handleBurguerOnClick = useCallback(() => {
    setIsContentHidden(!isContentHidden);
  }, [isContentHidden]);

  const [navItems, setNavItems] = useState<NavItemProps[]>([
    {
      Title: 'Investimentos',
      isActive: true,
      id: uuid(),
      path: '/dashboard2/main',
    },
    {
      Title: 'Saques',
      isActive: false,
      id: uuid(),
      path: '/dashboard2/main',
    },
    {
      Title: 'Depósitos',
      isActive: false,
      id: uuid(),
      path: '/dashboard2/main',
    },
    {
      Title: 'Perfil',
      isActive: false,
      id: uuid(),
      path: '/dashboard2/main',
    },
    {
      Title: 'Suporte',
      isActive: false,
      id: uuid(),
      path: '/dashboard2/main',
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
    <Container isHidden={isContentHidden}>
      <Burguer onClick={handleBurguerOnClick} isActive={!isContentHidden} />
      <Content>
        <ProfilePhoto>
          <MdPerson />
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
