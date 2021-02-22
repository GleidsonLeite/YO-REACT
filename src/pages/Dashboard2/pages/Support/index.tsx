import React from 'react';
import { Container, Content } from './style';
import Presentation from './Presentation';
import Form from './Form';
import Dashboard2Template from '../Template';

const Support: React.FC = () => {
  return (
    <Dashboard2Template>
      <Container>
        <Content>
          <Presentation />
          <Form />
        </Content>
      </Container>
    </Dashboard2Template>
  );
};

export default Support;
