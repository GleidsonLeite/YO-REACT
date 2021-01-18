import React from 'react';
import { Container, Content } from './style';
import Presentation from './Presentation';
import Form from './Form';

const Support: React.FC = () => {
  return (
    <Container>
      <Content>
        <Presentation />
        <Form />
      </Content>
    </Container>
  );
};

export default Support;
