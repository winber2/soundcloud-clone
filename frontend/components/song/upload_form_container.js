import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';
import UploadForm from './upload_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createSong: song => dispatch(creatSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
