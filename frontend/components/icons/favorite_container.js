import { connect } from 'react-redux';
import { createFavorite, deleteFavorite } from '../../util/favorite_api_util';
import { fetchSelectedRandomSong } from '../../actions/song_actions';
import Favorite from './favorite';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createFavorite: (user, favoritable) => createFavorite(user, favoritable),
  deleteFavorite: id => deleteFavorite(id),
  fetchSelectedRandomSong: id => dispatch(fetchSelectedRandomSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
