import { connect } from 'react-redux';
import { createFavorite } from '../../actions/favorite_actions';
import Favorite from './logged_home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createFavorite: (user, favoritable) => dispatch(createFavorite(user, favoritable))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
