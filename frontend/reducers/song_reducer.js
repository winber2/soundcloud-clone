import { RECEIVE_SONGS, RECEIVE_SONG } from "../actions/song_actions";
import merge from 'lodash/merge';


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

const song = {
    title: 'username song',
    author_id: '1',
    genre: 'Future Funk',
    album: 'album',
    release_date: '05/14/2017',
    image_url: 'http://res.cloudinary.com/winber1/image/upload/v1494889520/ditto_fag_qjnfcv.jpg',
    track_url: 'http://res.cloudinary.com/winber1/video/upload/v1494889475/05_-_Love_Ya_ei2alj.mp3'
};
