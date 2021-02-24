import React, { useCallback, useEffect, useState } from 'react';
import { IInvestment } from '../../../../../../DTOs/IInvestment';
import { INetellerDeposit } from '../../../../../../DTOs/INetellerDeposit';
import Button from '../../../../Components/Button';
import Modal from '../../../../Components/Modal';
import { useDepositData } from '../Hooks/deposits';
import DetailPage from './DetailPage';
import RowContent from './RowContent';
import { Container } from './style';

interface BankSlipData {
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
  depositData: BankSlipData | INetellerDeposit | InternationMoneyTransferData;
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
  const [investments, setInvestments] = useState([] as IInvestment[]);

  useEffect(() => {
    setInvestments([...deposits]);
  }, [deposits]);

  const [isDetailsHidden, setIsDetailsHidden] = useState<boolean>(true);
  const [currentInvestmentForDetail, setCurrentInvestmentForDetail] = useState<
    IInvestment
  >({} as IInvestment);
  const handleSeeDetailsButtonOnClick = useCallback((investment) => {
    setCurrentInvestmentForDetail(investment);
    setIsDetailsHidden(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsDetailsHidden(true);
  }, []);

  return (
    <Container>
      {investments.map((investment) => (
        <RowContent
          key={investment.id}
          data={[
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
              label: 'Detalhes',
              value: (
                <Button
                  onClick={() => {
                    handleSeeDetailsButtonOnClick(investment);
                  }}
                >
                  Visualizar
                </Button>
              ),
            },
          ]}
        />
      ))}
      {!isDetailsHidden && (
        <Modal onClose={handleCloseModal}>
          <DetailPage investment={currentInvestmentForDetail} />
        </Modal>
      )}
    </Container>
  );
};

export default DataContent;
