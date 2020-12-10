import React, { useCallback, useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import { Container, Content, Title } from './styles';

interface PanelProps {
  title: string;
}

const Panel: React.FC<PanelProps> = ({ children, title }) => {
  const [isContentHidden, setIsContentHidden] = useState(true);

  const handleMouseClickOpenButton = useCallback(() => {
    setIsContentHidden(!isContentHidden);
  }, [isContentHidden]);

  return (
    <Container>
      <Title>
        <h1>{title}</h1>

        {isContentHidden && (
          <MdExpandMore size={25} onClick={handleMouseClickOpenButton} />
        )}
        {!isContentHidden && (
          <MdExpandLess size={25} onClick={handleMouseClickOpenButton} />
        )}
      </Title>
      <Content isHidden={isContentHidden}>{children}</Content>
    </Container>
  );
};

export default Panel;
