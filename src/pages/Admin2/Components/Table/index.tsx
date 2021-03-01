import React from 'react';
import Header from './Header';
import Row from './Row';

import { Container, Content } from './style';

interface RowItems {
  items: string[];
}

interface TableProps {
  headerItems: string[];
  tableItems: RowItems[];
}

function Table({ headerItems, tableItems }: TableProps) {
  return (
    <Container>
      <Content>
        <Header items={headerItems} />
        {tableItems.map(({ items }) => (
          <Row items={items} />
        ))}
      </Content>
    </Container>
  );
}

export default Table;
