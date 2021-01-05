import React from 'react';
import { MdTrendingUp } from 'react-icons/md';

import { Container, Content, CloseInvestmentButton } from './styles';

interface ButtonProps {
  onClick(): void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Container>
      <Content>
        <CloseInvestmentButton onClick={onClick}>
          <MdTrendingUp />
        </CloseInvestmentButton>
      </Content>
    </Container>
  );
};

export default Button;
