import React, { useCallback, useState } from 'react';
import { Investment } from '../../DataContent';
import { useSlide } from '../Components/Slide/hooks/Slide';
import AttachDocument from './Pages/AttachDocument';
import AuthConfirmation from './Pages/AuthConfirmation';
import BankForm from './Pages/BankForm';
import BankSlipForm from './Pages/BankSlipForm';
import DepositOption from './Pages/DepositOption';
import NetellerForm from './Pages/NetellerForm';
import Presentation from './Pages/Presentation';

import { Container, Content } from './style';

const Form: React.FC = () => {
  const { currentPageNumber } = useSlide();
  const [deposit, setDeposit] = useState<Investment>();
  const [depositOption, setDepositOption] = useState<number>(0);

  const renderDepositOption = useCallback(() => {
    switch (depositOption) {
      case 0:
        return <NetellerForm />;
      case 1:
        return <BankForm />;
      case 2:
        return <BankSlipForm />;
      default:
        return <NetellerForm />;
    }
  }, [depositOption]);

  const renderSlide = useCallback(() => {
    switch (currentPageNumber) {
      case 0:
        return <Presentation />;
      case 1:
        return <DepositOption setDepositOption={setDepositOption} />;
      case 2:
        return renderDepositOption();
      case 3:
        return <AuthConfirmation setDeposit={setDeposit} />;
      case 4:
        return <AttachDocument deposit={deposit as Investment} />;
      default:
        return <Presentation />;
    }
  }, [currentPageNumber, deposit, renderDepositOption]);

  return (
    <Container>
      <Content>{renderSlide()}</Content>
    </Container>
  );
};
export default Form;
