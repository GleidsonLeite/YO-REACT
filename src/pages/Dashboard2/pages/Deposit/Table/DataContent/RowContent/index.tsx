import React from 'react';
import { Container } from './style';

const RowContent: React.FC = () => {
  return (
    <Container>
      <p data-label="ID">000</p>
      <p data-label="Data de envio">27/01/2021</p>
      <p data-label="Tipo">Boleto</p>
      <p data-label="Valor">$ 1000,00</p>
      <p data-label="Cotação">$ 5,50</p>
      <p data-label="Valor Recebido">$ 1000,00</p>
      <p data-label="Status">Pendente</p>
      <p data-label="Comprovante">Arquivo</p>
    </Container>
  );
};

export default RowContent;
