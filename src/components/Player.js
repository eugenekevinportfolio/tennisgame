import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import {
  wonBall,
  wonGame,
  advantage
} from '../actions/index.js';

class Player extends Component {
  render() {
    const { id, players, current_game, games } = this.props;
    const nemesis_id = id === "player1" ? "player2" : "player1";

    return (
      <div className="player">
        <h2 style={games[current_game].advantage === id ? {
          textDecoration: "underline"
        } : {}}>
          {players[id].name}
        </h2>
        <p>
          {players[id].score}
        </p>
        <button onClick={() => {
          if (players[nemesis_id].score === 40) {
            if (players[id].score < 40) {
              this.props.wonBall(id);
            }
            else if (players[id].score === 40) {
              if (games[current_game].advantage === id) {
                this.props.wonGame(id, current_game);
              }
              else if (games[current_game].advantage === nemesis_id) {
                this.props.advantage("", current_game);
              }
              else if (games[current_game].advantage === "") {
                this.props.advantage(id, current_game);
              }
            }
          }
          else {
            if (players[id].score < 40) {
              this.props.wonBall(id);
            }
            else if (players[id].score === 40) {
              this.props.wonGame(id, current_game);
            }
          }
        }}>
          Won the ball!
        </button>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    wonBall,
    wonGame,
    advantage
  }, dispatch)
}

const selector = createSelector(
  state => state['current_game'],
  state => state['games'],
  state => state['players'],
  (
    current_game,
    games,
    players
) => {
    return {
      current_game,
      games,
      players
    };
  }
);

export default connect(selector, matchDispatchToProps)(Player);
