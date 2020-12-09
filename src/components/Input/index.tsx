import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';

import { MdReportProblem } from 'react-icons/md';
import { Container, Error } from './styles';
import Tooltip from '../Tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

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
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      {!!Icon && <Icon size={25} />}
      <input
        ref={inputRef}
        value={defaultValue}
        name={name}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
      {error && (
        <Tooltip Message={error}>
          <Error>
            <MdReportProblem size={20} />
          </Error>
        </Tooltip>
      )}
    </Container>
  );
};

export default Input;
