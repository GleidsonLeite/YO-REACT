import React from 'react';

import { Line } from 'react-chartjs-2';
import { Container, Content } from './style';

const LineGraph: React.FC = () => {
  const options = {
    legend: { display: false },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
    tooltips: {
      backgroundColor: 'rgba(103, 48, 227, .8)',
    },
    elements: {
      line: {
        borderWidth: 5,
        borderColor: '#6730e3',
      },
    },
    scales: {
      xAxes: [
        {
          display: false,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  const chart = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx?.createLinearGradient(0, 0, 0, 255);
    gradient?.addColorStop(0, 'rgba(103, 48, 227, 1)');
    gradient?.addColorStop(0.1, 'rgba(103, 48, 227, .9)');
    gradient?.addColorStop(0.2, 'rgba(103, 48, 227, .8)');
    gradient?.addColorStop(0.3, 'rgba(103, 48, 227, .7)');
    gradient?.addColorStop(0.4, 'rgba(103, 48, 227, .6)');
    gradient?.addColorStop(0.5, 'rgba(103, 48, 227, .5)');
    gradient?.addColorStop(0.6, 'rgba(103, 48, 227, .4)');
    gradient?.addColorStop(0.7, 'rgba(103, 48, 227, .3)');
    gradient?.addColorStop(0.8, 'rgba(103, 48, 227, .2)');
    gradient?.addColorStop(0.9, 'rgba(103, 48, 227, .1)');
    return {
      labels: ['monday', 'tyesday', 'wednesday', 'thursday', 'friday'],
      datasets: [
        {
          label: 'Investmentos',
          data: [32, 45, 12, 76, 69],
          backgroundColor: gradient,
          pointBackgroundColor: '#fff',
          pointRadius: 2,
        },
      ],
    };
  };

  return (
    <Container>
      <Content>
        <Line data={chart} options={options} />
      </Content>
    </Container>
  );
};

export default LineGraph;
