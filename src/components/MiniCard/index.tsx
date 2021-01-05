import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Content, Header, IconDiv, ValueContainer } from './styles';

interface MiniCardProps {
  Title: string;
  Value: string;
  Icon: IconBaseProps;
  color?: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ Title, Value, Icon }) => {
  return (
    <Container>
      <Content>
        <Header>
          <IconDiv>{Icon}</IconDiv>
          <p>{Title}</p>
        </Header>
        <ValueContainer>{Value}</ValueContainer>
      </Content>
    </Container>
  );
};

export default MiniCard;
