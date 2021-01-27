import React from 'react';

import { Container, SelectContainer } from './style';

const Select: React.FC = () => {
  return (
    <Container>
      <label htmlFor="options">Status</label>
      <SelectContainer name="options">
        <option value="all">Todos</option>
        <option value="pending">Pendente</option>
        <option value="confirmed">Confirmado</option>
        <option value="refused">Recusado</option>
        <option value="canceled">Cancelado</option>
      </SelectContainer>
    </Container>
  );
};

export default Select;
