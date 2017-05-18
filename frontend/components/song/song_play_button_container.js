import { connect } from 'react-redux';
import { receiveAudio } from '../../actions/audio_actions';
import SongPlayButton from './song_play_button';

const mapStateToProps = (state, ownProps) => ({
  audio: state.audio
});

const mapDispatchToProps = dispatch => ({
  receiveAudio: song => dispatch(receiveAudio(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPlayButton);
