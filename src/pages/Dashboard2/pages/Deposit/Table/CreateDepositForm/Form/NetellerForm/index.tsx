import React from 'react';
import Button from '../../../../../../Components/Button';
import Input from '../../../../../../Components/Input';
import { useSlide } from '../../Components/Slide/hooks/Slide';

import { Container, Content } from './style';

const NetellerForm: React.FC = () => {
  const { setCurrentPageNumber } = useSlide();
  return (
    <Container>
      <h1>Neteller</h1>
      <Content
        onSubmit={() => {
          setCurrentPageNumber(3);
        }}
      >
        <Input label="Conta Neteller" name="netellerAccount" />
        <Input label="Valor a ser Depositado" name="depositValue" />
        <Button type="submit">Depositar</Button>
      </Content>
    </Container>
  );
};

export default NetellerForm;
