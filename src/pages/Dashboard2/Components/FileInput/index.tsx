import { useField } from '@unform/core';
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { Container } from './style';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FileInput: React.FC<FileInputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [fileName, setFileName] = useState(defaultValue);

  const handlePreview = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(!file ? '' : file.name);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        // eslint-disable-next-line no-param-reassign
        ref.value = '';
        setFileName('');
      },
      setValue(_: HTMLInputElement, value: string) {
        setFileName(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <p>{label}</p>
      <label htmlFor={fieldName}>
        <MdCloudUpload />
      </label>

      <input
        type="file"
        ref={inputRef}
        onChange={handlePreview}
        id={fieldName}
        {...rest}
      />

      {fileName && <p>{fileName}</p>}
    </Container>
  );
};

export default FileInput;
