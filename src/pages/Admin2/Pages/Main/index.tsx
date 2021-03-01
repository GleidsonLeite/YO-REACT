import React from 'react';
import DepositCard from './DepositCard';
import GeneralBalanceCard from './GeneralBalanceCard';
import InterestRateCard from './InterestRateCard';
import InvestmentCard from './InvestmentCard';
import InvestmentReturnCard from './InvestmentReturnCard';
import PLCard from './PLCard';
import PostCard from './PostCard';
import { Container } from './style';
import SupportCard from './SupportCard';
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
      <PLCard />
      <SupportCard />
      <PostCard />
    </Container>
  );
}

export default Main;
