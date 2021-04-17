export const ChangeInputValue = (newInputValue) => {
  return {
    type: "Change_Input_Value",
    payload: {
      newInputValue,
    },
  };
};

export const SetTaskList = (newMockTask) => {
  return {
    type: "Set_Task_list",
    payload: {
      newMockTask,
    },
  };
};
