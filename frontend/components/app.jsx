import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';

const App = () =>(
  <div>
    <Switch>
      <AuthRoute exact path="/" component={HomePageContainer} />
      <ProtectedRoute exact path="/stream" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/charts" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/discover" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/upload" component={LoggedHomeContainer} />
      <ProtectedRoute path="/:username/songs/:songId" component={LoggedHomeContainer} />
      <ProtectedRoute path="/:username" component={LoggedHomeContainer} />
      <Route path="/" component={() => <h1>ERROR</h1>} />
    </Switch>
  </div>
);

export default App;
