import React, { useCallback } from 'react';
import Button from '../../../../../../Components/Button';
import { useCarousel } from '../../../../../../Components/Carousel/Hooks';
import WithdrawOptions from '../WithdrawOptions';

import { Container, Content, TextContent, ControlButton } from './style';

const Presentation: React.FC = () => {
  const { setCurrentComponent, setSlideValue } = useCarousel();

  const handleOnNextClick = useCallback(() => {
    setCurrentComponent(<WithdrawOptions />);
    setSlideValue(1);
  }, [setCurrentComponent, setSlideValue]);

  return (
    <Container>
      <Content>
        <TextContent>
          <h1>Gostaria de realizar um saque?</h1>
        </TextContent>
        <ControlButton>
          <Button onClick={handleOnNextClick}>Próximo</Button>
        </ControlButton>
      </Content>
    </Container>
  );
};

export default Presentation;
