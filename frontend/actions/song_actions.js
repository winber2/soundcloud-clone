import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const APPEND_SONGS = "APPEND_SONGS";
export const RANDOM_SONGS = "RANDOM_SONGS";
export const RANDOM_SONG = "RANDOM_SONG";

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
});

export const appendSongs = songs => ({
  type: APPEND_SONGS,
  songs
});

export const receiveRandomSongs = songs => ({
  type: RANDOM_SONGS,
  songs
});

export const receiveSingleRandomSong = song => ({
  type: RANDOM_SONG,
  song
});

export const deleteSong = id => dispatch => (
  APIUtil.deleteSong(id)
    .then(song => dispatch(removeSong(song)))
);

export const fetchSingleSong = id => dispatch => (
  APIUtil.fetchSingleSong(id)
    .then(song => dispatch(receiveSong(song)))
);

export const fetchSelectedRandomSong = id => dispatch => (
  APIUtil.fetchSingleSong(id)
    .then(song => dispatch(receiveSingleRandomSong(song)))
);

export const createSong = (song) => dispatch => (
  APIUtil.createSong(song)
    .then(newSong => dispatch(receiveSong(newSong)))
);

export const fetchSongs = (query) => dispatch => (
  APIUtil.fetchSongs(query)
    .then(songs => dispatch(receiveSongs(songs)))
);

export const fetchRandomSongs = (query) => dispatch => (
  APIUtil.fetchSongs(query)
    .then(songs => dispatch(receiveRandomSongs(songs)))
);

export const fetchMoreSongs = (query) => dispatch => (
  APIUtil.fetchSongs(query)
    .then(songs => dispatch(appendSongs(songs)))
);

export const fetchUserSongs = id => dispatch => (
  APIUtil.fetchSongs(id)
    .then(songs => dispatch(receiveSongs(songs)))
);

export const editSong = song => dispatch => (
  APIUtil.updateSong(song)
    .then(editedSong => dispatch(receiveSong(editedSong)))
);
