import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONG";
export const RECEIVE_SONG = "RECEIVE_SONGS";

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const fetchSingleSong = id => dispatch => (
  APIUtil.fetchSingleSong(id)
    .then(song => dispatch(receiveSong(song)))
);

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchSongs = () => dispatch => (
  APIUtil.fetchSongs()
    .then(songs => dispatch(receiveSongs(songs)))
);
