import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchSongs } from '../../actions/song_actions';
import LoggedHome from './logged_home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedHome);
