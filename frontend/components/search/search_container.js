import { connect } from 'react-redux';
import { fetchSongs, fetchUsers } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: query => dispatch(fetchSongs(query)),
  fetchUsers: query => dispatch(fetchSongs(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
