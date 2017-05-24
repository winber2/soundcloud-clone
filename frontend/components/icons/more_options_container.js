import { connect } from 'react-redux';
import { fetchUser } from '../../actions/song_actions';
import MoreOptions from './more_options';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteSong: (song) => dispatch(deleteSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreOptions);
