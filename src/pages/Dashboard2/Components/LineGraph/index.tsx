import React from 'react';

import Chart from 'react-apexcharts';
import { Container, Content, ChartContainer } from './style';

const LineGraph: React.FC = () => {
  const options = {
    stroke: {
      color: '#00A9A5',
    },
    chart: {
      type: 'area',
      foreColor: '#fff',
    },
    dataLabels: {
      enabled: false,
    },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.9,
        opacityFrom: 0.9,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    xaxis: {
      labels: {
        show: true,
      },
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan',
      ],
    },
  };

  const series = [
    {
      name: 'Series 1',
      data: [45, 52, 38, 45, 19, 23, 2],
    },
  ];
  return (
    <Container>
      <Content>
        <ChartContainer>
          <Chart options={options} series={series} type="area" />
        </ChartContainer>
      </Content>
    </Container>
  );
};

export default LineGraph;
