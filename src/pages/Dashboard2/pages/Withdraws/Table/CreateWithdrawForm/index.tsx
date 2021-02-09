import React, { useCallback, useState } from 'react';
import Carousel from '../../../../Components/Carousel';
import { CarouselProvider } from '../../../../Components/Carousel/Hooks';
import Modal from '../../../../Components/Modal';
import { WithdrawFormProvider } from './Hooks/WithdrawForm';
import Presentation from './Pages/Presentation';

import { Container, CreateWithdrawButton } from './style';

const CreateWithdrawForm: React.FC = () => {
  const [isFormHidden, setIsFormHidden] = useState<boolean>(true);

  const handleCreateWithdrawButtonOnClick = useCallback(() => {
    setIsFormHidden(false);
  }, []);

  return (
    <Container>
      <CreateWithdrawButton onClick={handleCreateWithdrawButtonOnClick}>
        Solicitar saque
      </CreateWithdrawButton>
      {!isFormHidden && (
        <CarouselProvider numberOfPages={5} firstComponent={<Presentation />}>
          <WithdrawFormProvider>
            <Modal
              onClose={() => {
                setIsFormHidden(true);
              }}
            >
              <Carousel />
            </Modal>
          </WithdrawFormProvider>
        </CarouselProvider>
      )}
    </Container>
  );
};

export default CreateWithdrawForm;
