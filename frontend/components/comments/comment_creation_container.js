import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentCreation from './comment_creation';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  audio: state.audio
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentCreation);
