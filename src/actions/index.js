export const wonBall = (player) => {
  return(
    {
      type: "BALL_WON",
      player
    }
  );
}

export const wonGame = (player, game) => {
  return(
    {
      type: "GAME_WON",
      player,
      game
    }
  );
}

export const nextGame = () => {
  return(
    {
      type: "NEXT_GAME",
    }
  );
}

export const advantage = (player, game) => {
  return(
    {
      type: "ADVANTAGE",
      player,
      game
    }
  );
}
