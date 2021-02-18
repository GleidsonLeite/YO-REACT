import React from 'react';

import { Container } from './style';
import Table from './Table';
import { DepositDataProvider } from './Table/Hooks/deposits';

const DepositPage: React.FC = () => {
  return (
    <Container>
      <DepositDataProvider>
        <Table />
      </DepositDataProvider>
    </Container>
  );
};

export default DepositPage;
