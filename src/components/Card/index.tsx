import React from 'react';

import { Container, ImageLabel, Content, Header, Text } from './styles';

interface CardProps {
  imageURI?: string;
  title: string;
  description: string;
  amount?: string;
  handleOnClick?(): void;
}

const Card: React.FC<CardProps> = ({
  children,
  imageURI,
  title,
  description,
  amount,
  handleOnClick,
  ...rest
}) => {
  return (
    <Container onClick={handleOnClick} {...rest}>
      {imageURI && <ImageLabel src={imageURI} />}
      <Content>
        <Header>{title}</Header>
        <Text>{description}</Text>
        {!!amount && <Text>{amount}</Text>}
        {children}
      </Content>
    </Container>
  );
};

export default Card;
