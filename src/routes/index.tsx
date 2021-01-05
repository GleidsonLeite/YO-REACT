import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import Profile from '../pages/Profile';
import Unactivated from '../pages/Unactivated';
import RecoverPassword from '../pages/RecoverPassword';
import CloseInvestment from '../pages/CloseInvestment';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/signUp" component={SignUp} />
    <Route path="/signIn" component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/admin" component={Admin} isPrivate isForAdmin />
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
    <Route component={Main} />
  </Switch>
);

export default Routes;
