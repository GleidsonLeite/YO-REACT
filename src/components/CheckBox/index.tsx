import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';
import ReactTooltip from 'react-tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const CheckBox: React.FC<InputProps> = ({ children, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(true);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleOnChangeInput = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className="my-4">
      <div className="custom-control custom-checkbox mb-3">
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
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          type="checkbox"
          className="custom-control-input"
          id="checkTerms"
          checked={isChecked}
          onChange={handleOnChangeInput}
          {...rest}
        />
        {children}
      </div>
    </div>
  );
};

export default CheckBox;
