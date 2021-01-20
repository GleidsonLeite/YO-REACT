import React, { InputHTMLAttributes } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { Container, Content, Label, Icon, Input } from './style';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FileInput: React.FC<FileInputProps> = ({ label, ...rest }) => {
  const { id } = rest;
  return (
    <Container>
      <Content>
        <Label>
          <p>{label}</p>
        </Label>
        <Icon htmlFor={id}>
          <MdCloudUpload />
        </Icon>
        <Input type="file" {...rest} />
      </Content>
    </Container>
  );
};

export default FileInput;
