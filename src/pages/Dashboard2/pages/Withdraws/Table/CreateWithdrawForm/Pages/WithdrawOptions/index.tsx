import React, { useCallback } from 'react';
import Button from '../../../../../../Components/Button';
import { useCarousel } from '../../../../../../Components/Carousel/Hooks';
import { useWithdrawForm } from '../../Hooks/WithdrawForm';
import BS2 from '../BS2';
import Neteller from '../Neteller';

import { Content, TextContent, ButtonsContainer } from './style';

const WithdrawOptions: React.FC = () => {
  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();
  const { setWithdrawOption } = useWithdrawForm();
  const handleOnBS2ButtonClick = useCallback(() => {
    setWithdrawOption(0);
    setCurrentComponent(<BS2 />);
    setSlideValue(slideValue + 1);
  }, [setCurrentComponent, setSlideValue, setWithdrawOption, slideValue]);
  const handleOnNetellerButtonClick = useCallback(() => {
    setWithdrawOption(1);
    setCurrentComponent(<Neteller />);
    setSlideValue(slideValue + 1);
  }, [setCurrentComponent, setSlideValue, setWithdrawOption, slideValue]);
  return (
    <Content>
      <TextContent>
        <h1>Escolha uma opção</h1>
      </TextContent>
      <ButtonsContainer>
        <Button onClick={handleOnBS2ButtonClick}>BS2</Button>
        <Button onClick={handleOnNetellerButtonClick}>Neteller</Button>
      </ButtonsContainer>
    </Content>
  );
};

export default WithdrawOptions;
