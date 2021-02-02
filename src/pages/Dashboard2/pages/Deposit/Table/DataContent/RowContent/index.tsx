import React from 'react';
import { Container } from './style';

interface RowContentProps {
  id: string;
  sentData: string;
  type: number;
  value: string;
  moneyQuotation: string;
  receivedValue: string;
  status: boolean;
  receipt: string;
}

const RowContent: React.FC<RowContentProps> = ({
  id,
  sentData,
  type,
  value,
  moneyQuotation,
  receivedValue,
  status,
  receipt,
}) => {
  const sentDate = new Date(sentData);
  const depositOptions = [
    'Boleto Bancário',
    'Neteller',
    'Transferência Internacional',
  ];
  const statusOptions = status ? 'Confirmado' : 'Pendente';
  return (
    <Container>
      <p data-label="ID">{id}</p>
      <p data-label="Data de envio">{sentDate.toLocaleDateString('pt-BR')}</p>
      <p data-label="Tipo">{depositOptions[type]}</p>
      <p data-label="Valor">{value}</p>
      <p data-label="Cotação">{moneyQuotation}</p>
      <p data-label="Valor Recebido">{receivedValue}</p>
      <p data-label="Status">{statusOptions}</p>
      <p data-label="Comprovante">{receipt}</p>
    </Container>
  );
};

export default RowContent;
