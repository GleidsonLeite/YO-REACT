import React from 'react';
import Header from '../../components/Header';
import { Container, Content, ImagePresentation, Presentation } from './styles';

import entrepreneur from '../../assets/img/entrepreneur.jpg';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Presentation>
            <h1>Alta performance com risco calculado</h1>
            <p>
              Somos uma Fintech especializada na bolsa de valores. Nossa equipe
              possui experiência em negociações de cfds, forex, stocks e
              índices.
            </p>
          </Presentation>
          <ImagePresentation>
            <img src={entrepreneur} alt="" />
          </ImagePresentation>
        </Content>
      </Container>
    </>
  );
};

export default Main;
