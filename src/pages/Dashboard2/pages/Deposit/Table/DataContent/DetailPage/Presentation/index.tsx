import React from 'react';
import { IInvestment } from '../../../../../../../../DTOs/IInvestment';
import ConfirmedContent from './ConfirmedContent';
import UnConfirmedContent from './UnConfirmedContent';
import { Content, TextPresentation, ControlContainer } from './style';

interface PresentationProps {
  investment: IInvestment;
}

const Presentation: React.FC<PresentationProps> = ({ investment }) => {
  const investmentsTitle = ['Neteller', 'Boleto Bancário'];
  return (
    <Content>
      <TextPresentation>
        <h1>{investmentsTitle[investment.deposit_option]}</h1>
        <h3>{`Valor: ${investment.value}`}</h3>
        <h3>
          {`Criado em : ${new Date(investment.created_at).toLocaleDateString(
            'pt-BR',
          )}`}
        </h3>
        <h3>
          {`Atualizado em : ${new Date(
            investment.updated_at,
          ).toLocaleDateString('pt-BR')}`}
        </h3>
        <h3>{`ID: ${investment.id}`}</h3>
      </TextPresentation>
      <ControlContainer>
        {investment.confirmed ? <ConfirmedContent /> : <UnConfirmedContent />}
      </ControlContainer>
    </Content>
  );
};

export default Presentation;
