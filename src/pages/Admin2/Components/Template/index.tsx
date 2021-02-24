import React from 'react';
import SideBar from '../Sidebar';

import { Container, Content, PageContainer } from './style';

interface TemplateProps {
  children: React.ReactNode;
}

function Template({ children }: TemplateProps) {
  return (
    <Container>
      <Content>
        <SideBar />
        <PageContainer>{children}</PageContainer>
      </Content>
    </Container>
  );
}

export default Template;
