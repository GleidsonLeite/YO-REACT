import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../../Components/Card';
import Data from '../Data';

function InvestmentCard() {
  const history = useHistory();

  const handleOnCardClick = useCallback(() => {
    history.push('/admin/users');
  }, [history]);

  return (
    <Card
      title="Investimentos"
      subtitle="Investimentos ativos neste mês"
      mainValue="$ 600.00"
      handleOnClick={handleOnCardClick}
    >
      <Data label="Usuários Ativos" value={45} />
      <Data label="Usuários Inativos" value={45} />
    </Card>
  );
}

export default InvestmentCard;
