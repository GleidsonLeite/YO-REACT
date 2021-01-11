import React from 'react';
import { IoBarChartOutline, IoWalletOutline } from 'react-icons/io5';
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md';
import { AiOutlinePercentage } from 'react-icons/ai';
import Card from '../../Components/Card';

import { Container, Content, Cards, Graph } from './style';
import Table from './Table';
import LineGraph from '../../Components/LineGraph';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <Cards>
          <Card
            Title="Depósito Mensal"
            Value="$ 500,00"
            Icon={<IoWalletOutline />}
          />
          <Card
            Title="Rendimento"
            Value="$ 500,00"
            Icon={<IoBarChartOutline />}
          />
          <Card Title="Saques" Value="$ 500,00" Icon={<MdTrendingDown />} />
          <Card Title="Balanço" Value="$ 500,00" Icon={<MdTrendingUp />} />
          <Card Title="Juros" Value="5%" Icon={<AiOutlinePercentage />} />
        </Cards>
        <Graph>
          <LineGraph />
        </Graph>
      </Content>
    </Container>
  );
};

export default Main;
