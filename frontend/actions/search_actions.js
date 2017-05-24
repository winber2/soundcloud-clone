export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const RECEIVE_SONG_DATA = "RECEIVE_SONG_DATA";

import * as SongUtil from '../util/song_api_util';
import * as UserUtil from '../util/user_api_util';

export const receiveUsersData = users => ({
  type: RECEIVE_USER_DATA,
  users
});

export const receiveSongsData = songs => ({
  type: RECEIVE_SONG_DATA,
  songs
});

export const fetchSongs = query => dispatch => (
  SongUtil.fetchSongs(query)
    .then(songs => dispatch(receiveSongsData(songs)))
);

export const fetchUsers = query => dispatch => (
  UserUtil.fetchUsers(query)
    .then(users => dispatch(receiveUsersData(users)))
);
