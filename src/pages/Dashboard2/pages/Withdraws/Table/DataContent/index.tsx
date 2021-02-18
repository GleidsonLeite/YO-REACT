import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../../../../services/api';
import RowContent from './RowContent';
import { Container } from './style';

export interface Withdraw {
  id: string;
  investor_id: string;
  withdraw_option: number;
  neteller_withdraw_id: string;
  bs2_withdraw_id: string;
  value: string;
  confirmed: boolean;
  data_confirmed: Date;
  created_at: Date;
  updated_at: Date;
}

const DataContent: React.FC = () => {
  const [withdraws, setWithDraws] = useState<Withdraw[]>([]);

  const withdrawsOptions = ['BS2', 'Neteller'];

  const getWithdraws = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
      },
    };
    const response = await api.get('/withdraws/list', config);
    setWithDraws(response.data);
  }, []);

  useEffect(() => {
    getWithdraws();
  }, [getWithdraws]);

  return (
    <Container>
      {withdraws.map((withdraw) => (
        <RowContent
          key={withdraw.id}
          data={[
            {
              label: 'ID',
              value: withdraw.id,
            },
            {
              label: 'Data de envio',
              value: new Date(withdraw.created_at).toLocaleDateString('pt-BR'),
            },
            {
              label: 'Destino',
              value: withdrawsOptions[withdraw.withdraw_option],
            },
            {
              label: 'Valor',
              value: withdraw.value,
            },
            {
              label: 'Status',
              value: withdraw.confirmed ? 'Confirmado' : 'Pendente',
            },
          ]}
        />
      ))}
    </Container>
  );
};

export default DataContent;
