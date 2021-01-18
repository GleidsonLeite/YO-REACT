import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { Container, Content, IconDiv, TitleDiv, TextDiv } from './style';

const Presentation: React.FC = () => {
  return (
    <Container>
      <Content>
        <IconDiv>
          <BiSupport />
        </IconDiv>
        <TitleDiv>
          <h1>Está precisando de ajuda?</h1>
        </TitleDiv>
        <TextDiv>
          <h2>Estamos prontos para te ajudar!</h2>
          <p>
            Preencha o formulário para entrar em contato com a equipe de
            suporte.
          </p>
        </TextDiv>
      </Content>
    </Container>
  );
};
export default Presentation;
