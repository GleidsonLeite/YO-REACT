import React, { useCallback, useState } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/Sidebar';

import { Container, Content, PageContainer } from './style';

interface TemplateProps {
  children: React.ReactNode;
}

function Template({ children }: TemplateProps) {
  const [isSidebarHidden, setIsSideBarHidden] = useState<boolean>(true);
  const handleOnSidebarHideButtonClick = useCallback(() => {
    setIsSideBarHidden(!isSidebarHidden);
  }, [isSidebarHidden]);
  return (
    <Container>
      <Content>
        {!isSidebarHidden && (
          <SideBar
            isContentHidden={isSidebarHidden}
            handleOnHideNavBarButtonClick={handleOnSidebarHideButtonClick}
          />
        )}
        <PageContainer>
          <NavBar
            isSidebarVisible={!isSidebarHidden}
            handleOnHideSidebarButtonClick={handleOnSidebarHideButtonClick}
          />
          {children}
        </PageContainer>
      </Content>
    </Container>
  );
}

export default Template;
