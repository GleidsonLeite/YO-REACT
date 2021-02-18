import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../../../../services/api';
import { useDepositData } from '../Hooks/deposits';
import RowContent from './RowContent';
import { Container } from './style';

interface BankSlipData {
  value: string;
}

interface NetellerData {
  account: string;
  value: string;
}

interface InternationMoneyTransferData {
  bank_name: string;
  bank_code: string;
  bank_account_holder: string;
  bank_account_number: string;
  deposit_value: string;
}

export interface Investment {
  id: string;
  investor_id: string;
  value: string;
  deposit_option: number;
  password: string;
  depositData: BankSlipData | NetellerData | InternationMoneyTransferData;
  created_at: string;
  confirmed: boolean;
}

const DataContent: React.FC = () => {
  const depositOptions = [
    'Boleto Bancário',
    'Neteller',
    'Transferência Internacional',
  ];
  const { deposits } = useDepositData();
  const [investments, setInvestments] = useState([] as Investment[]);
  useEffect(() => {
    setInvestments([...deposits]);
  }, [deposits]);
  return (
    <Container>
      {investments.map((investment) => (
        <RowContent
          key={investment.id}
          data={[
            {
              label: 'ID',
              value: investment.id,
            },
            {
              label: 'Data de envio',
              value: new Date(investment.created_at).toLocaleDateString(
                'pt-BR',
              ),
            },
            {
              label: 'Tipo',
              value: depositOptions[investment.deposit_option],
            },
            {
              label: 'Valor',
              value: investment.value,
            },
            {
              label: 'Cotação',
              value: 5.0,
            },
            {
              label: 'Valor Recebido',
              value: investment.value,
            },
            {
              label: 'Status',
              value: investment.confirmed ? 'Confirmado' : 'Pendente',
            },
            {
              label: 'Comprovante',
              value: 'File',
            },
          ]}
        />
      ))}
    </Container>
  );
};

export default DataContent;
