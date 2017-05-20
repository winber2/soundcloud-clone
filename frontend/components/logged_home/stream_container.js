import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import Stream from './stream';

const mapStateToProps = (state) => ({
  audio: state.audio,
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
