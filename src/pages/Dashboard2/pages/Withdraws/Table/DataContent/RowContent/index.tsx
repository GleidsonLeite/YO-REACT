import React, { ReactNode } from 'react';
import { uuid } from 'uuidv4';
import { Container } from './style';

interface RowDataProps {
  label: string;
  value: ReactNode;
}

interface RowContentProps {
  data: RowDataProps[];
}

const RowContent: React.FC<RowContentProps> = ({ data }) => {
  return (
    <Container>
      {data.map((singleData) => (
        <p key={uuid()} data-label={singleData.label}>
          {singleData.value}
        </p>
      ))}
    </Container>
  );
};

export default RowContent;
