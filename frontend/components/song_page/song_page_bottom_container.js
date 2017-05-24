import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments, deleteComment, editComment } from '../../actions/comment_actions';
import { fetchSingleSong } from '../../actions/song_actions';
import SongPageBottom from './song_page_bottom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  fetchComments: (id) => dispatch(fetchComments(id)),
  fetchSingleSong: (id) => dispatch(fetchSingleSong(id)),
  deleteComment: (comment) => dispatch(deleteComment(comment)),
  editComment: (comment) => dispatch(editComment(comment))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(SongPageBottom));
