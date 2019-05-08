import { combineReducers } from 'redux';

import error from './error';
import player from './player';
import playlistDetails from './playlistDetails';
import playlists from './playlists';

export default combineReducers({
  error,
  player,
  playlistDetails,
  playlists,
});
