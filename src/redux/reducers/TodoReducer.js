import { ChangeInputValueType } from "../ActionTypes";

export const todo = (state = { taskList: [], newTaskName: "" }, action) => {
  switch (action.type) {
    case ChangeInputValueType: {
      return { ...state, newTaskName: action.payload.newInputValue };
    }
    default:
      return state;
  }
};
