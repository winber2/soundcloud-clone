import { connect } from 'react-redux';
import { deleteSong } from '../../actions/song_actions';
import SongDetail from './song_detail';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteSong: id => dispatch(deleteSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
