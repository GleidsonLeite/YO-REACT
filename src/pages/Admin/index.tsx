import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { UserData } from '../../hooks/Auth';
import api from '../../services/api';
import { InvestmentData } from '../Dashboard';
import InvestmentList from './InvestmentList';

import { Container, Content } from './styles';

import UsersList from './UsersList';

const Admin: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };
    (async function getUsersFromApi() {
      const response = await api.get('/users/', config);
      setUsers(response.data);
    })();
  }, []);

  const [investments, setInvestments] = useState<InvestmentData[]>([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };
    (async function getInvestmentsFromApi() {
      const response = await api.get('/investments/', config);
      setInvestments(response.data);
    })();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <UsersList users={users} />
          <InvestmentList
            users={users}
            investments={investments}
            setInvestments={setInvestments}
          />
        </Content>
      </Container>
    </>
  );
};

export default Admin;
