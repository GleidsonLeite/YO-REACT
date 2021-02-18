import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { useCarousel } from './Hooks';
import { Content, Toggle, Footer } from './style';

const Carousel: React.FC = () => {
  const { currentComponent: CurrentComponent, numberOfSlides } = useCarousel();
  const [pages, setPages] = useState<React.ReactNode[]>([]);
  const [togglesState, setTogglesState] = useState<boolean[]>(
    new Array(numberOfSlides).fill(false),
  );
  const { slideValue } = useCarousel();

  useEffect(() => {
    const newToggles = new Array(numberOfSlides).fill(false);
    setTogglesState([...newToggles.map((_, index) => index === slideValue)]);
  }, [numberOfSlides, slideValue]);

  useEffect(() => {
    setPages([...pages, CurrentComponent]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentComponent]);

  const transitions = useTransition(slideValue, (page) => page, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return (
    <Content>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div style={props} key={key}>
            {pages[item]}
          </animated.div>
        );
      })}
      <Footer>
        {togglesState.map((toggleState, index) => (
          <Toggle isActive={toggleState} key={String(index)} />
        ))}
      </Footer>
    </Content>
  );
};

export default Carousel;
