export const RANDOM_SONGS = "RANDOM_SONGS";
export const RANDOM_USERS = "RANDOM_USERS";

import * as SongUtil from '../util/song_api_util';
import * as UserUtil from '../util/user_api_util';

export const receiveRandomSongs = songs => ({
  type: RANDOM_SONGS,
  songs
});

export const receiveRandomUsers = users => ({
  type: RANDOM_USERS,
  users
});

export const fetchRandomSongs = query => dispatch => (
  SongUtil.fetchSongs(query)
    .then(songs => dispatch(receiveRandomSongs(songs)))
);

export const fetchRandomUsers = query => dispatch => (
  UserUtil.fetchUsers(query)
    .then(users => dispatch(receiveRandomUsers(users)))
);
