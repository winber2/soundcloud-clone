import { connect } from 'react-redux';
import { receiveAudio } from '../../ations/audio_actions';
import Stream from './stream';

const mapStateToProps = (state) => ({
  audio: state.audio
});

const mapDispatchToProps = dispatch => ({
  receiveAudio: song => dispatch(receiveAudio(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
