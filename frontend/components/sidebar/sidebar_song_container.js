import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteSong } from '../../actions/song_actions';
import SidebarSong from './sidebar_song';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarSong));
