import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function GeneralBalanceCard() {
  return (
    <Card
      title="Balanço Geral"
      subtitle="Soma de investimentos, depósitos ativos e rendimento geral"
    >
      <Data label="Balanço Geral com Carência" value="$ 500.00" />
    </Card>
  );
}

export default GeneralBalanceCard;
