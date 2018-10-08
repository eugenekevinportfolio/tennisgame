import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import {
  nextGame
} from '../actions/index.js';

class GameWon extends Component {
  render() {
    const { games, current_game, players } = this.props;
    const winner_id = games[current_game].wonBy;
    const winner = players[winner_id].name;

    return (
      <div className="gamewon">
        <p>
          Game {current_game} has been won by player {winner}!
        </p>
        <button onClick={() => this.props.nextGame()}>
          Play again!
        </button>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    nextGame
  }, dispatch)
}

const selector = createSelector(
  state => state['current_game'],
  state => state['games'],
  state => state['players'],
  (
    current_game,
    games,
    players,
) => {
    return  {
      current_game,
      games,
      players,
    };
  }
);

export default connect(selector, matchDispatchToProps)(GameWon);
