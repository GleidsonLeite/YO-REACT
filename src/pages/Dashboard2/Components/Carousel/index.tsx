import React, { useEffect, useState } from 'react';
import { useCarousel } from './Hooks';
import { Content, Toggle, Footer } from './style';

const Carousel: React.FC = () => {
  const { currentComponent: CurrentComponent, numberOfSlides } = useCarousel();
  const [togglesState, setTogglesState] = useState<boolean[]>(
    new Array(numberOfSlides).fill(false),
  );
  const { slideValue } = useCarousel();
  useEffect(() => {
    const newToggles = new Array(numberOfSlides).fill(false);
    setTogglesState([...newToggles.map((_, index) => index === slideValue)]);
  }, [numberOfSlides, slideValue]);
  return (
    <Content>
      {CurrentComponent}
      <Footer>
        {togglesState.map((toggleState, index) => (
          <Toggle isActive={toggleState} key={String(index)} />
        ))}
      </Footer>
    </Content>
  );
};

export default Carousel;
