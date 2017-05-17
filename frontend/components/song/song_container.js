import { connect } from 'react-redux';
import { receiveAudio } from '../../actions/audio_actions';
import Song from './song';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  audio: state.audio
});

const mapDispatchToProps = dispatch => ({
  receiveAudio: song => dispatch(receiveAudio(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);
