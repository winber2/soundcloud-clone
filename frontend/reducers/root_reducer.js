import SessionReducer from './session_reducer';
import SongReducer from './song_reducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
  session: SessionReducer,
  songs: SongReducer
});

export default rootReducer;
