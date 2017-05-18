import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSingleSong, fetchSongs } from '../../actions/song_actions';
import { receiveAudio } from '../../actions/audio_actions';
import { fetchComments } from '../../actions/comment_actions';
import SongPage from './song_page';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  song: state.songs[ownProps.match.params.songId],
  audio: state.audio,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSingleSong: (id) => dispatch(fetchSingleSong(id)),
  receiveAudio: song => dispatch(receiveAudio(song)),
  fetchComments: (id) => dispatch(fetchComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
