import SessionReducer from './session_reducer';
import SongReducer from './song_reducer';
import AudioReducer from './audio_reducer';
import CommentReducer from './comment_reducer';
import UserReducer from './user_reducer';
import RandomReducer from './random_reducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
  session: SessionReducer,
  songs: SongReducer,
  audio: AudioReducer,
  comments: CommentReducer,
  users: UserReducer
});

export default rootReducer;
