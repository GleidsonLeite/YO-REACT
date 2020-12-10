import React from 'react';

import { Container, Title, Content } from './styles';

const Accordion: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>Investimentos</Title>
      {/* <Panel />
      <Panel />
      <Panel />
      <Panel />
      <Panel />
      <Panel />
      <Panel /> */}
      <Content>{children}</Content>
    </Container>
  );
};

export default Accordion;
