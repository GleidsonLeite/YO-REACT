import React, { useCallback } from 'react';
import { MdMenu } from 'react-icons/md';

import { Container } from './style';

interface NavbarProps {
  isSidebarVisible: boolean;
  handleOnHideSidebarButtonClick?(): void;
}

function NavBar({
  isSidebarVisible,
  handleOnHideSidebarButtonClick,
}: NavbarProps) {
  return (
    <Container>
      {!isSidebarVisible && <MdMenu onClick={handleOnHideSidebarButtonClick} />}
      <h1>Navbar</h1>
    </Container>
  );
}

export default NavBar;
