import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editSong, fetchSingleSong } from '../../actions/song_actions';
import SongEditForm from './song_edit_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  song: state.songs[ownProps.match.params.songId]
});

const mapDispatchToProps = dispatch => ({
  editSong: song => dispatch(deleteSong(song)),
  fetchSingleSong: id => dispatch(fetchSingleSong(id))
});

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(SongEditForm));
