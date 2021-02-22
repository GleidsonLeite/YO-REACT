import React from 'react';
import Dashboard2Template from '../Template';

import { Container } from './style';
import Table from './Table';
import { DepositDataProvider } from './Table/Hooks/deposits';

const DepositPage: React.FC = () => {
  return (
    <Dashboard2Template>
      <Container>
        <DepositDataProvider>
          <Table />
        </DepositDataProvider>
      </Container>
    </Dashboard2Template>
  );
};

export default DepositPage;
