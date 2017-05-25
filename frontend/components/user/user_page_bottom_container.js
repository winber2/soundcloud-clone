import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserSongs } from '../../actions/song_actions';
import UserPageBottom from './user_page_bottom';
import { selectUser } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: selectUser(state, ownProps),
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  fetchUserSongs: id => dispatch(fetchUserSongs(id)),
  fetchUser: user => dispatch(fetchUser(user)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPageBottom));
