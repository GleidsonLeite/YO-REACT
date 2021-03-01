import React from 'react';

import { Container, TitleContainer, ChildrenContent } from './style';

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  mainValue?: string;
  handleOnClick?(): void;
}

function Card({
  title,
  subtitle,
  mainValue,
  handleOnClick,
  children,
}: CardProps) {
  return (
    <Container onClick={handleOnClick}>
      <TitleContainer>
        <h2>{title}</h2>
        {!!subtitle && <h4>{subtitle}</h4>}
        {!!mainValue && <h1>{mainValue}</h1>}
      </TitleContainer>
      <ChildrenContent>{children}</ChildrenContent>
    </Container>
  );
}

export default Card;
