import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

import { Container, Content, Label, InputValue } from './style';

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({ name, label, placeholder, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Content>
        <Label>
          <p>{label}</p>
        </Label>
        <InputValue
          name={name}
          defaultValue={value || defaultValue}
          ref={inputRef}
          placeholder={placeholder}
        />
      </Content>
    </Container>
  );
};

export default Input;
