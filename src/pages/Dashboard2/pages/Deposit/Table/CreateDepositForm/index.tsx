import React, { useCallback, useState } from 'react';
import Modal from '../../../../Components/Modal';
import Form from './Form';

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
        <Modal onClose={handleOnClick}>
          <Form />
        </Modal>
      )}
    </Container>
  );
};

export default CreateDepositForm;
