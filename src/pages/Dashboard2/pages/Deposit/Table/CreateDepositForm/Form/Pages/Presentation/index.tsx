import React, { useCallback } from 'react';
import Button from '../../../../../../../Components/Button';
import { useSlide } from '../../../Components/Slide/hooks/Slide';

import { PresentationContainer } from './style';

const Presentation: React.FC = () => {
  const { setCurrentPageNumber } = useSlide();
  const handleOnNextButtonClick = useCallback(() => {
    setCurrentPageNumber(1);
  }, [setCurrentPageNumber]);
  return (
    <PresentationContainer>
      <h1>Olá, vamos realizar um investmento!?</h1>
      <Button onClick={handleOnNextButtonClick}>Próximo</Button>
    </PresentationContainer>
  );
};

export default Presentation;
