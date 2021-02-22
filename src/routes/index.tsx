import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import MainPage from '../pages/Main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Admin from '../pages/Admin';
import Unactivated from '../pages/Unactivated';
import RecoverPassword from '../pages/RecoverPassword';
import CloseInvestment from '../pages/CloseInvestment';
import Main from '../pages/Dashboard2/pages/main';
import Profile from '../pages/Dashboard2/pages/Profile';
import Support from '../pages/Dashboard2/pages/Support';
import WithdrawPage from '../pages/Dashboard2/pages/Withdraws';
import DepositPage from '../pages/Dashboard2/pages/Deposit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/signUp" component={SignUp} />
    <Route path="/signIn" component={SignIn} />
    {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
    <Route path="/admin" component={Admin} isPrivate />
    <Route
      path="/closeInvestment"
      component={CloseInvestment}
      isPrivate
      isForAdmin
    />
    <Route path="/user/:id" component={Profile} isPrivate isForAdmin />
    <Route
      path="/unactivated"
      component={Unactivated}
      isPrivate
      isForUnactivated
    />
    <Route path="/recoverPassword/:token" component={RecoverPassword} />
    <Route path="/dashboard2" exact component={Main} />
    <Route path="/dashboard2/Profile" component={Profile} />
    <Route path="/dashboard2/Support" component={Support} />
    <Route path="/dashboard2/Withdraws" component={WithdrawPage} />
    <Route path="/dashboard2/Deposits" component={DepositPage} />
  </Switch>
);

export default Routes;
