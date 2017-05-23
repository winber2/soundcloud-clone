import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import { fetchSongs } from '../../actions/song_actions';
import HomePage from './homepage';

const mapStateToProps = (state) => ({
  errors: state.session.errors,
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchSongs: (query) => dispatch(fetchSongs(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
