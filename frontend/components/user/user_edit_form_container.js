import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import UserEditForm from './user_edit_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: selectUser(state, ownProps)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(UserEditForm));
