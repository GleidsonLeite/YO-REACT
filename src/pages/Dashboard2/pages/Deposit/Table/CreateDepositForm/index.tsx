import { Bars, LoaderProvider } from '@agney/react-loading';
import React, { useCallback, useState } from 'react';
import Carousel from '../../../../Components/Carousel';
import { CarouselProvider } from '../../../../Components/Carousel/Hooks';
import Modal from '../../../../Components/Modal';

import { DepositFormProvider } from './Form/hooks/DepositForm';
import Presentation from './Form/Pages/Presentation';

import { Container, CreateInvestmentButton } from './style';

const CreateDepositForm: React.FC = () => {
  const [isFormHidden, setIsFormHidden] = useState<boolean>(true);

  const handleOnClick = useCallback(() => {
    setIsFormHidden(!isFormHidden);
  }, [isFormHidden]);
  return (
    <Container>
      <CreateInvestmentButton onClick={handleOnClick}>
        Criar Investimento
      </CreateInvestmentButton>
      {!isFormHidden && (
        <CarouselProvider firstComponent={<Presentation />} numberOfPages={5}>
          <DepositFormProvider>
            <LoaderProvider indicator={<Bars />}>
              <Modal onClose={handleOnClick}>
                <Carousel />
              </Modal>
            </LoaderProvider>
          </DepositFormProvider>
        </CarouselProvider>
      )}
    </Container>
  );
};

export default CreateDepositForm;
