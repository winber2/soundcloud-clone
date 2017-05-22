import { RECEIVE_SONG, fetchSingleSong } from './song_actions';
import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";



export const createFavorite = (user, favoritable) => dispatch => (
  APIUtil.createFavorite(user, favoritable)
);
