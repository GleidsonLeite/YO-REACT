import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { Container, Content, FeeInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <Content>
        <FeeInput {...rest} />
        <p>%</p>
      </Content>
    </Container>
  );
};

export default Input;
