import React from 'react';
import DataContent from './DataContent';
import CreateWithdrawForm from './CreateWithdrawForm';
import Header from './Header';

import { Container, Content } from './style';

const Table: React.FC = () => {
  return (
    <Container>
      <Content>
        <CreateWithdrawForm />
        <Header />
        <DataContent />
      </Content>
    </Container>
  );
};

export default Table;
