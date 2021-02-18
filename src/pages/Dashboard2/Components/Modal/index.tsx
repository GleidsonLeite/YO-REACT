import React from 'react';
import { MdClear } from 'react-icons/md';
import { animated, useSpring } from 'react-spring';

import { Container, Content, CloseDiv } from './style';

interface ModalProps {
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={springProps}>
      <Container>
        <Content>
          <CloseDiv onClick={onClose}>
            <MdClear size={18} />
          </CloseDiv>
          {children}
        </Content>
      </Container>
    </animated.div>
  );
};

export default Modal;
