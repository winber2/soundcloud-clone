import { connect } from 'react-redux';
import { receiveAudio, receivePlayer } from '../../actions/audio_actions';
import ProgressBar from './progress_bar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  audio: state.audio
});

const mapDispatchToProps = dispatch => ({
  receiveAudio: song => dispatch(receiveAudio(song)),
  recivePlayer: player => dispatch(receivePlayer(player))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar);
