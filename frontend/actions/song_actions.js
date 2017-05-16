import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchSingleSong = id => dispatch => (
  APIUtil.fetchSingleSong(id)
  .then(song => dispatch(receiveSong(song)))
);

export const createSong = (song) => dispatch => (
  APIUtil.createSong(song)
  .then(newSong => dispatch(receiveSong(newSong)))
);

export const fetchSongs = () => dispatch => (
  APIUtil.fetchSongs()
    .then(songs => {
      debugger;
      return dispatch(receiveSongs(songs));
    }
  )
);

window.createSong = createSong;
