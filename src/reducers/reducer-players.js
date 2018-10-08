const initialState = {
  player1: {
    name: "Player 1",
    balls: 0,
    score: 0
  },
  player2: {
    name: "Player 2",
    balls: 0,
    score: 0
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "BALL_WON":
    const possible_scores = [0, 15, 30, 40];
    const score = possible_scores[state[action.player].balls + 1];
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          balls: state[action.player].balls + 1,
          score: score
        }
      }
    case "NEXT_GAME":
     return initialState;
  }
  return state;
};
