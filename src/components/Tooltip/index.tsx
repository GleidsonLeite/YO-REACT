import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  Message: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, Message }) => {
  return (
    <Container>
      {children}
      <span>{Message}</span>
    </Container>
  );
};

export default Tooltip;
