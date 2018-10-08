import { combineReducers } from 'redux';
import current_game from './reducer-current-game.js';
import games from './reducer-games.js';
import players from './reducer-players.js';

const allReducers = combineReducers({
  current_game,
  games,
  players
});

export default allReducers;
