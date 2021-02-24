import React from 'react';

import { Container } from './style';

interface DataProps {
  label: string;
  value: number | string;
}

function Data({ label, value }: DataProps) {
  return (
    <Container>
      <h1>{value}</h1>
      <h4>{label}</h4>
    </Container>
  );
}

export default Data;
