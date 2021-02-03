import React, { useCallback, useState } from 'react';

import { Container, CreateWithdrawButton, ModalContainer } from './style';

const CreateWithdrawForm: React.FC = () => {
  const [isFormHidden, setIsFormHidden] = useState<boolean>(true);

  const handleCreateWithdrawButtonOnClick = useCallback(() => {
    setIsFormHidden(!isFormHidden);
  }, [isFormHidden]);
  return (
    <Container>
      <CreateWithdrawButton onClick={handleCreateWithdrawButtonOnClick}>
        Solicitar saque
      </CreateWithdrawButton>
    </Container>
  );
};

export default CreateWithdrawForm;
