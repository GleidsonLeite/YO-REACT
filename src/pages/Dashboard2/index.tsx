import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import Routes from './routes';

import { Container, Content, SidebarContainer, PageContainer } from './style';

const Dashboard2: React.FC = () => {
  return (
    <Container>
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
  );
};

export default Dashboard2;
