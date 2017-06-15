import { connect } from 'react-redux';
import { repostSong, deleteRepost } from '../../util/repost_api_util';
import { fetchSingleSong } from '../../actions/song_actions';
import { fetchUser } from '../../actions/user_actions';
import Repost from './repost';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  repostSong: (currentUser, user) => repostSong(currentUser, user),
  deleteRepost: id => deleteRepost(id),
  fetchSingleSong: id => dispatch(fetchSingleSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repost);
