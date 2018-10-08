const initialState = 1;

export default (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_GAME":
      return state + 1;
  }
  return state;
};
