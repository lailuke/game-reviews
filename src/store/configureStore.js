import { combineReducers, createStore } from "redux";
import gameReducer from "../reducers/games";
import menuReducer from "../reducers/menu";

export default () => {
  const rootReducers = combineReducers({
    gameReducer,
    menuReducer
  });

  const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
