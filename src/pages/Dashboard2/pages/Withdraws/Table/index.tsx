import React from 'react';
import CreateWithdrawForm from './CreateWithdrawForm';
import Header from './Header';

import { Container, Content } from './style';

const Table: React.FC = () => {
  return (
    <Container>
      <Content>
        <CreateWithdrawForm />
        <Header />
      </Content>
    </Container>
  );
};

export default Table;
