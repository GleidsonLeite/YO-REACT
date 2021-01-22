import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from '../pages/main';
import Profile from '../pages/Profile';
import Support from '../pages/Support';
// eslint-disable-next-line import/no-named-default
import { default as MainPage } from '../../Main';
import Investments from '../pages/Investments';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" render={() => <MainPage />} />
    <Route path="/dashboard2/main" component={Main} />
    <Route path="/dashboard2/Profile" component={Profile} />
    <Route path="/dashboard2/Support" component={Support} />
    <Route path="/dashboard2/Investments" component={Investments} />
  </Switch>
);

export default Routes;
