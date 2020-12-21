import React from 'react';

import { Container, Title, Content } from './styles';

interface AccordionProps {
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
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
