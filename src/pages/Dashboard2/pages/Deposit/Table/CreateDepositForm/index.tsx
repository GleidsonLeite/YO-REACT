import React, { useCallback, useState } from 'react';
import Modal from '../../../../Components/Modal';
import Slide from './Components/Slide';
import { SlideProvider } from './Components/Slide/hooks/Slide';
import Form from './Form';

import { Container, CreateInvestmentButton, ModalContainer } from './style';

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
        <SlideProvider>
          <Modal onClose={handleOnClick}>
            <Slide>
              <ModalContainer>
                <Form />
              </ModalContainer>
            </Slide>
          </Modal>
        </SlideProvider>
      )}
    </Container>
  );
};

export default CreateDepositForm;
