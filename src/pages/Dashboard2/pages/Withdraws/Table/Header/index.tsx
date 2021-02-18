import React from 'react';

import { Container } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>ID</h1>
      <h1>Data de Envio</h1>
      <h1>Destino</h1>
      <h1>Valor</h1>
      <h1>Status</h1>
    </Container>
  );
};

export default Header;
