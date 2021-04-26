import { applyMiddleware } from "redux";
import { compose } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReduder";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default createStore(
  rootReducer,
  // composeEnhancers(
  applyMiddleware(thunk)
  // )
);
