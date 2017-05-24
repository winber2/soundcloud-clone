import { RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG, APPEND_SONGS, RANDOM_SONGS } from "../actions/song_actions";
import merge from 'lodash/merge';

const _defaultState = {
  id: undefined,
  track_url: '',
  user: { followers: [] }
};

const SongReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      if (newState.random !== undefined) {
        if (newState.random[action.song.id] !== undefined ) {
          newState.random[action.song.id] = action.song;
        }
      }
      return newState;

    case RECEIVE_SONGS:
      let random = newState.random;
      newState = action.songs;
      newState.random = random;
      return newState;

    case REMOVE_SONG:
      delete newState[action.song.id];
      return newState;

    case APPEND_SONGS:
      for (let key in action.songs) {
        if (key === 'order') {
          newState[key] = newState[key].concat(action.songs[key]);
        } else {
          newState[key] = action.songs[key];
        }
      }
      return newState;

    case RANDOM_SONGS:
      delete action.songs['order'];
      newState.random = action.songs
      return newState;

    default:
      return state;
  }
};

export default SongReducer;
