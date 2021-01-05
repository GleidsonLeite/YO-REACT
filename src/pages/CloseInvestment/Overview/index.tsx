import React, { useCallback, useEffect, useState } from 'react';
import { MdPoll, MdSentimentSatisfied } from 'react-icons/md';
import { number } from 'yup';
import api from '../../../services/api';
import { Icon } from '../../Unactivated/styles';
import MiniCard from '../../../components/MiniCard';

import { Container, Content, Cards } from './styles';

const Overview: React.FC = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [investedMoney, setInvestedMoney] = useState('$ 0,00');

  const getUsersCount = useCallback(async () => {
    const { length } = (await api.get('users/count')).data;
    setUsersCount(length);
  }, []);

  const getTotalInvestments = useCallback(async () => {
    const { totalInvestments } = (await api.get('investments/count')).data;
    setInvestedMoney(`$ ${Number(totalInvestments).toFixed(2)}`);
  }, []);

  useEffect(() => {
    getUsersCount();
    getTotalInvestments();
  }, [getTotalInvestments, getUsersCount]);

  return (
    <Container>
      <Content>
        <Cards>
          <MiniCard
            Title="Usuários"
            Icon={<MdSentimentSatisfied />}
            Value={`${usersCount}`}
          />
          <MiniCard
            Title="Wallet"
            Icon={<MdPoll />}
            Value={`${investedMoney}`}
          />
        </Cards>
      </Content>
    </Container>
  );
};

export default Overview;
