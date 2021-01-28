import React from 'react';
import { MdClear } from 'react-icons/md';

import { Container, Content } from './style';

interface ModalProps {
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <Container>
      <Content>
        <button onClick={onClose} type="button">
          <MdClear size={18} />
        </button>
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
