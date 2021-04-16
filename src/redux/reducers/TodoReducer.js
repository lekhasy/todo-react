export const todo = (state = { taskList: [], newTaskName: "" }, action) => {
  switch (action.type) {
    case "Change_Input_Value": {
      return { ...state, newTaskName: action.payload.newInputValue };
    }
    default:
      return state;
  }
};
