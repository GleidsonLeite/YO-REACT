import React from 'react';
import { Container } from './style';

interface HeaderProps {
  items: string[];
}
function Header({ items }: HeaderProps) {
  return (
    <Container>
      <p>#</p>
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </Container>
  );
}

export default Header;
