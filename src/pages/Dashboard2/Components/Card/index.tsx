import React from 'react';
import { IconBaseProps } from 'react-icons';
import {
  Container,
  Content,
  Header,
  IconContainer,
  TitleContent,
  ValueSection,
} from './style';

interface CardProps {
  Title: string;
  Value: string;
  Icon: IconBaseProps;
  color?: string;
}

const Card: React.FC<CardProps> = ({ Title, Value, Icon }) => {
  return (
    <Container>
      <Content>
        <Header>
          <IconContainer>{Icon}</IconContainer>
          <TitleContent>
            <h1>{Title}</h1>
          </TitleContent>
        </Header>
        <ValueSection>
          <h2>{Value}</h2>
        </ValueSection>
      </Content>
    </Container>
  );
};

export default Card;
