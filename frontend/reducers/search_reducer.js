import { RECEIVE_USER_DATA, RECEIVE_SONG_DATA } from "../actions/search_actions";
import merge from 'lodash/merge';

const _defaultState = {
  users: {},
  songs: {}
};

const SearchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER_DATA:
      newState.users = action.users;
      return newState;

    case RECEIVE_SONG_DATA:
      newState.songs = action.songs;
      delete newState.songs['random'];
      delete newState.songs['order'];
      return newState;

    default:
      return state;
  }
};

export default SearchReducer;
