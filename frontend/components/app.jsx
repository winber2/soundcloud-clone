import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';

const App = () => (
  <div>
    <Switch>

      <ProtectedRoute exact path="/stream" component={LoggedHomeContainer} />
      <AuthRoute exact path="/" component={HomePageContainer} />
      <Route path="/" component={() => <h1>ERROR</h1>} />
    </Switch>
  </div>
);

export default App;
