import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
