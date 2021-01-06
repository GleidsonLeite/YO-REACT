import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';

import { Container, Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputNumber: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const [, setIsFocused] = useState(false);
  const [, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

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
        {!!Icon && <Icon size={25} />}

        <input
          ref={inputRef}
          value={defaultValue}
          name={name}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          type="number"
          {...rest}
        />
      </Content>
    </Container>
  );
};

export default InputNumber;
