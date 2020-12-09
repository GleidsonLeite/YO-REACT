import React from 'react';
import Header from '../../components/Header';
import { Container, Content, ImagePresentation, Presentation } from './styles';

import testImage from '../../assets/img/app-product.png';
import Popup from '../../components/Popup';

const Main: React.FC = () => {
  return (
    <>
      <Popup />
      <Header />
      <Container>
        <Content>
          <Presentation>
            <h1>
              <strong>Investindo </strong>
              com alta performance
            </h1>
            <p>
              Somos uma Fintech especializada na bolsa de valores. Nossa equipe
              possui experiência em negociações de cfds, forex, stocks e
              índices.
            </p>
          </Presentation>
          <ImagePresentation>
            <img src={testImage} alt="" />
          </ImagePresentation>
        </Content>
      </Container>
    </>
  );
};

export default Main;
