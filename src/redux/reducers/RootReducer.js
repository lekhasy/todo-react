import { combineReducers } from "redux";
import { todo } from "./TodoReducer";
import { auth } from "./AuthReducer";

export default combineReducers({ authState: auth, toDoState: todo });
