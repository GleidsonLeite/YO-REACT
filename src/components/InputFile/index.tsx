import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';

import { Container, Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputFile: React.FC<InputProps> = ({ name, ...rest }) => {
  const [, setIsFocused] = useState(false);
  const [, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [, setFile] = useState(defaultValue);
  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e.target.files?.[0];

    setFile(!fileUploaded ? null : fileUploaded);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        // eslint-disable-next-line no-param-reassign
        ref.value = '';
        setFile(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setFile(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Content>
        <input
          ref={inputRef}
          value={defaultValue}
          name={name}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          type="file"
          {...rest}
        />
      </Content>
    </Container>
  );
};

export default InputFile;
