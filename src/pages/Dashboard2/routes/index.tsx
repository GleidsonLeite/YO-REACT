import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/dashboard2/main" component={Main} />
  </Switch>
);

export default Routes;
