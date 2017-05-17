import SessionReducer from './session_reducer';
import SongReducer from './song_reducer';
import AudioReducer from './audio_reducer;'
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
  session: SessionReducer,
  songs: SongReducer,
  audio: AudioReducer
});

export default rootReducer;
