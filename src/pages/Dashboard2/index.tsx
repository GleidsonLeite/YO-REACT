import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import Routes from './routes';

const Dashboard2: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes />
    </BrowserRouter>
  );
};

export default Dashboard2;
