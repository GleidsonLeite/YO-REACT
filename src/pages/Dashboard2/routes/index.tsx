import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/main';
import Profile from '../pages/Profile';
import Support from '../pages/Support';
// eslint-disable-next-line import/no-named-default
import { default as MainPage } from '../../Main';
import DepositPage from '../pages/Deposit';
import WithdrawPage from '../pages/Withdraws';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" render={() => <MainPage />} />
    <Route path="/dashboard2/main" component={Main} />
    <Route path="/dashboard2/Profile" component={Profile} />
    <Route path="/dashboard2/Support" component={Support} />
    <Route path="/dashboard2/Withdraws" component={WithdrawPage} />
    <Route path="/dashboard2/Deposits" component={DepositPage} />
  </Switch>
);

export default Routes;
