import React from 'react';
import DepositOption from './DepositOption';

import { Container, Content } from './style';

const Form: React.FC = () => {
  return (
    <Container>
      <Content>
        <DepositOption />
      </Content>
    </Container>
  );
};
export default Form;
