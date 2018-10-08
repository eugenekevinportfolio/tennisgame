import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import map from 'lodash/map';
import Player from './Player.js';
import GameWon from './GameWon.js';
import '../styles/App.css';

class App extends Component {
  renderPlayers() {
    const { players } = this.props;

    return(
      map(
        players,
        (player, id) => <Player key={id} id={id} />
      )
    );
  }

  renderGame() {
    const { current_game, games } = this.props;

    if (games[current_game].wonBy === "") {
      return this.renderPlayers()
    }
    else {
      return <GameWon />
    }
  }

  render() {
    const { current_game, games } = this.props;
    return (
      <div className="App">
        <h1>
          Game {current_game}
        </h1>
        <p
          style={(games[current_game].advantage !== "" && games[current_game].wonBy === "") ? {
            opacity: 1
          } : {}}
          className="matchpoint">
          MATCH POINT!
        </p>
        <div className="game">
          {this.renderGame()}
        </div>
      </div>
    );
  }
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

export default connect(selector)(App);
