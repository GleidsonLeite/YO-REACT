import React, { useCallback } from 'react';
import Header from '../../components/Header';
import Overview from './Overview';
import Button from './CloseInvestmentButton';
import { Container, Content } from './styles';
import CloseInvestmentForm from './CloseInvestmentForm';

const CloseInvestment: React.FC = () => {
  const handleCloseInvestmentButtonOnClick = useCallback(() => {
    console.log('Hello World');
  }, []);
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