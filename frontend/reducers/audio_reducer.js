import { RECEIVE_AUDIO, RECEIVE_PLAYER } from "../actions/audio_actions";
import merge from 'lodash/merge';

const _defaultState = {
  song: { track_url: undefined, id: undefined, user: {} },
  player: null,
  isPlaying: false
};

const AudioReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_AUDIO:
      return merge({}, action.audio);

    case RECEIVE_PLAYER:
      newState.player = action.audio.player;
      return newState;

    default:
      return newState;
  }
};

export default AudioReducer;
