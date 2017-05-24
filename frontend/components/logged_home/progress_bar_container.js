import { connect } from 'react-redux';
import { receiveAudio, receivePlayer } from '../../actions/audio_actions';
import ProgressBar from './progress_bar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  audio: state.audio
});

const mapDispatchToProps = dispatch => ({
  receiveAudio: audio => dispatch(receiveAudio(audio)),
  receivePlayer: audio => dispatch(receivePlayer(audio))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar);
