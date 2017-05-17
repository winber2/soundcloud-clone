import { RECEIVE_AUDIO, RECEIVE_PLAYER } from "../actions/audio_actions";
import merge from 'lodash/merge';

const _defaultState = {
  track_url: '',
  isPlaying: false
};

const AudioReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_AUDIO:
      return merge(newState, action.audio);

    case RECEIVE_PLAYER:
      return merge(newState, action.audio);

    default:
      return state;
  }
};

export default AudioReducer;
