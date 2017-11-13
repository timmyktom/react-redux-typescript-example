import * as React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './home/HomePage';

export default (
  <Switch>
    <Route path="/" component={HomePage} exact={true} />
  </Switch>
  // <Route path="/" component={App}>
  //   <IndexRoute  component={HomePage} />
  //   <Route path="home" component={HomePage} />
  // </Route>
);
