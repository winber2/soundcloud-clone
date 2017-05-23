import { connect } from 'react-redux';
import { fetchSongs, fetchMoreSongs } from '../../actions/song_actions';
import Stream from './stream';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  audio: state.audio,
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: (query) => dispatch(fetchSongs(query)),
  fetchMoreSongs: (query) => dispatch(fetchMoreSongs(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
