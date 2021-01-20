import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { Container } from './style';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FileInput: React.FC<FileInputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

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

  const [, setFile] = useState(defaultValue);

  return (
    <Container>
      <p>{label}</p>
      <label htmlFor={fieldName}>
        <MdCloudUpload />
      </label>

      <input
        ref={inputRef}
        value={defaultValue}
        name={name}
        id={fieldName}
        type="file"
        {...rest}
      />
    </Container>
  );
};

export default FileInput;
