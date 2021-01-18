import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/main';
import Profile from '../pages/Profile';
import Support from '../pages/Support';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/dashboard2/main" component={Main} />
    <Route path="/dashboard2/Profile" component={Profile} />
    <Route path="/dashboard2/Support" component={Support} />
  </Switch>
);

export default Routes;
