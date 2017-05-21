import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import merge from 'lodash/merge';

const _defaultState = {
  user: {}
};

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);

    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;

    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;

    default:
      return state;
  }
};

export default CommentReducer;
