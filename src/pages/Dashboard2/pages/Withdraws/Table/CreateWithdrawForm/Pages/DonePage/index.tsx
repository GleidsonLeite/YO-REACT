import React from 'react';

import { Container, Content, TextContent } from '../BS2/style';

interface DonePageProps {
  id: string;
  value: string;
  depositOption: number;
}

const DonePage: React.FC = () => {
  return (
    <Container>
      <Content>
        <TextContent>
          <h1>Saque Solicitado</h1>
          <p>
            O saque foi solicitado com sucesso. Confira abaixo os dados da sua
            solicitação
          </p>
        </TextContent>
      </Content>
    </Container>
  );
};

export default DonePage;
