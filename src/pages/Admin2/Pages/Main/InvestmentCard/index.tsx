import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function InvestmentCard() {
  return (
    <Card title="Investimentos" subtitle="Investimentos ativos neste mês">
      <Data label="Usuários Ativos" value={45} />
      <Data label="Usuários Inativos" value={45} />
    </Card>
  );
}

export default InvestmentCard;
