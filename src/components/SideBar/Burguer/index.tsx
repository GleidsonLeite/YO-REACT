import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Content } from './style';

interface BurguerProps {
  isActive: boolean;
  onClick(): void;
}

const Burguer: React.FC<BurguerProps> = ({ onClick, isActive }) => {
  return (
    <Container>
      <Content isActive={isActive}>
        {isActive ? (
          <MdChevronLeft onClick={onClick} />
        ) : (
          <MdChevronRight onClick={onClick} />
        )}
      </Content>
    </Container>
  );
};

export default Burguer;
