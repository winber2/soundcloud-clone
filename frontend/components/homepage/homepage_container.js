import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import HomePage from './homepage';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
