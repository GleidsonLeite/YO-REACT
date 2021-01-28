import React from 'react';
import Button from '../../../../../../Components/Button';
import Input from '../../../../../../Components/Input';

import { Container, Content } from './style';

const NetellerForm: React.FC = () => {
  return (
    <Container>
      <Content
        onSubmit={() => {
          console.log('hello World');
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
