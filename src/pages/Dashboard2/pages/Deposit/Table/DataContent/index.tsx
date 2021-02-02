import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../../../../services/api';
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
  const [investments, setInvestments] = useState<Investment[]>([]);

  const getInvestments = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
      },
    };
    const response = await api.get('/investments/list', config);
    setInvestments(response.data);
  }, []);

  useEffect(() => {
    getInvestments();
  }, [getInvestments]);

  return (
    <Container>
      {investments.map((investment) => (
        <RowContent
          key={investment.id}
          id={investment.id}
          sentData={investment.created_at}
          type={investment.deposit_option}
          value={investment.value}
          moneyQuotation="5.0"
          receivedValue={investment.value}
          status={investment.confirmed}
          receipt="file"
        />
      ))}
    </Container>
  );
};

export default DataContent;
