const initialState = {
  1: {
    wonBy: "",
    advantage: "",
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GAME_WON":
      return {
        ...state,
        [action.game]: {
          ...state[action.game],
          wonBy: action.player
        }
      }
    case "NEXT_GAME":
    const games_ids = Object.keys(state);
    const last_id = games_ids[games_ids.length - 1];
      return {
        ...state,
        [+last_id + 1] : {
          wonBy: "",
          advantage: "",
        }
      }
    case "ADVANTAGE":
      return {
        ...state,
        [action.game]: {
          ...state[action.game],
          advantage: action.player
        }
      }
  }
  return state;
};
