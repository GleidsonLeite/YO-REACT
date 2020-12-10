import React, { useEffect, useState } from 'react';

import { MdCheckCircle, MdError } from 'react-icons/md';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Accordion from '../../components/Accordion';
import { useAuth } from '../../hooks/Auth';
import Panel from '../../components/Accordion/Panel';

import { Container, Content } from './styles';

import InvestmentPanel from './InvestmentPanel';
import InvestmentForm from './InvestmentForm';
import api from '../../services/api';

import profileImage from '../../assets/img/team-1.jpg';

export interface InvestmentData {
  id: string;
  value: string;
  confirmed: boolean;
  created_at: string;
  updated_at: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [investments, setInvestments] = useState<InvestmentData[]>([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };
    (async function getUsersFromApi() {
      const response = await api.get(`/investments/${user.id}`, config);
      setInvestments(response.data);
    })();
  }, [user.id]);

  return (
    <>
      <Container>
        <Header />

        <Content>
          <Card
            imageURI={profileImage}
            title={user.name}
            description={user.email}
            amount={user.amount}
          >
            {user.activated ? (
              <MdCheckCircle size={25} style={{ color: '#16bac5' }} />
            ) : (
              <MdError size={25} style={{ color: '#FF7700' }} />
            )}
          </Card>
          <Accordion>
            {investments.map((investment) => {
              return (
                <Panel title={investment.value} key={investment.id}>
                  <InvestmentPanel
                    value={investment.value}
                    created_at={investment.created_at}
                    updated_at={investment.updated_at}
                    confirmed={investment.confirmed}
                  />
                </Panel>
              );
            })}
            <Panel title="Invista">
              <InvestmentForm
                investments={investments}
                setInvestments={setInvestments}
              />
            </Panel>
          </Accordion>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
