import React from 'react';

import { Container, Content, Label, InputValue } from './style';

interface InputProps {
  label: string;
  placeholder: string;
}

const DateInput: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <Container>
      <Content>
        <Label>
          <p>{label}</p>
        </Label>
        <InputValue placeholder={placeholder} type="date" />
      </Content>
    </Container>
  );
};

export default DateInput;
