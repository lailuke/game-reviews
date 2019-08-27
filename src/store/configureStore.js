import { createStore } from "redux";
import gameReducer from "../reducers/games.js";

export default () => {
  const store = createStore(
    gameReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
