import React, { useCallback } from 'react';
import Button from '../../../../../../../Components/Button';
import { useCarousel } from '../../../../../../../Components/Carousel/Hooks';
import { useDepositForm } from '../../hooks/DepositForm';
import BankForm from '../BankForm';
import BankSlipForm from '../BankSlipForm';
import NetellerForm from '../NetellerForm';

import { Container, Content, TextContent, ButtonsContainer } from './style';

interface IDepositOption {
  depositOption: number;
  page: React.ReactNode;
}

const DepositOption: React.FC = () => {
  const { setDepositOption: SetDepositOptionHook } = useDepositForm();

  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();

  const handleOnNextClick = useCallback(
    (data: IDepositOption) => {
      SetDepositOptionHook(data.depositOption);
      setCurrentComponent(data.page);
      setSlideValue(slideValue + 1);
    },
    [SetDepositOptionHook, setCurrentComponent, setSlideValue, slideValue],
  );

  return (
    <Container>
      <Content>
        <TextContent>
          <h1>Escolha uma opção para realização do depósito</h1>
        </TextContent>
        <ButtonsContainer>
          <Button
            onClick={() => {
              handleOnNextClick({
                depositOption: 0,
                page: <NetellerForm />,
              });
            }}
          >
            Netteler
          </Button>
          <Button
            onClick={() => {
              handleOnNextClick({
                depositOption: 1,
                page: <BankForm />,
              });
            }}
          >
            Transferência Bancária
          </Button>
          <Button
            onClick={() => {
              handleOnNextClick({
                depositOption: 2,
                page: <BankSlipForm />,
              });
            }}
          >
            Boleto Bancário
          </Button>
          <Button>Transferência Internacional</Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default DepositOption;
