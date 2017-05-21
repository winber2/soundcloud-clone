import { connect } from 'react-redux';
import { deleteSong } from '../../actions/song_actions';
import SidebarSong from './sidebar_song';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarSong);
