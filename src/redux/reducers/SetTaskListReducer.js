import { SetTasklist } from "../ActionTypes";
import MockTasks from "../../MockTasks";

export const setTaskList = (state = { taskList: [...MockTasks] }, action) => {
  switch (action.type) {
    case SetTasklist:
      return { ...state, taskList: [...action.payload.newMockTask] };
    default:
      return state;
  }
};
