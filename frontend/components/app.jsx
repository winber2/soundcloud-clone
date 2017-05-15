import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from './homepage/homepage.jsx';
import LoggedHome from './logged_home/logged_home.jsx';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <ProtectedRoute path="/" component={LoggedHome} />
    </Switch>
  </div>
);

export default App;
