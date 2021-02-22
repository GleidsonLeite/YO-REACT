import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../../../../services/api';
import Button from '../../../../Components/Button';
import Modal from '../../../../Components/Modal';
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
  const [isDetailsHidden, setIsDetailsHidden] = useState<boolean>(true);
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

  const handleSeeDetailsButtonOnClick = useCallback(() => {
    setIsDetailsHidden(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsDetailsHidden(true);
  }, []);

  return (
    <Container>
      {withdraws.map((withdraw) => (
        <RowContent
          key={withdraw.id}
          data={[
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
            {
              label: 'Detalhes',
              value: (
                <Button onClick={handleSeeDetailsButtonOnClick}>
                  Visualizar
                </Button>
              ),
            },
          ]}
        />
      ))}
      {!isDetailsHidden && <Modal onClose={handleCloseModal} />}
    </Container>
  );
};

export default DataContent;
