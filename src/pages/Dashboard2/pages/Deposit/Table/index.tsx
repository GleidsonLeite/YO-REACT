import React from 'react';
import DataContent from './DataContent';
import Header from './Header';

import { Container, Content } from './style';

const Table: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <DataContent />
      </Content>
    </Container>
  );
};

export default Table;
