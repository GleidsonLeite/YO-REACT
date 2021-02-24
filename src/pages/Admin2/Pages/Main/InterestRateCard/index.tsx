import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function InterestRateCard() {
  return (
    <Card title="Juros" subtitle="Você pode alterar o campo de juros">
      <Data label="Juros do mês anterior" value="3%" />
    </Card>
  );
}

export default InterestRateCard;
