import { connect } from 'react-redux';
import { fetchSongs, fetchUsers } from '../../actions/search_actions';
import Collection from './collection';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: query => dispatch(fetchSongs(query)),
  fetchUsers: query => dispatch(fetchUsers(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
