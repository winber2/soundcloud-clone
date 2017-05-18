import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
    .then(newComment => dispatch(receiveComment(newComment)))
);

export const fetchComments = (id) => dispatch => (
  APIUtil.fetchComments(id)
    .then(comments => dispatch(receiveComments(comments)))
);