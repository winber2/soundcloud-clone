import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchSongs } from '../../actions/song_actions';
import { receiveAudio } from '../../actions/audio_actions';
import LoggedHome from './logged_home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  audio: state.audio
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSongs: () => dispatch(fetchSongs()),
  receiveAudio: song => dispatch(receiveAudio(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedHome);
