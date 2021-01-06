import React from 'react';
import Header from '../../components/Header';
import Overview from './Overview';
import { Container, Content } from './styles';
import CloseInvestmentForm from './CloseInvestmentForm';

const CloseInvestment: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Overview />
          <CloseInvestmentForm />
        </Content>
      </Container>
    </>
  );
};

export default CloseInvestment;
