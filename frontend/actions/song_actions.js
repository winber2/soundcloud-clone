import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

export const removeSong = song => ({
  type: REMOVE_SONG,
  song
})

export const deleteSong = id => dispatch => (
  APIUtil.deleteSong(id)
    .then(song => dispatch(removeSong(song)))
);

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
    .then(songs => dispatch(receiveSongs(songs)))
);

export const editSong = song => dispatch => (
  APIUtil.updateSong(song)
    .then(editSong => dispatch(receiveSong(editSong)))
);

window.createSong = createSong;
