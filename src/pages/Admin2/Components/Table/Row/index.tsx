import React from 'react';
import { Container } from './style';

interface RowProps {
  items: string[];
}
function Row({ items }: RowProps) {
  return (
    <Container>
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </Container>
  );
}

export default Row;
