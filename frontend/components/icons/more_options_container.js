import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteSong } from '../../actions/song_actions';
import MoreOptions from './more_options';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteSong: (song) => dispatch(deleteSong(song))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(MoreOptions));
