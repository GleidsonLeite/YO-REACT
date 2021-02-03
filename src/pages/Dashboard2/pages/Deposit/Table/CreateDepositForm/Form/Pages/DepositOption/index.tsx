import React from 'react';
import Button from '../../../../../../../Components/Button';
import { useSlide } from '../../../Components/Slide/hooks/Slide';
import { useDepositForm } from '../../hooks/DepositForm';

import { Container, PresentationContainer, OptionsContainer } from './style';

interface DepositOptionProps {
  setDepositOption(depositOption: number): void;
}

const DepositOption: React.FC<DepositOptionProps> = ({ setDepositOption }) => {
  const { setCurrentPageNumber } = useSlide();
  const { setDepositOption: SetDepositOptionHook } = useDepositForm();
  return (
    <Container>
      <PresentationContainer>
        <h1>Escolha uma opção para realização do depósito</h1>
      </PresentationContainer>
      <OptionsContainer>
        <Button
          onClick={() => {
            setDepositOption(0);
            setCurrentPageNumber(2);
            SetDepositOptionHook(1);
          }}
        >
          Netteler
        </Button>
        <Button
          onClick={() => {
            setDepositOption(1);
            setCurrentPageNumber(2);
            SetDepositOptionHook(0);
          }}
        >
          Transferência Bancária
        </Button>
        <Button
          onClick={() => {
            setDepositOption(2);
            setCurrentPageNumber(2);
            SetDepositOptionHook(0);
          }}
        >
          Boleto Bancário
        </Button>
        <Button>Transferência Internacional</Button>
      </OptionsContainer>
    </Container>
  );
};

export default DepositOption;
