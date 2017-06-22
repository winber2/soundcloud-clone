import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, editUser } from '../../actions/user_actions';
import UserPage from './user_page';
import { selectUser } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: selectUser(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user)),
  editUser: (user, id) => dispatch(editUser(user, id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage));
