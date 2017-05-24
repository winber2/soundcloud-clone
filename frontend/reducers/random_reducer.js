import { RANDOM_SONGS, RANDOM_USERS } from "../actions/random_actions";
import merge from 'lodash/merge';

const _defaultState = {
  users: [],
  songs: []
};

const RandomReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RANDOM_SONGS:
      newState.songs = action.songs;
      return newState;

    case RANDOM_USERS:
      newState.users = action.users;
      return newState;

    default:
      return state;
  }
};

export default RandomReducer;
