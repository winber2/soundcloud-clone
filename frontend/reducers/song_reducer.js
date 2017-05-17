import { RECEIVE_SONGS, RECEIVE_SONG, RECEIVE_AUDIO } from "../actions/song_actions";
import merge from 'lodash/merge';

const _defaultState = {
  id: undefined,
  track_url: ''
};

const SongReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;

    case RECEIVE_SONGS:
      return action.songs;

    default:
      return state;
  }
};

export default SongReducer;
