import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function SupportCard() {
  return (
    <Card title="Suporte" subtitle="Quantidade de suportes" mainValue="5">
      <Data label="Tickets em aberto" value="1" />
      <Data label="Tickets fechados" value="1" />
    </Card>
  );
}

export default SupportCard;
