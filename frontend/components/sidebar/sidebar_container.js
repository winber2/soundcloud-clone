import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRandomUsers } from '../../actions/user_actions';
import { fetchRandomSongs } from '../../actions/song_actions';
import SideBar from './sidebar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  users: state.users,
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  fetchRandomSongs: (query) => dispatch(fetchRandomSongs(query)),
  fetchRandomUsers: (query) => dispatch(fetchRandomUsers(query))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar));
