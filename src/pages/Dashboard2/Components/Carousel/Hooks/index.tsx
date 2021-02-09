/**
 * Aqui será realizado o controle do carousel
 * As propriedades serão a quantidade de Slides, e o componente da página atual
 */

import React, { createContext, useContext, useState } from 'react';

export interface CarouselContextData {
  numberOfSlides: number;
  setNumberOfSlides(numberOfSlides: number): void;
  currentComponent: React.ReactNode;
  setCurrentComponent(component: React.ReactNode): void;
  slideValue: number;
  setSlideValue(slideValue: number): void;
}

const CarouselContext = createContext<CarouselContextData>(
  {} as CarouselContextData,
);

interface CarouselProviderProps {
  firstComponent: React.ReactNode;
  numberOfPages: number;
}

export const CarouselProvider: React.FC<CarouselProviderProps> = ({
  numberOfPages,
  firstComponent,
  children,
}) => {
  const [numberOfSlides, setNumberOfSlides] = useState<number>(numberOfPages);
  const [slideValue, setSlideValue] = useState<number>(0);
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(
    firstComponent,
  );
  return (
    <CarouselContext.Provider
      value={{
        numberOfSlides,
        setNumberOfSlides,
        currentComponent,
        setCurrentComponent,
        slideValue,
        setSlideValue,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export function useCarousel(): CarouselContextData {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('UseCarousel must be used within a CarouselProvider');
  }
  return context;
}
