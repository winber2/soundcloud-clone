import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchSingleSong, fetchSongs } from '../../actions/song_actions';
import SongPage from './song_page';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  song: state.songs[ownProps.match.params.songId]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSingleSong: (id) => dispatch(fetchSingleSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
