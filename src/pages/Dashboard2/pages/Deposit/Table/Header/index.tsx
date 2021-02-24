import React from 'react';
import { uuid } from 'uuidv4';

import { Container } from './style';

interface HeaderProps {
  headers: string[];
}

const Header: React.FC<HeaderProps> = ({ headers }) => {
  return (
    <Container>
      {headers.map((header) => (
        <h1 key={uuid()}>{header}</h1>
      ))}
    </Container>
  );
};

export default Header;
