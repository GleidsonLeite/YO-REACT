import React from 'react';
import { BurguerDiv, BurguerLine1, BurguerLine2, BurguerLine3 } from './styles';

interface BurguerProps {
  isClicked: boolean;
  onClick(): void;
}

const Burguer: React.FC<BurguerProps> = ({ isClicked, onClick }) => {
  return (
    <>
      <BurguerDiv onClick={onClick}>
        <BurguerLine1 isClicked={isClicked} />
        <BurguerLine2 isClicked={isClicked} />
        <BurguerLine3 isClicked={isClicked} />
      </BurguerDiv>
    </>
  );
};

export default Burguer;
