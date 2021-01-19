import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container, Content, Label, InputValue } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  value,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

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
        <Label htmlFor={fieldName}>
          <p>{label}</p>
        </Label>
        <InputValue
          id={fieldName}
          ref={inputRef}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...rest}
        />
      </Content>
    </Container>
  );
};

export default Input;
