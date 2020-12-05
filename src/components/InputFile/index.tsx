import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputFile: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [file, setFile] = useState(defaultValue);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
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
    <>
      <input type="file" ref={inputRef} onChange={handleChange} {...rest} />
    </>
  );
};

export default InputFile;
