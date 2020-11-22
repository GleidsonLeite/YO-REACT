import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';

import ReactTooltip from 'react-tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  icon,
  children,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
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
    <div className="form-group">
      <label htmlFor={name} className="pb1">
        {label}
      </label>

      <div className="input-group input-group-merge">
        <div className="input-icon">
          <span
            data-tip="error"
            data-for={name}
            style={{
              color: error ? 'red' : '',
            }}
            className={`${icon} ${isFocused ? 'color-primary' : ''} ${
              isFilled && 'color-primary'
            }`}
          />
          {error && (
            <ReactTooltip
              backgroundColor="#6730e3"
              id={name}
              place="top"
              effect="solid"
              delay-hide={1}
            >
              {error}
            </ReactTooltip>
          )}
        </div>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          type="text"
          className="form-control"
          {...rest}
        />
        <div className="input-icon">
          <span
            data-tip="error"
            data-for={name}
            style={{
              color: isFilled || isFocused ? '#6730e3' : error && 'red',
            }}
            className={`${icon} ${isFocused || isFilled ? 'color-primary' : ''}
            }`}
          />
          {error && !isFilled && (
            <ReactTooltip
              backgroundColor="#6730e3"
              id={name}
              place="top"
              effect="solid"
              delay-hide={1}
            >
              {error}
            </ReactTooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
