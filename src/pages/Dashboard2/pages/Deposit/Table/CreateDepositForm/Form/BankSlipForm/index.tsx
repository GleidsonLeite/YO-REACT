import React from 'react';
import Button from '../../../../../../Components/Button';
import Input from '../../../../../../Components/Input';

import { Container, Content } from './style';

const BankSlipForm: React.FC = () => {
  return (
    <Container>
      <Content
        onSubmit={() => {
          console.log('hello world');
        }}
      >
        <Input label="Valor a ser depositado" name="depositValue" />
        <Button type="submit">Depositar</Button>
      </Content>
    </Container>
  );
};

export default BankSlipForm;
