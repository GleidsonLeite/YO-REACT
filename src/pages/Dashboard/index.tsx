import React, { useEffect, useState } from 'react';

import { MdCheckCircle, MdError } from 'react-icons/md';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Accordion from '../../components/Accordion';
import { useAuth } from '../../hooks/Auth';
import Panel from '../../components/Accordion/Panel';

import { Container, Content, Accordions, UserInformationDiv } from './styles';

import InvestmentPanel from './InvestmentPanel';
import InvestmentForm from './InvestmentForm';

import WithdrawPanel from './WithdrawPanel';
import WithdrawForm from './WithdrawForm';

import api from '../../services/api';

import profileImage from '../../assets/img/team-1.jpg';

export interface InvestmentData {
  id: string;
  investor_id: string;
  value: string;
  confirmed: boolean;
  created_at: string;
  updated_at: string;
  deposit_slip: string;
  bank_slip: string;
}

export interface WithdrawData {
  id: string;
  investor_id: string;
  value: string;
  confirmed: boolean;
  confirming_user_id: string;
  data_confirmed: string;
  created_at: string;
  updated_at: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [investments, setInvestments] = useState<InvestmentData[]>([]);

  const [withdraws, setWithdraws] = useState<WithdrawData[]>([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };

    (async function getUserInvestmentsFromApi() {
      const response = await api.get(`/investments/${user.id}`, config);
      setInvestments(response.data);
    })();

    (async function getUserWithDrawsFromApi() {
      const response = await api.get(`/withdraws`, config);
      setWithdraws(response.data);
    })();
  }, [user.id]);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <Card
            imageURI={profileImage}
            title={user.name}
            description={user.email}
            amount={user.amount}
          >
            {user.resume && (
              <UserInformationDiv>
                <p>{user.resume}</p>
                <p>{user.phone}</p>
                <p>{user.address}</p>
              </UserInformationDiv>
            )}
            {user.activated ? (
              <MdCheckCircle size={25} style={{ color: '#16bac5' }} />
            ) : (
              <MdError size={25} style={{ color: '#FF7700' }} />
            )}
          </Card>
          <Accordions>
            <Accordion title="Investimentos">
              {investments.map((investment) => {
                return (
                  <Panel title={investment.value} key={investment.id}>
                    <InvestmentPanel
                      deposit_slip={investment.deposit_slip}
                      id={investment.id}
                      value={investment.value}
                      created_at={investment.created_at}
                      updated_at={investment.updated_at}
                      confirmed={investment.confirmed}
                      bank_slip={investment.bank_slip}
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

            <Accordion title="Saques">
              {withdraws.map((withdraw) => {
                return (
                  <Panel title={withdraw.value} key={withdraw.id}>
                    <WithdrawPanel {...withdraw} />
                  </Panel>
                );
              })}
              <Panel title="Saque">
                <WithdrawForm
                  withdraws={withdraws}
                  setWithdraws={setWithdraws}
                />
              </Panel>
            </Accordion>
          </Accordions>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
