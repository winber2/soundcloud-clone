import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editSong } from '../../actions/song_actions';
import SongEditForm from './song_edit_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  editSong: song => dispatch(deleteSong(song))
});

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(SongEditForm));
