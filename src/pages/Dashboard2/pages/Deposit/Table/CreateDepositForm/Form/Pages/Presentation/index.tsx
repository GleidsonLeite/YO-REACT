import React, { useCallback } from 'react';
import Button from '../../../../../../../Components/Button';
import { useCarousel } from '../../../../../../../Components/Carousel/Hooks';
import DepositOption from '../DepositOption';

import { Container, Content, TextContent, ControlButton } from './style';

const Presentation: React.FC = () => {
  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();

  const handleOnNextClick = useCallback(() => {
    setCurrentComponent(<DepositOption />);
    setSlideValue(slideValue + 1);
  }, [setCurrentComponent, setSlideValue, slideValue]);
  return (
    <Container>
      <Content>
        <TextContent>
          <h1>Olá, vamos realizar um investmento!?</h1>
        </TextContent>
        <ControlButton>
          <Button onClick={handleOnNextClick}>Próximo</Button>
        </ControlButton>
      </Content>
    </Container>
  );
};

export default Presentation;
