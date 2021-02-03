import React, { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { useSlide } from './hooks/Slide';

import { Container, Content, Footer, Circle } from './style';

interface SlideMarkerProps {
  isActive: boolean;
}

const Slide: React.FC = ({ children }) => {
  const { numberOfPages, currentPageNumber } = useSlide();
  const [slideMarkers, setSlideMarkers] = useState<SlideMarkerProps[]>([]);

  useEffect(() => {
    setSlideMarkers(
      Array(numberOfPages)
        .fill({ isActive: false })
        .map((slideMarker, index) => {
          return { isActive: currentPageNumber === index };
        }),
    );
  }, [currentPageNumber, numberOfPages]);

  return (
    <Container>
      <Content>{children}</Content>
      <Footer>
        {slideMarkers.map((slideMarker) => (
          <Circle key={uuid()} isActive={slideMarker.isActive} />
        ))}
      </Footer>
    </Container>
  );
};

export default Slide;
