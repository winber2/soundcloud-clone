import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/stream" />
    )
  )}/>
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/"/>
    )
  )}/>
);

// access the Redux state to check if the user is logged in
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// connect Auth to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
