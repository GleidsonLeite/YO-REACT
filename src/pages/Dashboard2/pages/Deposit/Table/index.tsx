import React from 'react';
import CreateDepositForm from './CreateDepositForm';
import DataContent from './DataContent';
import Filter from './Filter';
import Header from './Header';

import { Container, Content } from './style';

const Table: React.FC = () => {
  return (
    <Container>
      <Content>
        <Filter />
        <CreateDepositForm />
        <Header
          headers={[
            'Data de Envio',
            'Tipo',
            'Valor',
            'Cotação',
            'Valor recebido',
            'Status',
            'Detalhes',
          ]}
        />
        <DataContent />
      </Content>
    </Container>
  );
};

export default Table;
