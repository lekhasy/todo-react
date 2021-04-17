import { combineReducers } from "redux";
import { todo } from "./TodoReducer";
import { auth } from "./AuthReducer";
import { setTaskList } from "./SetTaskListReducer";

export default combineReducers({
  authState: auth,
  toDoState: todo,
  setTaskState: setTaskList,
});
