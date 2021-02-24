import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function DepositCard() {
  return (
    <Card title="Depósitos" subtitle="Depósitos Confirmados">
      <Data label="Depósitos Ativos" value={45} />
      <Data label="Depósitos Pendentes" value={45} />
      <Data label="Depósitos Recusados" value={45} />
    </Card>
  );
}

export default DepositCard;
