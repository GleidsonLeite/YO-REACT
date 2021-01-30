import React, { useCallback, useState } from 'react';
import { useSlide } from '../Components/Slide/hooks/Slide';
import AuthConfirmation from './AuthConfirmation';
import BankForm from './BankForm';
import BankSlipForm from './BankSlipForm';
import DepositOption from './DepositOption';
import NetellerForm from './NetellerForm';
import Presentation from './Presentation';

import { Container, Content } from './style';

const Form: React.FC = () => {
  const { setNumberOfPages, currentPageNumber } = useSlide();
  setNumberOfPages(4);
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
        return <AuthConfirmation />;
      default:
        return <Presentation />;
    }
  }, [currentPageNumber, renderDepositOption]);

  return (
    <Container>
      <Content>{renderSlide()}</Content>
    </Container>
  );
};
export default Form;
