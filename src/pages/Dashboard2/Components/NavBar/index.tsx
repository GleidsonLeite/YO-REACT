import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './style';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Logo</h1>
        <Link to="/">
          <h1>Sair</h1>
        </Link>
      </Content>
    </Container>
  );
};

export default NavBar;
