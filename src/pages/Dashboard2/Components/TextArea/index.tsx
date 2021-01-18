import React from 'react';

import { Container, Content, Label, InputValue } from './style';

interface TextAreaProps {
  label: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, placeholder }) => {
  return (
    <Container>
      <Content>
        <Label>
          <p>{label}</p>
        </Label>
        <InputValue placeholder={placeholder} />
      </Content>
    </Container>
  );
};

export default TextArea;
