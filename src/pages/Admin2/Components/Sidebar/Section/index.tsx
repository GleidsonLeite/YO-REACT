import React from 'react';
import { Container } from './style';

interface SectionProps {
  title: string;
  subtitle?: string;
}

function Section({ title, subtitle }: SectionProps) {
  return (
    <Container>
      <h6>{title}</h6>
      {!!subtitle && <p>{subtitle}</p>}
    </Container>
  );
}

export default Section;
