const gamesDefaultState = [];

export default (state = gamesDefaultState, action) => {
  switch (action.type) {
    case "ADD_GAME":
      return [...state, action.game];
    default:
      return state;
  }
};
