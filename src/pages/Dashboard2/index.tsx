import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import NavBar from './Components/NavBar';
import Routes from './routes';

import { Container, Content, SidebarContainer, PageContainer } from './style';

const Dashboard2: React.FC = () => {
  return (
    <>
      <Container>
        {/* <NavBar /> */}
        <Content>
          <BrowserRouter>
            <SidebarContainer>
              <SideBar />
            </SidebarContainer>
            <PageContainer>
              <Routes />
            </PageContainer>
          </BrowserRouter>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard2;
