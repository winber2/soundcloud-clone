import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSOngs } from '../../actions/song_actions';
import SideBar from './sidebar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  users: state.users,
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
