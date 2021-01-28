import React, { useCallback, useState } from 'react';
import Button from '../../../../../../Components/Button';
import BankForm from '../BankForm';
import BankSlipForm from '../BankSlipForm';
import NetellerForm from '../NetellerForm';

import { Container, PresentationContainer, OptionsContainer } from './style';

const DepositOption: React.FC = () => {
  const [depositOption, setDepositOption] = useState<number>(0);

  const renderDepositOption = useCallback(() => {
    switch (depositOption) {
      case 1:
        return <NetellerForm />;
      case 2:
        return <BankForm />;
      case 3:
        return <BankSlipForm />;
      default:
        return <></>;
    }
  }, [depositOption]);

  return (
    <Container>
      <PresentationContainer>
        <h1>Escolha uma opção para realização do depósito</h1>
      </PresentationContainer>
      <OptionsContainer>
        <Button
          onClick={() => {
            setDepositOption(1);
          }}
        >
          Netteler
        </Button>
        <Button
          onClick={() => {
            setDepositOption(2);
          }}
        >
          Transferência Bancária
        </Button>
        <Button
          onClick={() => {
            setDepositOption(3);
          }}
        >
          Boleto Bancário
        </Button>
        <Button>Transferência Internacional</Button>
      </OptionsContainer>
      {renderDepositOption()}
    </Container>
  );
};

export default DepositOption;
