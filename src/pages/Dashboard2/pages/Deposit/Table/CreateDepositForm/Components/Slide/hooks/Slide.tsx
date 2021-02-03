import React, { createContext, useContext, useState } from 'react';

interface SlideContextData {
  currentPageNumber: number;
  setCurrentPageNumber(pageNumber: number): void;
  numberOfPages: number;
  setNumberOfPages(numberOfPages: number): void;
}

const SlideContext = createContext<SlideContextData>({} as SlideContextData);

const SlideProvider: React.FC = ({ children }) => {
  const [numberOfPages, setNumberOfPages] = useState(5);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  return (
    <SlideContext.Provider
      value={{
        currentPageNumber,
        setCurrentPageNumber,
        numberOfPages,
        setNumberOfPages,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

function useSlide(): SlideContextData {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlide must be used within a SlideProvider');
  }
  return context;
}

export { SlideProvider, useSlide };
