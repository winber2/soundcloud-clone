import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: query => dispatch(fetchSongs(query)),
  fetchUsers: query => dispatch(fetchSongs(query))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
