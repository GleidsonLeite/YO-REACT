import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
