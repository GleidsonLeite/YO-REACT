import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function WithdrawCard() {
  return (
    <Card title="Saques" subtitle="Saques confirmados neste mês.">
      <Data label="Saque Compensado" value="$ 500.00" />
      <Data label="Saque Pendente" value="$ 500.00" />
      <Data label="Saque Recusado" value="$ 500.00" />
    </Card>
  );
}

export default WithdrawCard;
