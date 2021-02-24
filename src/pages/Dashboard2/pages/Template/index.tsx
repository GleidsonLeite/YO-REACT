import React from 'react';
import SideBar from '../../Components/SideBar';
import { Container, Content, SidebarContainer, PageContainer } from './style';

const Dashboard2Template: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <Content>
          <SidebarContainer>
            <SideBar />
          </SidebarContainer>
          <PageContainer>{children}</PageContainer>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard2Template;
