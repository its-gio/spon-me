import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserMap from './components/UserMap/UserMap';
import Home from './components/Home/Home';

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/account" component={UserMap} />
  </Switch>
)