import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

import { Container } from './style';

interface MainButtonProps {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
  isContentDropped: boolean;
  onClick(): void;
}

function MainButton({
  icon: Icon,
  title,
  isContentDropped,
  onClick,
}: MainButtonProps) {
  return (
    <Container isContentDropped={isContentDropped} onClick={onClick}>
      <Icon />
      <h1>{title}</h1>
      {isContentDropped ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
    </Container>
  );
}

export default MainButton;
