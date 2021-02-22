import React from 'react';
import { IoBarChartOutline, IoWalletOutline } from 'react-icons/io5';
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { AiOutlinePercentage } from 'react-icons/ai';
import Card from '../../Components/Card';

import { Container, Content, Cards, GraphAndTable } from './style';
import Table from '../../Components/Table';
import LineGraph from '../../Components/LineGraph';
import Dashboard2Template from '../Template';

const Main: React.FC = () => {
  return (
    <Dashboard2Template>
      <Container>
        <Content>
          <Cards>
            <Card
              Title="Investimentos"
              Value="$ 500,00"
              Icon={<IoWalletOutline />}
            />
            <Card
              Title="Depósito"
              Value="$ 500,00"
              Icon={<FaRegMoneyBillAlt />}
            />
            <Card Title="Rendimento" Value="$ 500,00" Icon={<MdTrendingUp />} />
            <Card Title="Saques" Value="$ 500,00" Icon={<MdTrendingDown />} />
            <Card Title="Juros" Value="5%" Icon={<AiOutlinePercentage />} />
            <Card
              Title="Balanço"
              Value="$ 500,00"
              Icon={<IoBarChartOutline />}
            />
          </Cards>
          <GraphAndTable>
            <Table />
            <LineGraph />
          </GraphAndTable>
        </Content>
      </Container>
    </Dashboard2Template>
  );
};

export default Main;
