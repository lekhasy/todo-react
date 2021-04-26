import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReduder";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
