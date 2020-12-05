import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Main from '../pages/Main';
import Unactivated from '../pages/Unactivated';
import NotFound from '../pages/NotFound';
import Admin from '../pages/Admin';
import Profile from '../pages/Profile';
import Investment from '../pages/Investment';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/signIn" component={SignIn} />
    <Route path="/signUp" component={SignUp} />
    <Route path="/unactivated" component={Unactivated} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/investment" component={Investment} isPrivate />
    <Route path="/admin" component={Admin} isPrivate isAdmin />
    <Route path="/user/:id" component={Profile} isPrivate isAdmin />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
