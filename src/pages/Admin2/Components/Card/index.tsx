import React from 'react';

import { Container, TitleContainer, ChildrenContent } from './style';

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

function Card({ title, subtitle, children }: CardProps) {
  return (
    <Container>
      <TitleContainer>
        <h1>{title}</h1>
        {!!subtitle && <h4>{subtitle}</h4>}
      </TitleContainer>
      <ChildrenContent>{children}</ChildrenContent>
    </Container>
  );
}

export default Card;
