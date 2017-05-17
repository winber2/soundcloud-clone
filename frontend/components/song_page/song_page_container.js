import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSingleSong, fetchSongs } from '../../actions/song_actions';
import { receiveAudio } from '../../actions/audio_actions';
import SongPage from './song_page';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  song: state.songs[ownProps.match.params.songId],
  audio: state.audio
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSingleSong: (id) => dispatch(fetchSingleSong(id)),
  receiveAudio: song => dispatch(receiveAudio(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
