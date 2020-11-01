import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./toLocalStorage";

const initialState = loadState();
console.log(initialState);

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
store.subscribe(function () {
  saveState(store.getState());
});

export default store;
