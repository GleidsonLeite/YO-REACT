import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { uuid } from 'uuidv4';
import { Container, Content, Label, Icon, Input } from './style';

interface FileInputProps {
  label: string;
  name: string;
}

interface FileProps extends File {
  invalid: boolean;
}

const FileInput: React.FC<FileInputProps> = ({ label, name }) => {
  const id = uuid();

  const dropRef = useRef(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const [isDragging, setIsDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const [fileName, setFileName] = useState('');

  const handleOnDrag = useCallback((event: React.DragEvent) => {
    // It prevents the default behavior of the browser when something is dragged in or dropped
    event.preventDefault();
    // It stops the event from being propagated through parent and child elements
    event.stopPropagation();
  }, []);

  const handleOnDragIn = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setDragCounter(dragCounter + 1);
      event.dataTransfer.items &&
        event.dataTransfer.items.length > 0 &&
        setIsDragging(true);
    },
    [dragCounter],
  );

  const handleOnDragOut = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const actualDragCounter = dragCounter - 1;
      setDragCounter(actualDragCounter);
      actualDragCounter === 0 && setIsDragging(false);
    },
    [dragCounter],
  );

  const handleOnDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      // TODO: Pass a handle Drop here
      // handleOnDrop(event);
      const { files } = event.dataTransfer;
      setFileName(files[0].name);
      event.dataTransfer.clearData();
      setDragCounter(0);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputFileRef,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        // eslint-disable-next-line no-param-reassign
        ref.value = '';
      },
      setValue(_: HTMLInputElement, value: string) {
        return;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Content
        ref={dropRef}
        onDragEnter={handleOnDragIn}
        onDragLeave={handleOnDragOut}
        onDragOver={handleOnDrag}
        onDrop={handleOnDrop}
      >
        <Label>
          <p>{label}</p>
        </Label>
        <Icon htmlFor={id}>
          <MdCloudUpload />
          {!!fileName && <p>{fileName}</p>}
        </Icon>
        <Input
          ref={inputFileRef}
          value={defaultValue}
          name={name}
          id={id}
          type="file"
        />
      </Content>
    </Container>
  );
};

export default FileInput;
