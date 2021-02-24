import React from 'react';
import { IInvestment } from '../../../../../../../DTOs/IInvestment';
import Presentation from './Presentation';

interface DetailPageProps {
  investment: IInvestment;
}

const DetailPage: React.FC<DetailPageProps> = ({ investment }) => {
  return <Presentation investment={investment} />;
};

export default DetailPage;
