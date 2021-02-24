import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, ListContainer } from './style';

interface ListProps {
  items: string[];
}

function List({ items }: ListProps) {
  return (
    <Container>
      {items.map((item) => (
        <ListContainer>
          <MdKeyboardArrowRight />
          <p>{item}</p>
        </ListContainer>
      ))}
    </Container>
  );
}

export default List;
