import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <ProtectedRoute path="/" component={LoggedHomeContainer} />
    </Switch>
  </div>
);

export default App;
