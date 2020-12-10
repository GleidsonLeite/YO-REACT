import React, { useCallback, useEffect, useState } from 'react';

import { MdCheckCircle, MdError } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Accordion from '../../components/Accordion';
import { useAuth, UserData } from '../../hooks/Auth';
import Panel from '../../components/Accordion/Panel';

import { Container, Content, UserStatusControlDiv } from './styles';

import profileImage from '../../assets/img/team-1.jpg';
import api from '../../services/api';
import InvestmentPanel from '../Dashboard/InvestmentPanel';
import SwitchButton from '../../components/Switch';
import { usePopup } from '../../hooks/Popup';

interface InvestmentData {
  id: string;
  value: string;
  confirmed: boolean;
  created_at: string;
  updated_at: string;
}

interface RouteParams {
  id: string;
}

const Profile: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [user, setUser] = useState<UserData>({} as UserData);
  const [isUserActivated, setIsUserActivated] = useState(false);
  const [investments, setInvestments] = useState<InvestmentData[]>([]);

  const { showPopup } = usePopup();

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };

    (async function getUserFromID() {
      const response = await api.get(`/users/${id}`, config);
      setUser(response.data);
      setIsUserActivated(user.activated);
    })();
  }, [id, user.activated, isUserActivated]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };
    (async function getUsersFromApi() {
      const response = await api.get(`/investments/${user.id}`, config);
      setInvestments(response.data);
    })();
  }, [user.id]);

  const handleActivateUserSwitch = useCallback(() => {
    showPopup({
      type: 'info',
      title: 'Aviso',
      description: `Você está prestes a ${
        user.activated ? 'desativar' : 'ativar'
      } o usuário(a) ${user.name}! Clique no botão abaixo para confirmar!`,
      hasConfirmButton: true,
      onClickConfirmButton: () => {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          },
        };
        (async function switchUserActivatedStatus() {
          const response = await api.patch(
            `/users/changeActivate/${user.id}`,
            {},
            config,
          );
          setUser(response.data);
          setIsUserActivated(user.activated);
        })();
      },
    });
  }, [showPopup, user.activated, user.id]);

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
            <UserStatusControlDiv>
              {user.activated ? (
                <MdCheckCircle size={25} style={{ color: '#16bac5' }} />
              ) : (
                <MdError size={25} style={{ color: '#FF7700' }} />
              )}
              <SwitchButton
                isOn={isUserActivated}
                onClick={handleActivateUserSwitch}
              />
            </UserStatusControlDiv>
          </Card>
          <Accordion>
            {investments.map((investment) => {
              return (
                <Panel title={investment.value}>
                  <InvestmentPanel
                    value={investment.value}
                    created_at={investment.created_at}
                    updated_at={investment.updated_at}
                    confirmed={investment.confirmed}
                  />
                </Panel>
              );
            })}
          </Accordion>
        </Content>
      </Container>
    </>
  );
};

export default Profile;
