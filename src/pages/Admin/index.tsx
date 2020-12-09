import React from 'react';
import Header from '../../components/Header';

import { Container, Content } from './styles';

import UsersList from './UsersList';

const Admin: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <UsersList />
        </Content>
      </Container>
    </>
  );
};

export default Admin;
