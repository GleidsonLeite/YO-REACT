import React from 'react';
import Dashboard2Template from '../Template';

import { Container } from './style';
import Table from './Table';

const WithdrawPage: React.FC = () => {
  return (
    <Dashboard2Template>
      <Container>
        <Table />
      </Container>
    </Dashboard2Template>
  );
};

export default WithdrawPage;
