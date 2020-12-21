import React, { InputHTMLAttributes, useCallback } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  icon: React.ComponentType<IconBaseProps>;
  handleOnFileChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const UploadButton: React.FC<InputProps> = ({
  id,
  icon: Icon,
  handleOnFileChange,
}) => {
  const handleOnChange = useCallback(
    (event) => {
      handleOnFileChange(event);
    },
    [handleOnFileChange],
  );

  return (
    <Container>
      <label htmlFor={id}>
        <Icon size={25} />
      </label>
      <input type="file" id={id} onChange={handleOnChange} />
    </Container>
  );
};

export default UploadButton;
