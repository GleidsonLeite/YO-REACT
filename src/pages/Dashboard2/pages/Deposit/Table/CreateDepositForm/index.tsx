import React, { useCallback, useState } from 'react';
import Modal from '../../../../Components/Modal';
import Slide from './Components/Slide';
import { SlideProvider } from './Components/Slide/hooks/Slide';
import Form from './Form';
import { DepositFormProvider } from './Form/hooks/DepositForm';

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
        <DepositFormProvider>
          <SlideProvider>
            <Modal onClose={handleOnClick}>
              <Slide>
                <ModalContainer>
                  <Form />
                </ModalContainer>
              </Slide>
            </Modal>
          </SlideProvider>
        </DepositFormProvider>
      )}
    </Container>
  );
};

export default CreateDepositForm;
