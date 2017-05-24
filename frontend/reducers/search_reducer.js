import { RECEIVE_USER_DATA, RECEIVE_SONG_DATA } from "../actions/random_actions";
import merge from 'lodash/merge';

const _defaultState = {
  users: {},
  songs: {}
};

const RandomReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER_DATA:
      newState.users = actions.users;
      return newState;

    case RECEIVE_SONG_DATA:
      newState.songs = action.songs;
      return newState;

    default:
      return state;
  }
};

export default RandomReducer;
