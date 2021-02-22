import React from 'react';

import { Container } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      {/* <h1>ID</h1> */}
      <h1>Data de Envio</h1>
      <h1>Tipo</h1>
      <h1>Valor</h1>
      <h1>Cotação</h1>
      <h1>Valor recebido</h1>
      <h1>Status</h1>
      <h1>Comprovante</h1>
    </Container>
  );
};

export default Header;
