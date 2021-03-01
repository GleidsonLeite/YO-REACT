import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function PLCard() {
  return (
    <Card title="PL" subtitle="Valor da PL nesse mês." mainValue="$ 500.00">
      <Data label="PL do mês anterior" value="$ 500.00" />
    </Card>
  );
}

export default PLCard;
