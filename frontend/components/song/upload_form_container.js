import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSong } from '../../actions/song_actions';
import UploadForm from './upload_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createSong: song => dispatch(createSong(song))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
(UploadForm));
