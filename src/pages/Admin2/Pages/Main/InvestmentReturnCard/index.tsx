import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function InvestmentReturnCard() {
  return (
    <Card
      title="Rendimento Total"
      subtitle="Você pode alterar o campo de rendimentos"
      mainValue="$ 600.00"
    >
      <Data label="Rendimento com Carência" value="$ 500.00" />
    </Card>
  );
}

export default InvestmentReturnCard;
