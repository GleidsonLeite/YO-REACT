import React from 'react';
import DataContent from './DataContent';
import { Container, Content, Title, DataContainer } from './style';

const Table: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          <h1>Tabela</h1>
        </Title>
        <DataContainer>
          <DataContent />
        </DataContainer>
      </Content>
    </Container>
  );
};

export default Table;
