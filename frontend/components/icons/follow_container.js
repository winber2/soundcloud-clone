import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../util/follow_api_util';
import { fetchUser } from '../../actions/user_actions';
import Follow from './follow';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  followUser: (currentUser, user) => followUser(currentUser, user),
  unfollowUser: id => unfollowUser(id),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);
