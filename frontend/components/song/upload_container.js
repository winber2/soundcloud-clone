import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';
import Upload from './upload';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createSong: song => dispatch(creatSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
