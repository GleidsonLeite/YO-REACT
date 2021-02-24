import React from 'react';
import Card from '../../Components/Card';
import DepositCard from './DepositCard';
import GeneralBalanceCard from './GeneralBalanceCard';
import InterestRateCard from './InterestRateCard';
import InvestmentCard from './InvestmentCard';
import InvestmentReturnCard from './InvestmentReturnCard';

import { Container } from './style';
import WithdrawCard from './WithdrawCard';

function Main() {
  return (
    <Container>
      <InvestmentCard />
      <DepositCard />
      <InvestmentReturnCard />
      <WithdrawCard />
      <InterestRateCard />
      <GeneralBalanceCard />
      <Card title="PL" />
      <Card title="Suportes" />
      <Card title="Publicações" />
    </Container>
  );
}

export default Main;
